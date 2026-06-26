---
title: Booking Dashboard Demo
slug: booking-dashboard
category: Dashboard
description: A clean booking system dashboard designed for medical clinics and service providers, showing interactive appointment scheduling, slot management, and calendar integration.
tech:
  - React
  - Supabase
  - Google Calendar API
image: /assets/images/calendar-booking-mockup.png
use_case: "Traditional appointment management relies on phone calls and paper registers, leading to booking conflicts. Smesh.Dev builds automated booking dashboards syncing instantly to Google Calendar and reminding users via WhatsApp."
steps:
  - title: Client Chooses Slot
    description: Public booking grid shows live available slots parsed from Calendar
    icon: calendar
  - title: Database Slot Lock
    description: System locks the slot to prevent double-booking conflicts
    icon: lock
  - title: Calendar Synced
    description: API adds event to provider's Google Calendar with details
    icon: refresh-cw
  - title: SMS Alerts Triggered
    description: Customer and provider receive auto confirmations on WhatsApp
    icon: message-square
---

<div class="max-w-xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200 text-slate-800">
<!-- Dashboard Header -->
<div class="bg-indigo-600 text-white px-6 py-4 flex items-center justify-between">
<div class="flex items-center gap-3">
<span class="text-xl">📅</span>
<div>
<h3 class="font-bold text-base leading-tight">Clinic booking Dashboard</h3>
<p class="text-xs text-indigo-200">Dr. Sarah Khan's Schedule</p>
</div>
</div>
<div class="flex gap-2">
<button class="bg-indigo-700 px-3 py-1.5 rounded-lg text-xs font-semibold text-white hover:bg-indigo-800 transition">Add Slot</button>
</div>
</div>

<!-- Dashboard Body -->
<div class="p-6 bg-slate-50 min-h-[360px] text-sm">
<!-- Header Controls -->
<div class="flex justify-between items-center mb-6">
<h4 class="font-bold text-slate-700 text-sm">Today's Schedule — Monday, June 15</h4>
<div class="flex gap-1 bg-white border border-gray-200 rounded-lg p-0.5">
<button class="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-md text-xs font-medium">Day</button>
<button class="px-3 py-1 text-slate-500 rounded-md text-xs">Week</button>
</div>
</div>

<!-- Calendar Grid Slots -->
<div class="space-y-3">
<!-- Slot 1 (Booked) -->
<div class="bg-white border-l-4 border-emerald-500 rounded-r-xl p-3 flex justify-between items-center shadow-sm">
<div>
<div class="flex items-center gap-2">
<span class="text-xs font-bold text-slate-400">09:00 AM - 09:30 AM</span>
<span class="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Booked</span>
</div>
<p class="font-semibold text-slate-800 mt-1">Muhammad Ahmed</p>
<p class="text-xs text-slate-500">Regular Checkup</p>
</div>
<div class="text-right">
<p class="text-xs text-emerald-600 font-semibold flex items-center gap-1 justify-end">
<span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Active
</p>
<span class="text-xs text-slate-400 underline cursor-pointer mt-1 block">Details</span>
</div>
</div>

<!-- Slot 2 (Booked) -->
<div class="bg-white border-l-4 border-emerald-500 rounded-r-xl p-3 flex justify-between items-center shadow-sm">
<div>
<div class="flex items-center gap-2">
<span class="text-xs font-bold text-slate-400">10:00 AM - 10:30 AM</span>
<span class="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Booked</span>
</div>
<p class="font-semibold text-slate-800 mt-1">Zainab Bibi</p>
<p class="text-xs text-slate-500">Consultation</p>
</div>
<div class="text-right">
<p class="text-xs text-emerald-600 font-semibold flex items-center gap-1 justify-end">
<span class="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Active
</p>
<span class="text-xs text-slate-400 underline cursor-pointer mt-1 block">Details</span>
</div>
</div>

<!-- Slot 3 (Available) -->
<div class="bg-white border-l-4 border-indigo-400 rounded-r-xl p-3 flex justify-between items-center shadow-sm border border-dashed border-slate-300">
<div>
<div class="flex items-center gap-2">
<span class="text-xs font-bold text-slate-400">11:00 AM - 11:30 AM</span>
<span class="bg-indigo-50 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Available</span>
</div>
<p class="font-semibold text-slate-400 mt-1">Empty Slot</p>
</div>
<div>
<button class="bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-3 py-1 rounded text-xs font-semibold transition">Quick Book</button>
</div>
</div>

<!-- Slot 4 (Booked - Pending) -->
<div class="bg-white border-l-4 border-amber-500 rounded-r-xl p-3 flex justify-between items-center shadow-sm">
<div>
<div class="flex items-center gap-2">
<span class="text-xs font-bold text-slate-400">12:00 PM - 12:30 PM</span>
<span class="bg-amber-50 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Pending Sync</span>
</div>
<p class="font-semibold text-slate-800 mt-1">Bilal Siddiqui</p>
<p class="text-xs text-slate-500">Video Call Consult</p>
</div>
<div class="text-right">
<p class="text-xs text-amber-600 font-semibold flex items-center gap-1 justify-end">
<span class="w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping"></span> Syncing
</p>
<span class="text-xs text-slate-400 underline cursor-pointer mt-1 block">Cancel</span>
</div>
</div>
</div>
</div>

<!-- Footer Stats Bar -->
<div class="px-6 py-3 border-t border-gray-200 bg-white flex justify-between items-center text-xs text-slate-500">
<p>3 Appointments Booked Today</p>
<p class="flex items-center gap-1">
<span class="w-2 h-2 bg-emerald-500 rounded-full"></span> Google Calendar Synced
</p>
</div>
</div>
