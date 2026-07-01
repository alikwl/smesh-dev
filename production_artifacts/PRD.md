# Product Requirements Document (PRD) — Smesh.dev

## 1. Executive Summary & Business Goals
**Smesh.dev** is the personal automation studio of **Haider Ali**, an Automation Engineer with 8+ years of experience.

The website serves two primary purposes:
1. **Professional Portfolio & Services Showcase**: Present Haider Ali’s expertise in n8n workflows, Supabase, AI solutions, and high-performance static websites to attract clients.
2. **Automation Resource Hub**: A free resources library offering high-value, ready-to-use assets (n8n workflows, AI prompts, Supabase kits, Astro starters, etc.) to build trust, drive organic traffic, and generate qualified leads.

The entire platform reflects professionalism, technical depth, and a client-first approach.

---

## 2. Technical Architecture
The studio is built with a fast, secure, and maintainable stack:
- **Framework**: Astro 5 configured for static output (`output: 'static'`).
- **Database & Backend**: Supabase for lead collection, blog content, download tracking, and vector/RAG features.
- **Client Integrations**: Direct client-side Supabase calls using public `anon` keys.
- **Automations**: n8n for lead notifications, WhatsApp alerts, and backend workflows.
- **Deployment**: GitHub Pages with custom domain.

---

## 3. Core Features & Page Structure

### A. Home Page (`/`)
- Impactful hero section highlighting expertise and value proposition.
- Featured services, resources, and client success highlights.
- Strong call-to-action sections.

### B. About Page (`/about`)
- Personal story of Haider Ali, experience, expertise, and philosophy as an automation engineer.

### C. Services (`/services` and `/services/[slug]`)
- Detailed service offerings including:
  - n8n Workflow Automation
  - AI Chatbots & RAG Solutions
  - Custom Dashboards & POS Systems
  - High-Speed Static Websites (Astro + Tailwind)

### D. Resources (`/resources` and `/resources/[slug]`)
**Flagship Lead Magnet Section** — Automation Resource Hub

A well-organized, searchable library of free resources to attract developers, business owners, and potential clients.

#### Resource Library Categories (6 Main Categories)

| # | Category                        | Why It Matters                              | Examples                                      | Suggested Filters/Tags                     |
|---|---------------------------------|---------------------------------------------|-----------------------------------------------|--------------------------------------------|
| 1 | **n8n Workflow Templates**      | Highest demand category                     | WhatsApp lead routing, AI Agent + RAG, Sheets sync, Invoice automation | Complexity, Use-case, Integrations        |
| 2 | **AI Prompt Vault**             | Explosive demand for ready prompts          | Automation prompts, RAG optimization, Content writing, Code review | Use-case, Model, Output Type              |
| 3 | **Supabase Kits & RAG Setups**  | Trending modern stack                       | RAG schemas, Vector store setups, Auth examples, Edge Functions | Type (Schema/RAG/Auth), Difficulty        |
| 4 | **Astro + Tailwind Starters**   | Core expertise area                         | Portfolio/blog starter, SaaS landing kit, Admin dashboard, Component library | Type (Portfolio/Dashboard/Landing)        |
| 5 | **Business Automation Playbooks**| High trust & conversion potential           | Lead management systems, Client onboarding, Invoice reconciliation | Industry, Goal (Lead Gen / Operations)    |
| 6 | **Developer Cheat Sheets**      | Evergreen traffic & bookmarks               | n8n expressions, Tailwind quick ref, Supabase patterns, Astro best practices | Topic                                     |

**Key Features of Resource Library:**
- Clean grid layout with search and filters
- One-click Copy / Download buttons
- Gated content with lead capture (Name, Email, WhatsApp)
- Supabase-powered dynamic content
- SEO-optimized individual resource pages

### E. Portfolio (`/portfolio`)
- Real case studies with problem, solution, and results.

### F. Demos (`/demos`)
- Live interactive previews of dashboards, chatbots, and tools.

### G. Contact (`/contact`)
- Simple yet effective contact form with Supabase + n8n integration.

### H. Legal Pages
- `/privacy`, `/terms`, `/cookie-policy`

---

## 4. Technical SEO & GEO/AEO Optimization
- Strong technical SEO with proper meta tags and structured data.
- JSON-LD Schema for Person, LocalBusiness (if needed), and FAQ.
- Generative Engine Optimization (clear, direct answers).
- Fast loading and mobile-first design.

---

## 5. Non-Functional Requirements
- **Performance**: All pages under 1.5s load time (Core Web Vitals).
- **Design**: Strictly follow `DESIGN.md` (warm editorial minimalist aesthetic).
- **Code Quality**: Clean, well-commented, maintainable Astro components.
- **Mobile**: Perfect responsiveness across all devices.

---

**Owner:** Haider Ali  
**Last Updated:** July 2026
