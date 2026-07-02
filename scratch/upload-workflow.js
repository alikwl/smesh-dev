const url = 'https://n8ninstance.btech.cfd/mcp-server/http';
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyY2RlYThmZC01ZDhiLTQ5M2EtYTdmNC1hNjkyZDllMTJkOTQiLCJpc3MiOiJuOG4iLCJhdWQiOiJtY3Atc2VydmVyLWFwaSIsImp0aSI6ImQzOTQwMTMxLTU4NDgtNGNlZi04OTkwLTliYmMwY2VkMzI2NSIsImlhdCI6MTc4Mjk5ODI1MH0.dw1gGslF8buYydtHinkchcr_8a9LZM_oukZyLfYb_Cc';

async function callTool(name, args) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json, text/event-stream',
        'Authorization': token
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: '1',
        method: 'tools/call',
        params: {
          name: name,
          arguments: args
        }
      })
    });
    
    const body = await response.text();
    const lines = body.split('\n');
    for (const line of lines) {
      if (line.startsWith('data: ')) {
        const dataStr = line.slice(6);
        try {
          const parsed = JSON.parse(dataStr);
          return parsed;
        } catch (e) {
          // ignore parsing error
        }
      }
    }
    return body;
  } catch (e) {
    console.error("Tool call failed:", e);
  }
}

