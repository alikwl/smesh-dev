---
title: WhatsApp Order System Demo
slug: whatsapp-order-system
category: Automation
description: A WhatsApp-based ordering system for local fabric shops — customers browse products, place orders, and receive confirmations entirely through chat.
tech:
  - n8n
  - WhatsApp API
  - Google Sheets
image: /assets/images/whatsapp-phone-mockup.png
use_case: "In Pakistan, many local fashion brands manage hundreds of order queries manually on WhatsApp, resulting in long response delays. Smesh.Dev replaces this manual workflow with an automated database catalog sync."
steps:
  - title: Customer Opens Chat
    description: WhatsApp API receives the incoming message via webhook
    icon: message-circle
  - title: Bot Processes Query
    description: n8n workflow matches intent and queries product catalog
    icon: cpu
  - title: Order Confirmed
    description: Order saved to Google Sheets, confirmation sent to customer
    icon: check-circle
  - title: Team Notified
    description: Shop owner receives email notification with order details
    icon: bell
---

<div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
<!-- Interactive WhatsApp Sandbox (Col 7) -->
<div class="md:col-span-7 flex flex-col justify-between bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200">
<!-- WhatsApp Header -->
<div class="bg-emerald-600 text-white px-4 py-3 flex items-center justify-between">
<div class="flex items-center gap-3">
<div class="w-9 h-9 rounded-full bg-emerald-700/50 flex items-center justify-center text-sm font-bold">FS</div>
<div>
<p class="font-semibold text-sm leading-tight">Fabric Shop Bot</p>
<p class="text-xs text-emerald-100 flex items-center gap-1">
<span class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span> online
</p>
</div>
</div>
<div class="flex gap-3 text-white/80">
<i data-lucide="phone" class="w-4 h-4"></i>
<i data-lucide="video" class="w-4 h-4"></i>
</div>
</div>

<!-- Chat Body -->
<div id="wa-chat-body" class="px-3 py-4 space-y-3 bg-[#efeae2] overflow-y-auto h-96 text-xs flex flex-col">
<!-- Bot message -->
<div class="flex justify-start">
<div class="bg-white rounded-xl rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
<p>Welcome to <strong>Fabric Shop</strong>! 🧵</p>
<p class="mt-1">What would you like to order today?</p>
<p class="text-[9px] text-gray-400 text-right mt-1">9:00 AM</p>
</div>
</div>

<!-- Quick reply choices -->
<div id="wa-quick-replies" class="flex flex-wrap gap-2 pl-2">
<button onclick="handleWASend('Lawn Collection')" class="border border-emerald-500 text-emerald-700 rounded-full px-3 py-1.5 text-xs font-semibold bg-white hover:bg-emerald-50 active:scale-95 transition-all">🪡 Lawn Collection</button>
<button onclick="handleWASend('Silk Range')" class="border border-emerald-500 text-emerald-700 rounded-full px-3 py-1.5 text-xs font-semibold bg-white hover:bg-emerald-50 active:scale-95 transition-all">👗 Silk Range</button>
<button onclick="handleWASend('Track Order')" class="border border-emerald-500 text-emerald-700 rounded-full px-3 py-1.5 text-xs font-semibold bg-white hover:bg-emerald-50 active:scale-95 transition-all">📦 Track Order</button>
</div>
</div>

<!-- Input Bar -->
<form id="wa-input-form" onsubmit="handleWASubmit(event)" class="bg-slate-50 px-3 py-2.5 flex items-center gap-2 border-t border-slate-200">
<input type="text" id="wa-input-text" placeholder="Type a message..." required class="flex-grow bg-white border border-slate-200 rounded-full px-4 py-2 text-xs text-slate-800 focus:outline-none focus:border-emerald-500 transition-colors">
<button type="submit" class="w-9 h-9 bg-emerald-500 hover:bg-emerald-600 rounded-full flex items-center justify-center text-white transition-colors active:scale-95">
<i data-lucide="send" class="w-4 h-4"></i>
</button>
</form>
</div>

