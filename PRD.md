# Product Requirement Document (PRD) — Smesh.dev Evolution

## 1. Project Overview & Architecture
Smesh.dev ko ek ultimate static "Khazaana" (Resource Hub) aur Agency Portfolio/Services site mein convert karna hai. 
- **Hosting:** GitHub Pages (Strictly Static).
- **Framework:** Astro (`output: 'static'`).
- **Database:** Supabase (Client-side integration via anon keys for lead capturing and tracking).
- **Content Management:** Astro Content Collections (Markdown/MDX). Har cheez (Services, Projects, Khazaana) ko add/edit karna sirf ek file create karne jitna aasan hoga.

---

## 2. 2026 SEO, GEO, & AEO Optimization Standards
Google aur AI Search Engines (Claude, ChatGPT, Perplexity, Gemini) ki modern retrieval policies ke mutabiq site ko rank karwane ke liye niche diye gaye rules strictly implement karne hain:

### A. Transparent Author & Entity Schema (Anti-AI Detection)
- Har resource aur page par structured **JSON-LD Author Schema** lagana hai jo Haider Ali (Founder) aur BismillahTC Digital Services ko as a verified entity link kare.
- Real-world entities (Khanewal market, Pakistani e-commerce, n8n automation, Supabase tech stack) ko explicitly metadata mein link karna hai taake AI search engines ko context mile.
- Content ka tone expert, human-vibe, aur direct actionable hona chahiye (No generic AI fluff).

### B. AEO / GEO (Answer & Generative Engine Optimization)
- Every resource page must include a **"Quick Summary / Direct Answer"** component right at the top. AI crawlers direct answers ko extract karte hain.
- Semantic HTML structure (`<article>`, `<aside>`, `<section>`) use karni hai.
- Automated FAQ JSON-LD schema integration har guide ke niche honi chahiye.

---

## 3. Automated Self-Promotion Loop (The Conversion Funnel)
Website khud ba khud apne services aur projects ko promote karegi bina kisi manual edits ke:
- **Smart Interlinking:** Agar koi user Khazaana mein `n8n automation guide` par hai, toh page ke bottom par automatically ek dynamic CTA (Call to Action) load hoga: *"Want this automated for your business? Check out our Workflow Automation Service."*
- **Dynamic Context Matching:** Astro Content Collections ke tags/categories ko match kar ke relevant service card khud pick ho jaye ga.
- **WhatsApp Share & Lead Capture:** Free assets direct download honge, lekin click par Supabase mein download count entry generate hogi. Premium items par client-side modal popup khule ga jo user ka Name aur WhatsApp save kar ke resource unlock kare ga.

---

## 4. Smart Asset & Image Management System
- **WebP Enforcement:** Site par use hone wali tamam images strictly `.webp` format mein honi chahiye.
- **HTML Fallback Placeholder Engine:** Agar koi image `/public/images/` folder mein missing hai, toh website tute gi nahi aur na hi broken link dikhaye gi. 
  - Ek custom Astro component `SmartImage.astro` banana hai.
  - Agar image path valid na ho, toh yeh component ek clean HTML/SVG block render karega jisme likha hoga: *"Missing Image: Place '[image-name].webp' inside `/public/images/` to replace this placeholder."*

---

## 5. Incremental Execution Roadmap (For Antigravity Agent)

### Task 1: Static Supabase & Schema Initialization
- Setup `@supabase/supabase-js` package.
- `src/lib/supabase.ts` mein client-side initiation karo using `import.meta.env.PUBLIC_SUPABASE_URL` aur `PUBLIC_SUPABASE_ANON_KEY`.
- (Aap ke MCP link karne ke baad) Antigravity khud Supabase mein `leads` aur `download_analytics` ke tables create kare ga.

### Task 2: Content Collections & Easy Management setup
- `src/content/config.ts` mein teen collections define karo:
  1. `services` (title, description, icon, price, tag)
  2. `portfolio` (title, client, techStack, image, link)
  3. `khazaana` (title, category [PDF/Prompt/Guide], targetServiceTag, description, premium)

### Task 3: SmartImage Fallback Component Build
- Create `src/components/SmartImage.astro`.
- Isme node filesystem (`fs`) check lagao. Agar image folder mein file exit karti hai toh `<img>` tag render karo, warna elegant stylized HTML card border ke sath render karo jo developer ko guide kare ke kaun si file missing hai.

### Task 4: Core Pages & Advanced SEO/Schema Injection
- Create `src/pages/khazaana/index.astro` (with grid filters).
- Create `src/pages/services/index.astro`.
- Base Layout mein advanced global schema wrapper inject karo (Author, Organization, WebSite schemas).

### Task 5: Automation Loop & Funnel Integration
- Khazaana ke single markdown template page ke niche logic lagao jo content ke `targetServiceTag` ko read kare aur automatically relevant service ka landing element embed kar de.