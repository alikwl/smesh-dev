---
title: SaaS MVP Dashboard Demo
slug: saas-mvp-dashboard
category: SaaS
description: A comprehensive software startup admin panel showcasing user registrations, monthly recurring revenue growth graphs, Stripe subscriptions status, and live server logs.
tech:
  - Next.js
  - Supabase Auth
  - Stripe
image: /assets/images/saas-dashboard-illustration.png
use_case: "Startups often spend months configuring database setups, user auth flows, and Stripe hooks before testing their core product. Smesh.Dev designs pre-integrated Next.js/Supabase structures so founders can launch MVP backends in weeks."
steps:
  - title: User Registers Account
    description: Next.js frontend creates auth credential node in Supabase
    icon: user-plus
  - title: Subscription Checkout
    description: Stripe customer portal redirects the user to choose billing tier
    icon: credit-card
  - title: Webhook Update
    description: Stripe event hook fires back to sync account active token
    icon: refresh-cw
  - title: Operations Logged
    description: Analytics panels trace active query rates and user sessions
    icon: activity
---

<div class="max-w-xl mx-auto bg-slate-50 rounded-2xl overflow-hidden shadow-xl border border-slate-200 text-slate-800">
<!-- Dashboard Navbar -->
<div class="bg-slate-950 text-white px-6 py-4 flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="text-indigo-400 font-black text-lg">🚀 SaaSify</span>
<span class="bg-indigo-500/20 text-indigo-300 text-[10px] px-2 py-0.5 rounded-full font-bold">Admin Console</span>
</div>
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold">HA</div>
</div>
</div>

<!-- Dashboard Content -->
<div class="p-6 space-y-6 bg-slate-50 min-h-[360px] text-xs">
<!-- Stat Grid -->
<div class="grid grid-cols-3 gap-4">
<div class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
<p class="text-slate-400 font-medium">Monthly Recurring Revenue</p>
<p class="text-lg font-bold text-slate-800 mt-1">$4,850</p>
<span class="text-emerald-600 text-[10px] font-semibold mt-1 inline-block">↑ 12% this month</span>
</div>

<div class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
<p class="text-slate-400 font-medium">Active Subscriptions</p>
<p class="text-lg font-bold text-slate-800 mt-1">98 Users</p>
<span class="text-emerald-600 text-[10px] font-semibold mt-1 inline-block">↑ 4 new today</span>
</div>

<div class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
<p class="text-slate-400 font-medium">API Server Load</p>
<p class="text-lg font-bold text-slate-800 mt-1">0.12 ms</p>
<span class="text-indigo-600 text-[10px] font-semibold mt-1 inline-block">Normal healthy state</span>
</div>
</div>

<!-- Active Subscriptions Table / Graph placeholder -->
<div class="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-4">
<h4 class="font-bold text-slate-700 text-sm">Recent Accounts Created</h4>
<div class="space-y-2">
<div class="flex justify-between items-center py-2 border-b border-slate-100">
<div>
<p class="font-bold text-slate-800">john.doe@company.com</p>
<p class="text-[10px] text-slate-400">Created 2 hours ago</p>
</div>
<span class="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Pro Tier ($49/mo)</span>
</div>

<div class="flex justify-between items-center py-2">
<div>
<p class="font-bold text-slate-800">sara.smith@design.io</p>
<p class="text-[10px] text-slate-400">Created 5 hours ago</p>
</div>
<span class="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Pro Tier ($49/mo)</span>
</div>
</div>
</div>
</div>
</div>