<!-- Interactive Sandbox Logs / Use Case (Col 5) -->
<div class="md:col-span-5 flex flex-col justify-between bg-slate-55 rounded-2xl border border-slate-200 p-6 space-y-4">
<div>
<span class="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider">Use Case Context</span>
<h3 class="font-bold text-slate-900 mt-2">WhatsApp Order Intake</h3>
<p class="text-xs text-slate-600 leading-relaxed mt-2">
In Pakistan, many local fashion brands manage hundreds of order queries manually on WhatsApp, resulting in long response delays. Smesh.Dev replaces this manual workflow with an automated database catalog sync.
</p>

<div class="mt-4 pt-4 border-t border-slate-200/60 space-y-3">
<h4 class="text-xs font-bold text-slate-800">⚡ Live System Logs (Simulated)</h4>
<div id="wa-logs" class="bg-slate-900 rounded-lg p-3 font-mono text-[10px] text-teal-400 space-y-1 h-36 overflow-y-auto">
<p class="text-slate-400">// Ready to capture user choices...</p>
</div>
</div>
</div>

<div class="pt-4 border-t border-slate-200/60">
<button onclick="resetWASimulation()" class="w-full text-center text-xs text-slate-650 hover:text-slate-800 font-bold py-2 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 transition">
Reset Bot Conversation
</button>
</div>
</div>
</div>

<script>
// Flow steps: 0=greeting, 1=category selected, 2=product ordered, 3=confirming
let waStep = 0;
let waSelectedProduct = '';
let waProductPrice = 0;

function appendWAMessage(sender, content, isHtml = false) {
const chatBody = document.getElementById('wa-chat-body');
const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const msgDiv = document.createElement('div');
msgDiv.className = sender === 'bot' ? 'flex justify-start' : 'flex justify-end';

if (sender === 'bot') {
msgDiv.innerHTML = `
<div class="bg-white rounded-xl rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
${isHtml ? content : `<p>${content}</p>`}
<p class="text-[9px] text-gray-400 text-right mt-1">${timeString}</p>
</div>
`;
} else {
msgDiv.innerHTML = `
<div class="bg-emerald-100 rounded-xl rounded-tr-none px-3 py-2 max-w-[75%] shadow-sm">
<p>${content}</p>
<p class="text-[9px] text-gray-400 text-right mt-1">${timeString}</p>
</div>
`;
}

chatBody.appendChild(msgDiv);
chatBody.scrollTop = chatBody.scrollHeight;
}

function appendWALog(text) {
const logs = document.getElementById('wa-logs');
const p = document.createElement('p');
p.innerText = `[${new Date().toLocaleTimeString()}] ${text}`;
logs.appendChild(p);
logs.scrollTop = logs.scrollHeight;
}

function handleWASubmit(e) {
e.preventDefault();
const input = document.getElementById('wa-input-text');
const val = input.value.trim();
if (!val) return;
input.value = '';
handleWASend(val);
}

function handleWASend(text) {
appendWAMessage('user', text);
appendWALog(`Incoming webhook from user session: "${text}"`);

// Simulate typing indicator
const chatBody = document.getElementById('wa-chat-body');
const typingDiv = document.createElement('div');
typingDiv.className = 'flex justify-start id-typing';
typingDiv.innerHTML = `
<div class="bg-white rounded-xl rounded-tl-none px-3 py-1.5 shadow-sm text-gray-400 italic">
Typing...
</div>
`;
chatBody.appendChild(typingDiv);
chatBody.scrollTop = chatBody.scrollHeight;

setTimeout(() => {
// Remove typing indicator
const indicators = chatBody.querySelectorAll('.id-typing');
indicators.forEach(i => i.remove());

processBotLogic(text);
}, 800);
}

