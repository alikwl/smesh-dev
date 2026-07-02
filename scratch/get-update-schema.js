import fs from 'node:fs';

const data = JSON.parse(fs.readFileSync('scratch/mcp-response.json').toString().replace(/^event: message\ndata: /, ''));
const updateWorkflowTool = data.result.tools.find(t => t.name === 'update_workflow');

fs.writeFileSync('scratch/update-workflow-schema.json', JSON.stringify(updateWorkflowTool, null, 2));
console.log("Written update_workflow schema to scratch/update-workflow-schema.json");
