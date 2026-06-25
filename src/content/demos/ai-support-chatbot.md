---
title: AI Support Chatbot Demo
slug: ai-support-chatbot
category: AI Chatbot
description: An AI-powered support chatbot that answers customer questions using your knowledge base, with automatic fallback to lead capture when it can't help.
tech:
  - OpenAI
  - n8n
  - Supabase Vector DB
image: /assets/images/ai-network-illustration.png
use_case: "Many businesses waste support hours answering repetitive questions. Smesh.Dev embeds an AI support chatbot that uses RAG (Retrieval-Augmented Generation) on your docs to resolve queries instantly and capture client leads."
steps:
  - title: Customer Asks Question
    description: Frontend chat widget captures the message and routes to the API
    icon: message-square
  - title: Vector Search Lookup
    description: Database query identifies matching context blocks from documents
    icon: database
  - title: OpenAI Formulates Reply
    description: GPT-4o processes context to draft a concise, truthful answer
    icon: cpu
  - title: Handoff Triggered
    description: If context is missing, chatbot gathers lead details for human support
    icon: user-check
---

<div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
<!-- Interactive Chat Box (Col 7) -->
<div class="md:col-span-7 flex flex-col justify-between bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200">
<!-- Chat Header -->
<div class="bg-indigo-600 text-white px-4 py-3 flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="w-9 h-9 rounded-full bg-indigo-500/50 flex items-center justify-center text-sm font-bold">🤖</div>
<div>
<p class="font-semibold text-sm leading-tight">Smesh Support Bot</p>
<p class="text-xs text-indigo-200 flex items-center gap-1">
<span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> AI-powered
</p>
</div>
</div>
<button onclick="resetChat()" class="text-white/85 hover:text-white"><i data-lucide="rotate-ccw" class="w-4 h-4"></i></button>
</div>

<!-- Chat Messages -->
<div id="ai-chat-body" class="px-4 py-4 space-y-3 bg-slate-50 overflow-y-auto h-96 text-xs flex flex-col">
<div class="flex gap-2">
<div class="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-xs shrink-0 font-bold">🤖</div>
<div class="bg-white border border-slate-200 rounded-xl rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
<p>Hi there! I'm the Smesh.Dev assistant. Ask me anything about our services, pricing, or tech stack.</p>
</div>
</div>

<!-- Quick Options -->
<div id="ai-quick-options" class="flex flex-wrap gap-2 pl-8">
<button onclick="handleAISend('Do you build custom dashboards?')" class="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-700 hover:border-indigo-600 hover:text-indigo-600 font-semibold active:scale-95 transition-all">Do you build custom dashboards?</button>
<button onclick="handleAISend('What is Smesh.Dev pricing?')" class="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-700 hover:border-indigo-600 hover:text-indigo-600 font-semibold active:scale-95 transition-all">What is Smesh.Dev pricing?</button>
<button onclick="handleAISend('Can you integrate with SAP?')" class="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-700 hover:border-indigo-600 hover:text-indigo-600 font-semibold active:scale-95 transition-all">Can you integrate with SAP?</button>
</div>
</div>

<!-- Input Bar -->
<form id="ai-input-form" onsubmit="handleAISubmit(event)" class="bg-slate-50 px-3 py-2.5 flex items-center gap-2 border-t border-slate-200">
<input type="text" id="ai-input-text" placeholder="Ask a question..." required class="flex-grow bg-white border border-slate-200 rounded-full px-4 py-2 text-xs text-slate-800 focus:outline-none focus:border-indigo-500 transition-colors">
<button type="submit" class="w-9 h-9 bg-indigo-600 hover:bg-indigo-700 rounded-full flex items-center justify-center text-white transition-colors active:scale-95">
<i data-lucide="send" class="w-4 h-4"></i>
</button>
</form>
</div>

