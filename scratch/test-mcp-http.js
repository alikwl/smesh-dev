

const url = 'https://n8ninstance.btech.cfd/mcp-server/http';
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyY2RlYThmZC01ZDhiLTQ5M2EtYTdmNC1hNjkyZDllMTJkOTQiLCJpc3MiOiJuOG4iLCJhdWQiOiJtY3Atc2VydmVyLWFwaSIsImp0aSI6ImQzOTQwMTMxLTU4NDgtNGNlZi04OTkwLTliYmMwY2VkMzI2NSIsImlhdCI6MTc4Mjk5ODI1MH0.dw1gGslF8buYydtHinkchcr_8a9LZM_oukZyLfYb_Cc';

async function test() {
  console.log("Sending JSON-RPC tools/list to", url);
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
        method: 'tools/list',
        params: {}
      })
    });
    
    console.log("Response status:", response.status);
    const body = await response.text();
    import('node:fs').then(fs => {
      fs.writeFileSync('scratch/mcp-response.json', body);
      console.log("Response written to scratch/mcp-response.json");
    });
  } catch (e) {
    console.error("Fetch failed:", e);
  }
}
test();