function processBotLogic(text) {
const cleaned = text.toLowerCase();

if (cleaned.includes('lawn')) {
waStep = 1;
waSelectedProduct = 'Spring Lawn - 3pc';
waProductPrice = 3200;

appendWALog(`DB Query: SELECT * FROM products WHERE category = 'lawn'`);
appendWAMessage('bot', `
<div class="w-full h-24 bg-gradient-to-br from-pink-100 to-yellow-50 rounded-lg flex items-center justify-center text-2xl mb-2">🌸</div>
<p class="font-semibold">Spring Lawn — 3pc Unstitched</p>
<p class="text-gray-500 text-xs">Premium lawn with chiffon dupatta</p>
<p class="text-emerald-700 font-bold mt-1">Rs 3,200</p>
<p class="mt-2 text-xs text-gray-600">How many suits would you like to order? (Type a number, e.g. 1 or 2)</p>
`, true);

// Update quick replies
document.getElementById('wa-quick-replies').innerHTML = `
<button onclick="handleWASend('1')" class="border border-emerald-500 text-emerald-700 rounded-full px-3 py-1.5 text-xs font-semibold bg-white hover:bg-emerald-50 active:scale-95 transition-all">1 Suit</button>
<button onclick="handleWASend('2')" class="border border-emerald-500 text-emerald-700 rounded-full px-3 py-1.5 text-xs font-semibold bg-white hover:bg-emerald-50 active:scale-95 transition-all">2 Suits</button>
`;
} else if (cleaned.includes('silk')) {
waStep = 1;
waSelectedProduct = 'Festive Silk - 2pc';
waProductPrice = 4800;

appendWALog(`DB Query: SELECT * FROM products WHERE category = 'silk'`);
appendWAMessage('bot', `
<div class="w-full h-24 bg-gradient-to-br from-teal-50 to-indigo-100 rounded-lg flex items-center justify-center text-2xl mb-2">👗</div>
<p class="font-semibold">Festive Silk — 2pc Premium</p>
<p class="text-gray-500 text-xs">Satin silk blend embroidered suit</p>
<p class="text-emerald-700 font-bold mt-1">Rs 4,800</p>
<p class="mt-2 text-xs text-gray-600">How many suits would you like to order? (Type a number, e.g. 1 or 2)</p>
`, true);

document.getElementById('wa-quick-replies').innerHTML = `
<button onclick="handleWASend('1')" class="border border-emerald-500 text-emerald-700 rounded-full px-3 py-1.5 text-xs font-semibold bg-white hover:bg-emerald-50 active:scale-95 transition-all">1 Suit</button>
<button onclick="handleWASend('2')" class="border border-emerald-500 text-emerald-700 rounded-full px-3 py-1.5 text-xs font-semibold bg-white hover:bg-emerald-50 active:scale-95 transition-all">2 Suits</button>
`;
} else if (cleaned.includes('track')) {
appendWALog(`API Call: fetchOrderStatus()`);
appendWAMessage('bot', "Please enter your 5-digit Order ID (e.g. 10245) to track your delivery status.");
document.getElementById('wa-quick-replies').innerHTML = `
<button onclick="handleWASend('10245')" class="border border-emerald-500 text-emerald-700 rounded-full px-3 py-1.5 text-xs font-semibold bg-white hover:bg-emerald-50 active:scale-95 transition-all">Track Order #10245</button>
`;
} else if (cleaned === '10245') {
appendWALog(`Google Sheet Sync: Order #10245 found`);
appendWAMessage('bot', "📦 <strong>Order #10245 Status:</strong> Dispatched via Leopards Courier. Current location: Lahore Hub. Estimated delivery: Tomorrow.");
resetRepliesToMain();
} else if (waStep === 1 && !isNaN(cleaned)) {
const quantity = parseInt(cleaned);
waStep = 2;
const subtotal = waProductPrice * quantity;
const delivery = 200;
const total = subtotal + delivery;

appendWALog(`n8n Node: calculateTotal() - Subtotal: Rs ${subtotal}`);
appendWAMessage('bot', `
<p class="font-semibold mb-1">📋 Order Summary</p>
<div class="border-t border-gray-200 pt-1 text-xs space-y-1">
<div class="flex justify-between"><span>${waSelectedProduct} × ${quantity}</span><span>Rs ${subtotal}</span></div>
<div class="flex justify-between"><span>Delivery Charge</span><span>Rs ${delivery}</span></div>
<div class="flex justify-between font-bold border-t border-gray-200 pt-1"><span>Total</span><span>Rs ${total}</span></div>
</div>
<p class="mt-2 text-xs text-gray-500">Reply <strong>CONFIRM</strong> to submit order details or <strong>CANCEL</strong> to restart.</p>
`, true);

document.getElementById('wa-quick-replies').innerHTML = `
<button onclick="handleWASend('Confirm')" class="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-4 py-1.5 text-xs font-semibold active:scale-95 transition-all">Confirm Order</button>
<button onclick="handleWASend('Cancel')" class="border border-red-500 text-red-600 rounded-full px-4 py-1.5 text-xs font-semibold bg-white hover:bg-red-50 active:scale-95 transition-all">Cancel</button>
`;
} else if (cleaned === 'confirm') {
appendWALog(`Google Sheet: Row Appended - Order confirmed!`);
appendWALog(`n8n Webhook: Sent email notification to Haider Ali`);
appendWAMessage('bot', "🎉 <strong>Order Confirmed!</strong> We have saved your order. Our logistics team will call you shortly on this number to coordinate delivery. Thank you!");
resetRepliesToMain();
waStep = 0;
} else if (cleaned === 'cancel') {
appendWALog(`Session reset requested`);
appendWAMessage('bot', "Order cancelled. What would you like to look at now?");
resetRepliesToMain();
waStep = 0;
} else {
appendWAMessage('bot', "Sorry, I didn't catch that. Please select one of the options below or type 'lawn' or 'silk'.");
resetRepliesToMain();
}
}

