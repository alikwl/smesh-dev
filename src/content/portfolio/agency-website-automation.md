---
title: Agency Website + Contact Automation
slug: agency-website-automation
category: Websites
description: A high-performance agency website featuring advanced lead forms connected to automated follow-up workflows.
problem: A marketing agency was losing prospective clients because their static email links were ignored, and form entries sat in a database for days before any representative followed up.
solution: We built a lightning-fast static agency website hosted on Cloudflare Pages. The site features an interactive contact form linked to an n8n webhook which processes, filters, notifies, and automatically draft replies to new leads.
result: Lead response time dropped from 36 hours to under 3 minutes, increasing booking conversions by 45%.
tech:
  - Astro
  - n8n
  - Cloudflare Pages
image: /assets/images/portfolio/agency-website.webp
---

Speed is everything in online sales. Research shows that replying to a lead within 5 minutes increases conversion rates by over 300%. This project focuses on integrating frontend design directly with automated backend workflows to achieve near-instantaneous lead response.

### Automated Pipelines

The website is coded using **Astro** for rapid page loads and high core web vitals. The contact form doesn't send standard server emails; instead, it triggers an AJAX POST request to an **n8n workflow**.

n8n parses the project details, routes them to a dedicated Slack channel with rich layout blocks, inserts the contact info into the sales database, and checks the lead's email history. If it's a first-time lead, n8n instantly triggers a personalized email draft inside the sales representative's Gmail box, ready to be reviewed and sent.
