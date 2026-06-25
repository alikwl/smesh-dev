---
title: POS & Inventory Dashboard Demo
slug: pos-inventory-dashboard
category: Local Business
description: A custom Point of Sale & Inventory dashboard tailored for small-to-medium retail shops, featuring real-time stock levels, purchase calculations, and instant low-stock indicators.
tech:
  - Next.js
  - Supabase
  - Tailwind CSS
image: /assets/images/saas-dashboard-illustration.png
use_case: "Local shops lose revenue when items go out of stock without being noticed, or when manual cash registry counts take hours. Smesh.Dev delivers unified custom Point of Sale systems that sync checkout transactions with real-time stock levels."
steps:
  - title: Operator Scans Item
    description: Frontend POS registers the barcode or product card click
    icon: scan
  - title: Inventory Deducted
    description: Database query updates the stock level for the catalog ID
    icon: archive
  - title: Alert for Low Stock
    description: Automated rule flags items dropping below designated threshold
    icon: alert-triangle
  - title: Daily Report Exported
    description: End-of-day automation pushes revenue calculations to manager dashboard
    icon: file-text
---

<div class="max-w-xl mx-auto bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-700 text-slate-100">
<!-- POS Header -->
<div class="bg-slate-800 text-slate-100 px-6 py-4 flex items-center justify-between border-b border-slate-700">
<div class="flex items-center gap-3">
<span class="text-xl">🏪</span>
<div>
<h3 class="font-bold text-base leading-tight">SuperMart POS & Inventory</h3>
<p class="text-xs text-slate-400">Terminal #01 (Active Session)</p>
</div>
</div>
<div class="bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
<span class="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
<span class="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block animate-pulse"></span> DB Connected
</span>
</div>
</div>

<!-- Main POS Screen -->
<div class="grid grid-cols-5 bg-slate-950 min-h-[360px] text-xs">
<!-- Products & Search -->
<div class="col-span-3 p-4 border-r border-slate-800 space-y-4">
<div class="relative">
<input class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-slate-300 placeholder-slate-500 focus:outline-none focus:border-indigo-500" placeholder="Search product or scan barcode..." value="Choc" />
</div>

<!-- Product Cards Grid -->
<div class="grid grid-cols-2 gap-2">
<div class="bg-slate-900 border border-indigo-500/30 rounded-lg p-3 cursor-pointer hover:bg-slate-850 transition">
<div class="flex justify-between items-start">
<span class="text-lg">🍫</span>
<span class="bg-indigo-500/10 text-indigo-400 text-[9px] px-1.5 py-0.5 rounded font-bold">Qty: 42</span>
</div>
<p class="font-bold text-slate-200 mt-2">Choco Bar Premium</p>
<p class="text-indigo-400 font-semibold mt-1">Rs. 150</p>
</div>

<div class="bg-slate-900 border border-slate-800 rounded-lg p-3 cursor-pointer hover:border-slate-700 transition">
<div class="flex justify-between items-start">
<span class="text-lg">🍪</span>
<span class="bg-rose-500/10 text-rose-400 text-[9px] px-1.5 py-0.5 rounded font-bold">Qty: 3 (Low)</span>
</div>
<p class="font-bold text-slate-200 mt-2">Oatmeal Biscuits</p>
<p class="text-slate-400 font-semibold mt-1">Rs. 120</p>
</div>
</div>
</div>

<!-- Cart & Checkout -->
<div class="col-span-2 p-4 flex flex-col justify-between bg-slate-900/50">
<div>
<h4 class="font-bold text-slate-300 mb-3 pb-2 border-b border-slate-850">Current Cart</h4>
<div class="space-y-3 min-h-[160px]">
<!-- Cart Item 1 -->
<div class="flex justify-between items-center text-slate-300">
<div>
<p class="font-bold">Choco Bar Premium</p>
<p class="text-[10px] text-slate-500">Qty: 2 × Rs. 150</p>
</div>
<p class="font-semibold text-indigo-400">Rs. 300</p>
</div>
</div>
</div>

<!-- Invoice Calculation -->
<div class="border-t border-slate-800 pt-3 space-y-2">
<div class="flex justify-between text-slate-400">
<span>Subtotal</span>
<span>Rs. 300</span>
</div>
<div class="flex justify-between text-slate-400">
<span>GST (5%)</span>
<span>Rs. 15</span>
</div>
<div class="flex justify-between font-bold text-slate-200 text-sm border-t border-slate-800 pt-2">
<span>Grand Total</span>
<span class="text-indigo-400">Rs. 315</span>
</div>
<button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg py-2 font-bold transition mt-2">Process Checkout (F12)</button>
</div>
</div>
</div>
</div>