<!-- Interactive Sandbox Logs / Use Case (Col 5) -->
<div class="md:col-span-5 flex flex-col justify-between bg-slate-55 rounded-2xl border border-slate-200 p-6 space-y-4">
<div>
<span class="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-wider">Use Case Context</span>
<h3 class="font-bold text-slate-900 mt-2">AI Knowledge Base (RAG)</h3>
<p class="text-xs text-slate-600 leading-relaxed mt-2">
This simulation shows how Smesh.Dev builds RAG support agents that retrieve business details from a Vector DB to answer queries. If query resolution falls below a threshold, the bot automatically transitions to a custom lead captures webhook.
</p>

<div class="mt-4 pt-4 border-t border-slate-200/60 space-y-3">
<h4 class="text-xs font-bold text-slate-800">⚡ Live Vector & Webhook Logs</h4>
<div id="ai-logs" class="bg-slate-900 rounded-lg p-3 font-mono text-[10px] text-teal-400 space-y-1 h-36 overflow-y-auto">
<p class="text-slate-400">// Ready for queries...</p>
</div>
</div>
</div>

<div class="pt-4 border-t border-slate-200/60">
<button onclick="resetChat()" class="w-full text-center text-xs text-slate-650 hover:text-slate-800 font-bold py-2 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 transition">
Reset Chat Box
</button>
</div>
</div>
</div>

<script>
function appendAIMessage(sender, content, isHtml = false) {
const chatBody = document.getElementById('ai-chat-body');
const msgDiv = document.createElement('div');
msgDiv.className = sender === 'bot' ? 'flex gap-2' : 'flex justify-end';

if (sender === 'bot') {
msgDiv.innerHTML = `
<div class="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-xs shrink-0 font-bold">🤖</div>
<div class="bg-white border border-slate-200 rounded-xl rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
${isHtml ? content : `<p>${content}</p>`}
</div>
`;
} else {
msgDiv.innerHTML = `
<div class="bg-indigo-600 text-white rounded-xl rounded-tr-none px-3 py-2 max-w-[75%] shadow-sm">
<p>${content}</p>
</div>
`;
}

chatBody.appendChild(msgDiv);
chatBody.scrollTop = chatBody.scrollHeight;
}

function appendAILog(text) {
const logs = document.getElementById('ai-logs');
const p = document.createElement('p');
p.innerText = `[${new Date().toLocaleTimeString()}] ${text}`;
logs.appendChild(p);
logs.scrollTop = logs.scrollHeight;
}

function handleAISubmit(e) {
e.preventDefault();
const input = document.getElementById('ai-input-text');
const val = input.value.trim();
if (!val) return;
input.value = '';
handleAISend(val);
}

function handleAISend(text) {
appendAIMessage('user', text);
appendAILog(`Query: "${text}"`);

// Simulate typing indicator
const chatBody = document.getElementById('ai-chat-body');
const typingDiv = document.createElement('div');
typingDiv.className = 'flex gap-2 id-typing';
typingDiv.innerHTML = `
<div class="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-xs shrink-0 font-bold">🤖</div>
<div class="bg-white border border-slate-200 rounded-xl rounded-tl-none px-3 py-1.5 shadow-sm text-gray-400 italic">
Searching docs...
</div>
`;
chatBody.appendChild(typingDiv);
chatBody.scrollTop = chatBody.scrollHeight;

setTimeout(() => {
const indicators = chatBody.querySelectorAll('.id-typing');
indicators.forEach(i => i.remove());

processAILogic(text);
}, 800);
}

