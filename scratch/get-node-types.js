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
  const result = await callTool('get_node_types', {
    nodeIds: [
      { nodeId: 'n8n-nodes-base.webhook', version: '2.1' },
      { nodeId: 'n8n-nodes-base.supabase', version: '1', resource: 'row', operation: 'get' },
      { nodeId: 'n8n-nodes-base.supabase', version: '1', resource: 'row', operation: 'create' },
      { nodeId: 'n8n-nodes-base.httpRequest', version: '4.3' }
    ]
  });
  console.log("Result keys:", Object.keys(result.result || {}));
  import('node:fs').then(fs => {
    fs.writeFileSync('scratch/node-types.json', JSON.stringify(result, null, 2));
    console.log("Written definitions to scratch/node-types.json");
  });
}

run();
