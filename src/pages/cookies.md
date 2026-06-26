---
layout: ../layouts/BaseLayout.astro
title: Cookie Policy
description: View Smesh.dev's simple cookie and local storage usage policies.
---

<div class="content-body prose max-w-[72ch] mx-auto px-4 py-8 sm:px-6 md:px-8">

# Cookie Policy

Last Updated: June 25, 2026

This Cookie Policy explains how Smesh.dev (operated by BismillahTC Digital Services, Karachi) uses cookies, browser local storage (`localStorage`), and similar caching technologies when you visit our website.

## 1. What are Cookies and Local Storage?
Cookies are small text files stored on your device by your web browser. Local Storage is a standard technology built into modern browsers that allows websites to store small pieces of data directly on your device. Unlike cookies, local storage data is not transmitted back to our servers automatically on every request, making it faster and more secure for saving UI states.

## 2. How Smesh.dev Uses These Technologies
We believe in maintaining a lightweight, secure web environment. We use these technologies solely to enable critical features on the site:
- **Resource Unlock Status (`localStorage`):** When you unlock a developer resource, we save a flag (e.g. `unlocked_${slug}`) in your browser's local storage. This ensures you do not have to fill out the lead capture form repeatedly to view the same resource file.
- **Chat Session State (`sessionStorage`):** We use a session key (`smesh_chat_session_id`) to maintain your active conversation state with our AI chat widget while you browse different pages on our website.
- **Supabase Authentication Session:** If you log in to any secure client dashboard, Supabase sets temporary session cookies to keep you signed in securely.

## 3. Managing and Deleting Caches
You can clear your browser's cookies and local storage at any time through your browser's settings panel. Please note that clearing your local storage will lock previously unlocked resources, requiring you to re-verify to view the blueprints.

</div>
