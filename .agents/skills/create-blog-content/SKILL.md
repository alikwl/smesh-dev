---
name: create-blog-content
description: High-intelligence blog post writer for Smesh.dev. Executes data-driven research, fact-checking, and writes highly-convertible 2200-3500+ words technical articles with no AI footprints, strong conversion funnel CTAs, zero duplicate titles, and strict SEO lengths.
---

# Skill: create-blog-content

Use this skill when the user asks to write, rewrite, update, or expand a blog post on Smesh.dev. This skill instructs the agent on how to research, query the database, format layouts, write high-conversion copy, and enforce strict SEO meta lengths.

---

## 🛠️ Step 1: Query Current Database State (Mandatory First Step)
Before writing or proposing any content:
1. Locate the targeted blog post in the Supabase database.
2. Read the **entire** row (using a Node.js script in the project `scratch/` directory) to extract:
   - `title`
   - `excerpt`
   - `content`
   - `category`
   - `tags`
   - `faq_schema`
3. Analyze the gaps in the current content. Do not rewrite from scratch without referencing the existing context, database columns, and slug.

---

## 📐 Step 2: Strict SEO & Meta Length Limits (2026 Standards)
When writing, updating, or saving metadata to Supabase columns, you must enforce the following strict length and strategy guidelines:

| Element | Database Column | Ideal Length (2026) | Strategy / Why It Matters |
| :--- | :--- | :--- | :--- |
| **Article Title** | `title` | Flexible (60–80 characters) | On-page H1. Matches search intent. Already exists in the table. **Must NOT be placed in markdown content.** |
| **SEO Title Tag** | `seo_title` | **50–60 characters** (≈ 580px width) | Google search headline. Strongest ranking signal. Too long gets truncated. |
| **Meta Title** | `meta_title` | **55–60 characters** | Kept concise, keyword-rich, and branded (e.g., `Keyword | Smesh.Dev`). |
| **SEO Meta Description** | `seo_description` | **140–160 characters** | Key CTR weapon. Google rewrites it if it exceeds 160 characters. |
| **Meta Description** | `meta_description` | **150–160 characters** | Ensures the snippet fits desktop + mobile perfectly. |
| **Excerpt** | `excerpt` | **40–60 words** (~250–300 chars) | Summary used in listing feeds and AI Search Engine snippets. |

### 🔑 SEO Strategy Rules:
* **Front-load Keywords**: Put the primary keyword/topic at the start of the `seo_title` and `meta_title`.
* **Add Specificity**: Include target years (e.g. `2026`), target audience (`for small businesses`), or outcomes (`Checklist`).
* **Avoid Slogans**: Do not write vague marketing taglines. Write clear, action-based headlines.
* **Consistency**: Ensure the `title`, `seo_title`, and `meta_description` align topically so search engines do not rewrite them.
* **Pixel Width & Character Limits**: Maximize character restrictions (e.g., 55 characters for titles, 150 characters for descriptions) to prevent SERP truncation on mobile.
* **AI Engine Optimization (GEO/AEO)**: Generative Search Engines extract summaries from the first 40–60 words of the `excerpt`. Keep the opening paragraph tight, plain, and free of fluff.

---

## 🚫 Step 3: Avoid Title Duplication (SEO Critical)
* **Rule**: Do **NOT** start the `content` markdown with an H1 heading (e.g., `# Blog Post Title`). Do **NOT** repeat the title inside the body content.
* **Why**: The Astro blog template `src/pages/blog/[slug].astro` automatically fetches the `title` column from Supabase and renders it in the main page H1:
  ```html
  <h1 class="text-3xl md:text-5xl font-extrabold ...">{title}</h1>
  ```
  If you include the title at the top of the `content` field, it will render twice on the live webpage, creating duplicate H1 tags, ruining page aesthetics, and triggering Google SEO penalty flags.
* **Action**: Start your markdown body directly with an engaging introductory sentence or first paragraph, followed by H2/H3 subheadings.

---

## ✍️ Step 4: Markdown Formatting & Eliminating AI Fluff
Google’s quality algorithms penalize generic, structured AI copy. Any article written must sound like a senior software architect/consultant writing first-party guides.

* **Formatting Requirements**: 
  - The markdown must be fully formatted with tables, bulleted lists, inline code blocks, and copy-pasteable script blocks (JSON, JS, Python).
  - Use `<aside>` tags for call-out blocks.
  - Do **NOT** include visible accordions or headers for FAQs in markdown (these are loaded from the database column).
