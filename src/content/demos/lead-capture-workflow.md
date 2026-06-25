---
title: Lead Capture Workflow Demo
slug: lead-capture-workflow
category: Automation
description: A automated visual pipeline built with n8n that captures website contacts, posts them instantly to Slack channels, draft initial follow-ups in Gmail, and updates Google Sheets.
tech:
  - n8n
  - Slack API
  - Gmail
image: /assets/images/automation-workflow-illustration.png
use_case: "When web leads are not logged instantly, teams miss sales opportunities. Smesh.Dev replaces manual contact tracking with custom n8n flows that instantly write data to central logs and alert teams on Slack."
steps:
  - title: Visitor Submits Form
    description: Web contact form captures input fields and fires payload to webhook
    icon: send
  - title: Data Filtered by n8n
    description: Workflow checks email validation and filters out spam addresses
    icon: filter
  - title: Database Log Created
    description: Lead data is automatically stored in a new Google Sheets row
    icon: database
  - title: Slack Notification
    description: Sales team receives active alert containing contact details
    icon: slack
---

<div class="max-w-xl mx-auto bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-700 text-slate-100 p-6">
<div class="mb-4">
<h3 class="font-bold text-base text-slate-200">n8n Lead Processing Pipeline</h3>
<p class="text-xs text-slate-400">Live automation webhook monitor</p>
</div>

<!-- Workflow Graph -->
<div class="bg-slate-950 border border-slate-800 rounded-xl p-6 min-h-[300px] flex flex-col justify-between text-xs space-y-6">

<!-- Step 1 Webhook -->
<div class="flex items-center justify-between bg-slate-900 border border-emerald-500/30 rounded-lg p-3">
<div class="flex items-center gap-3">
<span class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">🎯</span>
<div>
<p class="font-bold text-slate-200">Webhook Trigger</p>
<p class="text-[10px] text-slate-500">Listens for Website Contact Form</p>
</div>
</div>
<span class="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/20">Success (200 OK)</span>
</div>

<!-- Connector Line -->
<div class="h-6 w-0.5 bg-emerald-500 ml-7"></div>

<!-- Step 2 Logic Split -->
<div class="flex items-center justify-between bg-slate-900 border border-indigo-500/30 rounded-lg p-3">
<div class="flex items-center gap-3">
<span class="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold">🔀</span>
<div>
<p class="font-bold text-slate-200">Data Enrich & Filter</p>
<p class="text-[10px] text-slate-500">Validates email & formats phone number</p>
</div>
</div>
<span class="text-slate-400">Processed</span>
</div>

<!-- Connector Line -->
<div class="h-6 w-0.5 bg-emerald-500 ml-7"></div>

<!-- Step 3 Multi-channel execution -->
<div class="grid grid-cols-3 gap-3">
<!-- Google Sheets -->
<div class="bg-slate-900 border border-emerald-500/30 rounded-lg p-3 text-center space-y-1">
<p class="font-bold text-slate-200">Google Sheets</p>
<p class="text-[10px] text-slate-500">Row inserted</p>
<span class="bg-emerald-500/10 text-emerald-400 text-[9px] px-1.5 py-0.5 rounded font-bold inline-block">Saved</span>
</div>

<!-- Slack Notification -->
<div class="bg-slate-900 border border-emerald-500/30 rounded-lg p-3 text-center space-y-1">
<p class="font-bold text-slate-200">Slack Msg</p>
<p class="text-[10px] text-slate-500">#leads channel</p>
<span class="bg-emerald-500/10 text-emerald-400 text-[9px] px-1.5 py-0.5 rounded font-bold inline-block">Sent</span>
</div>

<!-- Gmail Draft -->
<div class="bg-slate-900 border border-emerald-500/30 rounded-lg p-3 text-center space-y-1">
<p class="font-bold text-slate-200">Gmail Send</p>
<p class="text-[10px] text-slate-500">Immediate reply</p>
<span class="bg-emerald-500/10 text-emerald-400 text-[9px] px-1.5 py-0.5 rounded font-bold inline-block">Drafted</span>
</div>
</div>

</div>
</div>