function processAILogic(text) {
const cleaned = text.toLowerCase();

if (cleaned.includes('dashboard') || cleaned.includes('admin')) {
appendAILog(`Embedding generated. Vector search similarity match: 95%`);
appendAIMessage('bot', `
<p>Yes! We build custom admin dashboards using <strong>Next.js</strong> and <strong>Supabase</strong>. Common use cases include booking schedules, stock/IMEI inventory management, and client portal panels.</p>
<div class="mt-2 flex items-center gap-1 text-[10px] text-indigo-500 font-semibold bg-indigo-50/50 p-1 rounded w-max">
<span>📄</span>
<span class="underline">services_catalog.md</span>
<span class="text-gray-300 mx-1">·</span>
<span>95% match</span>
</div>
`, true);
} else if (cleaned.includes('pricing') || cleaned.includes('cost')) {
appendAILog(`Embedding generated. Vector search similarity match: 91%`);
appendAIMessage('bot', `
<p>Smesh.Dev pricing starts at <strong>PKR 25k</strong> for local PK website setups, while international automation pipelines start at <strong>$850</strong>. Custom integrations are quoted on complexity.</p>
<div class="mt-2 flex items-center gap-1 text-[10px] text-indigo-500 font-semibold bg-indigo-50/50 p-1 rounded w-max">
<span>📄</span>
<span class="underline">pricing_faq.md</span>
<span class="text-gray-300 mx-1">·</span>
<span>91% match</span>
</div>
`, true);
} else if (cleaned.includes('sap') || cleaned.includes('enterprise crm')) {
appendAILog(`Vector similarity score: 42% (below threshold)`);
appendAILog(`Triggering webhook: fallback_lead_capture`);

appendAIMessage('bot', `
<p>I don't have specific details on SAP integrations in my local database. Let me get you in touch with the team so we can send a custom reply.</p>
<!-- Dynamic inline lead capture form -->
<div id="ai-capture-form" class="mt-3 bg-slate-50 border border-slate-200 rounded-lg p-3 space-y-2">
<p class="text-[10px] font-bold text-slate-700">📬 Share your contact details</p>
<input type="text" id="ai-lead-name" placeholder="Your Name" class="w-full px-2.5 py-1.5 rounded border border-slate-200 bg-white text-xs">
<input type="text" id="ai-lead-contact" placeholder="Email or WhatsApp" class="w-full px-2.5 py-1.5 rounded border border-slate-200 bg-white text-xs">
<button onclick="submitAICapture()" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded py-1.5 text-xs font-semibold transition active:scale-95">Send to Team</button>
</div>
`, true);
} else {
appendAIMessage('bot', "I couldn't find a direct document answer matching your exact words. Try asking 'Do you build custom dashboards?' or 'What is Smesh.Dev pricing?'.");
}
}

async function submitAICapture() {
const name = document.getElementById('ai-lead-name').value.trim();
const contact = document.getElementById('ai-lead-contact').value.trim();
if (!name || !contact) return;

appendAILog(`Trigger: webhook_lead_capture -> Sent to Slack & Notion`);
document.getElementById('ai-capture-form').innerHTML = `
<div class="text-emerald-700 flex items-center gap-1 font-semibold text-[11px]">
✓ Lead saved! I'll reach out shortly.
</div>
`;
}

function resetChat() {
document.getElementById('ai-chat-body').innerHTML = `
<div class="flex gap-2">
<div class="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-xs shrink-0 font-bold">🤖</div>
<div class="bg-white border border-slate-200 rounded-xl rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
<p>Hi there! I'm the Smesh.Dev assistant. Ask me anything about our services, pricing, or tech stack.</p>
</div>
</div>

<div id="ai-quick-options" class="flex flex-wrap gap-2 pl-8">
<button onclick="handleAISend('Do you build custom dashboards?')" class="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-700 hover:border-indigo-600 hover:text-indigo-600 font-semibold active:scale-95 transition-all">Do you build custom dashboards?</button>
<button onclick="handleAISend('What is Smesh.Dev pricing?')" class="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-700 hover:border-indigo-600 hover:text-indigo-600 font-semibold active:scale-95 transition-all">What is Smesh.Dev pricing?</button>
<button onclick="handleAISend('Can you integrate with SAP?')" class="px-3 py-1.5 bg-white border border-slate-200 rounded-full text-slate-700 hover:border-indigo-600 hover:text-indigo-600 font-semibold active:scale-95 transition-all">Can you integrate with SAP?</button>
</div>
`;
document.getElementById('ai-logs').innerHTML = `<p class="text-slate-400">// Simulation reset.</p>`;
}
</script>