function resetRepliesToMain() {
document.getElementById('wa-quick-replies').innerHTML = `
<button onclick="handleWASend('Lawn Collection')" class="border border-emerald-500 text-emerald-700 rounded-full px-3 py-1.5 text-xs font-semibold bg-white hover:bg-emerald-50 active:scale-95 transition-all">🪡 Lawn Collection</button>
<button onclick="handleWASend('Silk Range')" class="border border-emerald-500 text-emerald-700 rounded-full px-3 py-1.5 text-xs font-semibold bg-white hover:bg-emerald-50 active:scale-95 transition-all">👗 Silk Range</button>
<button onclick="handleWASend('Track Order')" class="border border-emerald-500 text-emerald-700 rounded-full px-3 py-1.5 text-xs font-semibold bg-white hover:bg-emerald-50 active:scale-95 transition-all">📦 Track Order</button>
`;
}

function resetWASimulation() {
document.getElementById('wa-chat-body').innerHTML = `
<div class="flex justify-start">
<div class="bg-white rounded-xl rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
<p>Welcome to <strong>Fabric Shop</strong>! 🧵</p>
<p class="mt-1">What would you like to order today?</p>
<p class="text-[9px] text-gray-400 text-right mt-1">9:00 AM</p>
</div>
</div>
<div id="wa-quick-replies" class="flex flex-wrap gap-2 pl-2">
<button onclick="handleWASend('Lawn Collection')" class="border border-emerald-500 text-emerald-700 rounded-full px-3 py-1.5 text-xs font-semibold bg-white hover:bg-emerald-50 active:scale-95 transition-all">🪡 Lawn Collection</button>
<button onclick="handleWASend('Silk Range')" class="border border-emerald-500 text-emerald-700 rounded-full px-3 py-1.5 text-xs font-semibold bg-white hover:bg-emerald-50 active:scale-95 transition-all">👗 Silk Range</button>
<button onclick="handleWASend('Track Order')" class="border border-emerald-500 text-emerald-700 rounded-full px-3 py-1.5 text-xs font-semibold bg-white hover:bg-emerald-50 active:scale-95 transition-all">📦 Track Order</button>
</div>
`;
document.getElementById('wa-logs').innerHTML = `<p class="text-slate-400">// Simulation reset.</p>`;
waStep = 0;
waSelectedProduct = '';
waProductPrice = 0;
}
</script>
