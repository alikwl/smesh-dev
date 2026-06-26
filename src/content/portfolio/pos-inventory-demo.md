---
title: POS & Inventory Dashboard
slug: pos-inventory-demo
category: Dashboards & POS
description: A custom retail point-of-sale system built for local distributors, featuring fast keyboard shortcuts, offline resilience, and automatic stock depletion alerts.
problem: A retail distributor was using paper invoices and an outdated Excel sheet to track 1,200+ inventory items, leading to frequent stock-outs and slow checkout lines.
solution: We developed a sleek, lightweight Point of Sale (POS) and inventory panel. It features optimized keyboard navigation, barcode reader integration, and automatic low-stock alerts.
result: Checked out customers twice as fast and reduced stock discrepancies by 92%.
tech:
  - Next.js
  - Supabase
  - Tailwind CSS
image: /assets/images/portfolio/pos-inventory.webp
---

This project represents a custom system tailored to the fast-paced retail floor. Off-the-shelf software often contains cluttered features that slow down cashier workflow. A bespoke dashboard solves this by keeping the layout focused entirely on raw speed and ease of use.

### Inventory Intelligence

The frontend utilizes **Next.js** to handle lightning-fast searches across thousands of SKUs. The checkout page features full keyboard shortcut bindings (e.g., F12 to checkout, Esc to clear, Arrow keys to traverse products) so the cashier never has to touch the mouse.

We built the backend with **Supabase**. Each successful transaction runs a database function transaction that atomics-updates inventory levels. If a product falls below its predefined threshold, a webhook triggers to email the manager a reorder notice.
