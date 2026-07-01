# Product Requirements Document (PRD) — Smesh.dev

## 1. Executive Summary & Business Goals
**Smesh.dev** is the professional personal automation studio of **Haider Ali**, operated under the parent entity **BismillahTC Digital Services**. 

The website serves a dual purpose:
1. **Agency Portfolio & Services Showcase**: Pitch automation and high-speed web services directly to Pakistani and international clients.
2. **Khazaana (Resource Hub)**: Host free and gated lead-magnet resources (PDF guides, prompts, workflows) to capture client leads.

All operations, business agreements, and service delivery channels comply strictly with Pakistani governing laws.

---

## 2. Technical Architecture
The studio is designed as a secure, fast, and static-first architecture:
- **Framework**: Astro 5 configured for static output (`output: 'static'`).
- **Database & Backend**: Supabase for lead collection and download telemetry.
- **Client Integrations**: Direct client-side calls to Supabase API endpoints using public `anon` credentials.
- **Webhook Automation**: Integration with n8n triggers to log leads, send WhatsApp alerts, and trigger notification workflows.
- **Deployment**: Deployed on GitHub Pages with custom domain binding.

---

## 3. Core Features & Page Structure

### A. Home Page (`/`)
- Professional hero showcasing the studio value proposition (n8n, Supabase, AI RAG, static speed).
- Client logos, services overview, featured portfolio highlights, and quick contact anchors.

### B. About Page (`/about`)
- Entity transparency: Explicitly details the studio connection to BismillahTC Digital Services and the lead designer/developer Haider Ali.

### C. Services (`/services` and `/services/[slug]`)
- Detail cards for services: Workflow Automation (n8n), AI Support Chatbots (RAG), Custom POS/Inventory Dashboards, and High-Speed Websites (Astro).
- Direct-answer segments and automated FAQ lists.

### D. Khazaana / Resources (`/resources` and `/resources/[slug]`)
- Grid layout showing prompt templates, PDF guides, and workflow files.
- Gated items trigger a client-side modal popup asking for contact details (Name, WhatsApp, Email) before downloading.

### E. Portfolio (`/portfolio` and `/portfolio/[slug]`)
- Real case studies showing the client problem, studio solution, and business metrics.

### F. Demos (`/demos` and `/demos/[slug]`)
- Interactive dashboard previews showing booking systems, inventory grids, and chat widgets.

### G. Contact Page (`/contact`)
- Dynamic contact form logging queries directly to Supabase and notifying n8n.

### H. Legal Pages (`/privacy`, `/terms`, `/cookie-policy`)
- Document compliance with Pakistani governing laws, data practices, and terms of service.

---

## 4. Technical SEO & GEO/AEO Optimization
To rank prominently in search engine result pages and conversational AI engines (Claude, ChatGPT, Perplexity, Gemini):
1. **JSON-LD Schema**: Inject schemas detailing:
   - **LocalBusiness**: Linking BismillahTC Digital Services, location (Khanewal), and contacts.
   - **Author**: Verifying Haider Ali as the content author.
   - **FAQPage**: Dynamic FAQ schema injection on single service routes.
2. **Generative Engine Summary**: Provide a 2-3 sentence bolded direct summary block at the top of informational pages.
3. **Semantic Tags**: Enforce native HTML5 structural blocks (`<article>`, `<aside>`, `<section>`).

---

## 5. Non-Functional Requirements
- **Core Web Vitals**: All pages must load in under 1.5 seconds.
- **Asset Optimization**: All project images must be stored and served in WebP format.
- **Mobile-first Rendering**: Perfect mobile responsiveness (tested from 360px upwards).