const sdkCode = `import { workflow, node, trigger, ifElse, expr, newCredential } from '@n8n/workflow-sdk';

const startWebhook = trigger({
  type: 'n8n-nodes-base.webhook',
  version: 2.1,
  config: {
    name: 'Webhook Trigger',
    parameters: {
      path: 'generate-image',
      httpMethod: 'POST',
      responseMode: 'onReceived'
    }
  }
});

const getStyle = node({
  type: 'n8n-nodes-base.supabase',
  version: 1,
  config: {
    name: 'Supabase - Get Style',
    parameters: {
      resource: 'row',
      operation: 'get',
      tableId: 'style_preferences',
      filters: {
        conditions: [
          {
            keyName: 'id',
            keyValue: expr('{{ $json.body?.style_id ?? "default" }}')
          }
        ]
      }
    },
    credentials: {
      supabaseApi: newCredential('Supabase Connection')
    }
  }
});

const promptBuilder = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Prompt Builder Code Node',
    parameters: {
      jsCode: \`const items = input.all();
return items.map(item => {
  const payload = item.json.body || {};
  const style = item.json.style_preferences || {};
  
  const rawPrompt = payload.prompt || "tech automation workspace";
  const modifier = style.modifiers || "cinematic, 8k, highly detailed, professional lighting";
  const aspect = payload.aspect_ratio || "16:9";
  
  const finalPrompt = \\\`A featured blog banner representing: \\\${rawPrompt}. Style: \\\${style.name || 'Modern Clean'}. Visual details: \\\${modifier}.\\\`;
  
  return {
    json: {
      original_prompt: rawPrompt,
      aspect_ratio: aspect,
      final_prompt: finalPrompt,
      style_name: style.name || 'Default'
    }
  };
});\`
    }
  }
});

const grokApi = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.3,
  config: {
    name: 'Grok Imagine API Call',
    parameters: {
      method: 'POST',
      url: 'https://api.x.ai/v1/images/generations',
      authentication: 'genericCredentialType',
      genericAuthType: 'httpHeaderAuth',
      sendBody: true,
      contentType: 'json',
      specifyBody: 'json',
      jsonBody: expr('{\\n  "model": "grok-2-vision-preview",\\n  "prompt": "{{ $json.final_prompt }}",\\n  "aspect_ratio": "{{ $json.aspect_ratio }}",\\n  "n": 1\\n}'),
      options: {
        response: {
          response: {
            responseFormat: 'file',
            outputPropertyName: 'data'
          }
        }
      }
    },
    credentials: {
      httpHeaderAuth: newCredential('Grok API Auth')
    }
  }
});

const checkSuccess = ifElse({
  version: 2.2,
  config: {
    name: 'Check API Success',
    parameters: {
      conditions: {
        options: { caseSensitive: true, typeValidation: 'loose' },
        conditions: [
          {
            leftValue: expr('{{ $json.error || $json.message }}'),
            operator: { type: 'string', operation: 'isEmpty' }
          }
        ],
        combinator: 'and'
      }
    }
  }
});

const fluxFallback = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.3,
  config: {
    name: 'Flux API Fallback',
    parameters: {
      method: 'POST',
      url: 'https://api.runpod.ai/v1/flux/run',
      authentication: 'genericCredentialType',
      genericAuthType: 'httpHeaderAuth',
      sendBody: true,
      contentType: 'json',
      specifyBody: 'json',
      jsonBody: expr('{\\n  "input": {\\n    "prompt": "{{ $(\\\\"Prompt Builder Code Node\\\\").item.json.final_prompt }}",\\n    "width": 1024,\\n    "height": 576\\n  }\\n}'),
      options: {}
    },
    credentials: {
      httpHeaderAuth: newCredential('Flux API Auth')
    }
  }
});

const uploadImage = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.3,
  config: {
    name: 'Supabase - Upload Image',
    parameters: {
      method: 'POST',
      url: expr('https://alikwlsmesh.supabase.co/storage/v1/object/blog-images/{{ $(\\\\"Prompt Builder Code Node\\\\").item.json.style_name.toLowerCase().replace(/\\\\s+/g, "-") }}-{{ Date.now() }}.webp'),
      authentication: 'genericCredentialType',
      genericAuthType: 'httpHeaderAuth',
      sendBody: true,
      contentType: 'binaryData',
      inputDataFieldName: 'data',
      options: {}
    },
    credentials: {
      httpHeaderAuth: newCredential('Supabase Connection Header')
    }
  }
});

const saveMetadata = node({
  type: 'n8n-nodes-base.supabase',
  version: 1,
  config: {
    name: 'Supabase - Save Metadata',
    parameters: {
      resource: 'row',
      operation: 'create',
      tableId: 'generated_images',
      dataToSend: 'defineBelow',
      fieldsUi: {
        fieldValues: [
          {
            fieldId: 'original_prompt',
            fieldValue: expr('{{ $("Prompt Builder Code Node").item.json.original_prompt }}')
          },
          {
            fieldId: 'final_prompt',
            fieldValue: expr('{{ $("Prompt Builder Code Node").item.json.final_prompt }}')
          },
          {
            fieldId: 'image_url',
            fieldValue: expr('https://alikwlsmesh.supabase.co/storage/v1/object/public/blog-images/{{ $json.Key }}')
          },
          {
            fieldId: 'style_name',
            fieldValue: expr('{{ $("Prompt Builder Code Node").item.json.style_name }}')
          },
          {
            fieldId: 'status',
            fieldValue: 'success'
          },
          {
            fieldId: 'model_used',
            fieldValue: 'grok-2-vision'
          }
        ]
      }
    },
    credentials: {
      supabaseApi: newCredential('Supabase Connection')
    }
  }
});

const errorTrigger = trigger({
  type: 'n8n-nodes-base.errorTrigger',
  version: 1,
  config: {
    name: 'Error Trigger'
  }
});

const slackAlert = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.3,
  config: {
    name: 'Slack Error Alert',
    parameters: {
      method: 'POST',
      url: 'https://hooks.slack.com/services/YOUR/WEBHOOK/URL',
      sendBody: true,
      contentType: 'json',
      specifyBody: 'json',
      jsonBody: expr('{\\n  "text": "🚨 *n8n Image Generation Workflow Failed!*\\\\n*Execution ID:* {{ $json.execution.id }}\\\\n*Error Message:* {{ $json.execution.error.message }}\\\\n*Time:* {{ $json.execution.error.timestamp }}"\\n}'),
      options: {}
    }
  }
});

export default workflow('AsA1tg1jP7X7o4Jr', 'blank')
  .add(startWebhook)
  .to(getStyle)
  .to(promptBuilder)
  .to(grokApi)
  .to(checkSuccess
    .onTrue(uploadImage.to(saveMetadata))
    .onFalse(fluxFallback.to(uploadImage).to(saveMetadata))
  )
  .add(errorTrigger)
  .to(slackAlert);
`;

async function run() {
  console.log("Validating workflow SDK code...");
  const validation = await callTool('validate_workflow', { code: sdkCode });
  console.log("Validation Result:", JSON.stringify(validation, null, 2));
  
  let isValid = false;
  try {
    if (validation?.result?.structuredContent?.valid === true) {
      isValid = true;
    } else if (validation?.result?.content?.[0]?.text) {
      const parsedText = JSON.parse(validation.result.content[0].text);
      if (parsedText.valid === true) {
        isValid = true;
      }
    }
  } catch (e) {
    console.error("Error parsing validation results:", e);
  }
  
  if (isValid) {
    console.log("Code is valid! Updating workflow AsA1tg1jP7X7o4Jr...");
    const update = await callTool('update_workflow', {
      workflowId: 'AsA1tg1jP7X7o4Jr',
      code: sdkCode,
      name: 'blank'
    });
    console.log("Update Result:", JSON.stringify(update, null, 2));
  } else {
    console.error("Validation failed! Will not update.");
  }
}

run();