* **Banned Words & Phrases**: `Delve`, `Testament`, `In conclusion`, `Furthermore`, `Demystify`, `Embark`, `Revolutionize`, `Game-changer`, `Moreover`, `Tapestry`, `Look no further`, `It's crucial to remember`.
* **Substance Over Hype**: Provide actual engineering details:
  - Docker Compose configurations
  - Production environment tuning parameters
  - Real database columns and relational schemas
  - Copy-pasteable, verified JavaScript/Python scripting snippets.

---

## 💰 Step 5: High-Conversion Lead Funnel & Service Hook Architecture
The ultimate objective of Smesh.dev blog posts is to convert visiting founders, CTOs, and operators into paying clients. The article should be structured as an operational funnel:

1. **The Hook (Intro)**: Frame a high-tension pain point (e.g., wasting hours on admin, leads dropping due to manual response times).
2. **Zapier/Make vs. Custom Setup Table**: Provide a structured comparison table highlighting how SaaS platforms become expensive or limiting, presenting custom code-first platforms (n8n, Supabase) as the high-ROI escape route.
3. **Direct Service Integration**: Weave Smesh.dev services directly into the body.
   - For automation topics, link contextually to `/services/workflow-automation/`.
   - For database/RAG topics, link to `/services/dashboards-internal-tools/` or `/services/ai-support-chatbots/`.
   - For chat automation, link to `/services/whatsapp-automation/`.
4. **Interactive Funnel Boxes**: Insert styled, responsive HTML `<aside>` cards with call-to-actions (CTAs) for free resources or consulting calls:
   ```html
   <aside class="surface-card rounded-2xl p-5 border border-[color:var(--line)] bg-[color:var(--bg-soft)] my-8 font-sans flex flex-col sm:flex-row items-center justify-between gap-4">
     <div>
       <h4 class="font-bold text-[color:var(--ink)] text-xs uppercase tracking-wider">Want this custom automated?</h4>
       <p class="text-[11px] text-[color:var(--muted-soft)] mt-1 leading-normal">Haider Ali can build, deploy, and host this exact pipeline for your team.</p>
     </div>
     <button class="trigger-audit-modal shrink-0 inline-flex h-9 px-4 items-center justify-center rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-[11px] font-bold transition cursor-pointer">
       Claim Free Automation Audit
     </button>
   </aside>
   ```
5. **Exit Funnel (The Closer)**: End the post with a strong closing banner prompting the user to schedule a discovery call or download a related workflow JSON template.

---

## 🔗 Step 6: Entity-First Formatting & Internal Linking
Every article must contextually interlink 5-8 Smesh.dev routes to boost SEO domain authority. Always use exact absolute paths:
- **Relevant Services**:
  - `/services/workflow-automation/`
  - `/services/whatsapp-automation/`
  - `/services/ai-support-chatbots/`
  - `/services/dashboards-internal-tools/`
  - `/services/saas-mvp-development/`
  - `/services/seo-aio-geo-content/`
- **Lead Capture & Resources**:
  - `/resources/n8n-lead-router-workflow/`
  - `/resources/n8n-whatsapp-order-workflow/`
  - `/resources/supabase-vector-store-kit/`
  - `/resources/agency-starter-kit/`
- **Visuals**: Use the high-resolution `.webp` assets already compiled inside `/public/assets/images/blog/` (e.g., `Architecture_diagram_n8n_trigger.webp`, `whatsapp-automation.webp`). Format images as:
  ```markdown
  ![Descriptive Alt Text](/assets/images/blog/image-name.webp)
  *Caption: Concise technical explanation*
  ```

---

## ❓ Step 7: FAQ Database Storage (No Markdown FAQs)
* **Rule**: Do **NOT** write the FAQs section inside the markdown `content` body. The article body must end immediately after the summary/exit CTA section.
* **Why**: The Astro blog post page template (`[slug].astro`) dynamically queries the `faq_schema` database column and automatically renders it in two places:
  1. Inside the HTML `<head>` as structured `FAQPage` JSON-LD schema for SEO/AI engines.
  2. At the bottom of the page as an interactive, styled visible Accordion component.
* **Database Action**: Write all FAQs strictly into the database's `faq_schema` column as a JSON array:
  ```json
  [
    {
      "question": "Highly relatable client pain-point question?",
      "answer": "Actionable, problem-solving answer highlighting Smesh.dev expertise..."
    }
  ]
  ```
* **Content Strategy**: Make sure the FAQs are highly relatable, user-centric, and solve real, practical questions that a founder or CTO would ask regarding hosting, scaling, API limitations, or technical security. Avoid generic templates.