---
title: WhatsApp Order Bot for Local Shop
slug: whatsapp-order-bot-demo
category: Automation
description: An automated conversational order management system designed for a local retail shop in Pakistan, allowing customers to place orders directly over WhatsApp.
problem: The client, a local fabric retailer, was losing up to 40% of customer queries during peak hours on WhatsApp because their manual staff could not keep up with typing responses and sorting sizes/prices.
solution: We designed and deployed a custom n8n workflow connected to the Official WhatsApp Business Cloud API. The bot presents customers with product buttons, validates stock instantly from a Google Sheet database, calculates totals, and prompts for payment receipts.
result: Over 600 orders successfully processed in the first month without manual intervention, saving 15+ staff hours daily.
tech:
  - n8n
  - WhatsApp API
  - Google Sheets
image: /assets/images/portfolio/whatsapp-order-bot.webp
---

This project showcases the power of chat-based commerce for local retail shops. Instead of forcing customers to download an app or navigate a slow website over mobile data, they place orders directly within the chat app they use every day: WhatsApp.

### Technical Detail

We built this system using **n8n** as the orchestrator. When a customer sends a message, n8n verifies their intent. If they want to order, the workflow fetches the current stock from **Google Sheets**, which serves as an easy-to-edit inventory management dashboard for the shop staff. 

The checkout calculates delivery fees dynamically based on the customer's city and presents a detailed order receipt. Once confirmed, the order details are pushed back to the dispatch spreadsheet, and a Slack alert is sent to the fulfillment team.
