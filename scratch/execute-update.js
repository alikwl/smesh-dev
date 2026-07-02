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

async function run() {
  const workflowId = 'AsA1tg1jP7X7o4Jr';
  
  // Define operations
  const operations = [
    // 1. Remove existing nodes
    {
      type: 'removeNode',
      nodeName: 'Code'
    },
    {
      type: 'removeNode',
      nodeName: "When clicking 'Test workflow'"
    },
    
    // 2. Add new nodes
    {
      type: 'addNode',
      node: {
        name: 'Webhook Trigger',
        type: 'n8n-nodes-base.webhook',
        typeVersion: 2.1,
        position: [250, 360],
        parameters: {
          path: 'generate-image',
          httpMethod: 'POST',
          responseMode: 'onReceived'
        }
      }
    },
    {
      type: 'addNode',
      node: {
        name: 'Supabase - Get Style',
        type: 'n8n-nodes-base.supabase',
        typeVersion: 1,
        position: [470, 360],
        parameters: {
          resource: 'row',
          operation: 'get',
          tableId: 'style_preferences',
          filters: {
            conditions: [
              {
                keyName: 'id',
                keyValue: '={{ $json.body?.style_id ?? "default" }}'
              }
            ]
          }
        },
        credentials: {
          supabaseApi: {
            name: 'Supabase Connection'
          }
        }
      }
    },
    {
      type: 'addNode',
      node: {
        name: 'Prompt Builder Code Node',
        type: 'n8n-nodes-base.code',
        typeVersion: 2,
        position: [690, 360],
        parameters: {
          jsCode: `const items = input.all();
return items.map(item => {
  const payload = item.json.body || {};
  const style = item.json.style_preferences || {};
  
  const rawPrompt = payload.prompt || "tech automation workspace";
  const modifier = style.modifiers || "cinematic, 8k, highly detailed, professional lighting";
  const aspect = payload.aspect_ratio || "16:9";
  
  const finalPrompt = \`A featured blog banner representing: \${rawPrompt}. Style: \${style.name || 'Modern Clean'}. Visual details: \${modifier}.\`;
  
  return {
    json: {
      original_prompt: rawPrompt,
      aspect_ratio: aspect,
      final_prompt: finalPrompt,
      style_name: style.name || 'Default'
    }
  };
});`
        }
      }
    },
    {
      type: 'addNode',
      node: {
        name: 'Grok Imagine API Call',
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.3,
        position: [910, 360],
        parameters: {
          method: 'POST',
          url: 'https://api.x.ai/v1/images/generations',
          authentication: 'genericCredentialType',
          genericAuthType: 'httpHeaderAuth',
          sendBody: true,
          contentType: 'json',
          specifyBody: 'json',
          jsonBody: '={\n  "model": "grok-2-vision-preview",\n  "prompt": "{{ $json.final_prompt }}",\n  "aspect_ratio": "{{ $json.aspect_ratio }}",\n  "n": 1\n}',
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
          httpHeaderAuth: {
            name: 'Grok API Auth'
          }
        }
      }
    },
    {
      type: 'addNode',
      node: {
        name: 'Check API Success',
        type: 'n8n-nodes-base.if',
        typeVersion: 2.3,
        position: [1130, 360],
        parameters: {
          conditions: {
            options: { caseSensitive: true, typeValidation: 'loose' },
            conditions: [
              {
                leftValue: '={{ $json.error || $json.message }}',
                operator: { type: 'string', operation: 'isEmpty' }
              }
            ],
            combinator: 'and'
          }
        }
      }
    },
    {
      type: 'addNode',
      node: {
        name: 'Flux API Fallback',
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.3,
        position: [1350, 480],
        parameters: {
          method: 'POST',
          url: 'https://api.runpod.ai/v1/flux/run',
          authentication: 'genericCredentialType',
          genericAuthType: 'httpHeaderAuth',
          sendBody: true,
          contentType: 'json',
          specifyBody: 'json',
          jsonBody: '={\n  "input": {\n    "prompt": "{{ $(\\"Prompt Builder Code Node\\").item.json.final_prompt }}",\n    "width": 1024,\n    "height": 576\n  }\n}',
          options: {}
        },
        credentials: {
          httpHeaderAuth: {
            name: 'Flux API Auth'
          }
        }
      }
    },
    {
      type: 'addNode',
      node: {
        name: 'Supabase - Upload Image',
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.3,
        position: [1600, 360],
        parameters: {
          method: 'POST',
          url: '=https://alikwlsmesh.supabase.co/storage/v1/object/blog-images/{{ $("Prompt Builder Code Node").item.json.style_name.toLowerCase().replace(/\\s+/g, "-") }}-{{ Date.now() }}.webp',
          authentication: 'genericCredentialType',
          genericAuthType: 'httpHeaderAuth',
          sendBody: true,
          contentType: 'binaryData',
          inputDataFieldName: 'data',
          options: {}
        },
        credentials: {
          httpHeaderAuth: {
            name: 'Supabase Connection Header'
          }
        }
      }
    },
    {
      type: 'addNode',
      node: {
        name: 'Supabase - Save Metadata',
        type: 'n8n-nodes-base.supabase',
        typeVersion: 1,
        position: [1820, 360],
        parameters: {
          resource: 'row',
          operation: 'create',
          tableId: 'generated_images',
          dataToSend: 'defineBelow',
          fieldsUi: {
            fieldValues: [
              {
                fieldId: 'original_prompt',
                fieldValue: '={{ $("Prompt Builder Code Node").item.json.original_prompt }}'
              },
              {
                fieldId: 'final_prompt',
                fieldValue: '={{ $("Prompt Builder Code Node").item.json.final_prompt }}'
              },
              {
                fieldId: 'image_url',
                fieldValue: '=https://alikwlsmesh.supabase.co/storage/v1/object/public/blog-images/{{ $json.Key }}'
              },
              {
                fieldId: 'style_name',
                fieldValue: '={{ $("Prompt Builder Code Node").item.json.style_name }}'
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
          supabaseApi: {
            name: 'Supabase Connection'
          }
        }
      }
    },
    {
      type: 'addNode',
      node: {
        name: 'Error Trigger',
        type: 'n8n-nodes-base.errorTrigger',
        typeVersion: 1,
        position: [250, 650],
        parameters: {}
      }
    },
    {
      type: 'addNode',
      node: {
        name: 'Slack Error Alert',
        type: 'n8n-nodes-base.httpRequest',
        typeVersion: 4.3,
        position: [470, 650],
        parameters: {
          method: 'POST',
          url: 'https://hooks.slack.com/services/YOUR/WEBHOOK/URL',
          sendBody: true,
          contentType: 'json',
          specifyBody: 'json',
          jsonBody: '={\n  "text": "🚨 *n8n Image Generation Workflow Failed!*\\n*Execution ID:* {{ $json.execution.id }}\\n*Error Message:* {{ $json.execution.error.message }}\\n*Time:* {{ $json.execution.error.timestamp }}"\n}',
          options: {}
        }
      }
    },
    
    // 3. Add connections
    {
      type: 'addConnection',
      source: 'Webhook Trigger',
      target: 'Supabase - Get Style',
      sourceIndex: 0,
      targetIndex: 0,
      connectionType: 'main'
    },
    {
      type: 'addConnection',
      source: 'Supabase - Get Style',
      target: 'Prompt Builder Code Node',
      sourceIndex: 0,
      targetIndex: 0,
      connectionType: 'main'
    },
    {
      type: 'addConnection',
      source: 'Prompt Builder Code Node',
      target: 'Grok Imagine API Call',
      sourceIndex: 0,
      targetIndex: 0,
      connectionType: 'main'
    },
    {
      type: 'addConnection',
      source: 'Grok Imagine API Call',
      target: 'Check API Success',
      sourceIndex: 0,
      targetIndex: 0,
      connectionType: 'main'
    },
    // IF node outputs: true=0, false=1
    {
      type: 'addConnection',
      source: 'Check API Success',
      target: 'Supabase - Upload Image',
      sourceIndex: 0,
      targetIndex: 0,
      connectionType: 'main'
    },
    {
      type: 'addConnection',
      source: 'Check API Success',
      target: 'Flux API Fallback',
      sourceIndex: 1,
      targetIndex: 0,
      connectionType: 'main'
    },
    {
      type: 'addConnection',
      source: 'Flux API Fallback',
      target: 'Supabase - Upload Image',
      sourceIndex: 0,
      targetIndex: 0,
      connectionType: 'main'
    },
    {
      type: 'addConnection',
      source: 'Supabase - Upload Image',
      target: 'Supabase - Save Metadata',
      sourceIndex: 0,
      targetIndex: 0,
      connectionType: 'main'
    },
    {
      type: 'addConnection',
      source: 'Error Trigger',
      target: 'Slack Error Alert',
      sourceIndex: 0,
      targetIndex: 0,
      connectionType: 'main'
    }
  ];
  
  console.log(`Sending ${operations.length} operations to update workflow ${workflowId}...`);
  const result = await callTool('update_workflow', {
    workflowId,
    operations
  });
  console.log("Result:", JSON.stringify(result, null, 2));
}

run();
