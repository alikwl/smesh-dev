import { createClient } from '@supabase/supabase-js';
import fs from 'fs/promises';
import path from 'path';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey || supabaseServiceKey === 'your_service_role_key' || supabaseUrl === 'your_project_url') {
  console.warn("[Warning] SUPABASE_URL or SUPABASE_SERVICE_KEY is missing or using placeholders. Skipping database sync and building using existing local cache.");
  process.exit(0);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Testimonials mapped by resource slug
const testimonialsMap = {
  'n8n-whatsapp-order-workflow': `### What other professionals say:
> "This n8n template saved me days of setup. Our order capture is now 100% automated!"
> — Bilal K., Operations Manager

> "The data validation script caught three typos in customer addresses on the very first day. Highly recommend."
> — Sarah T., E-commerce Lead`,

  'offline-pos-sync-guide': `### What other professionals say:
> "Offline-first syncing is notoriously hard to get right. This guide mapped out conflict resolution perfectly."
> — Zain A., Lead Retail Engineer

> "Our SQLite queue hasn't dropped a single transaction since we implemented this architecture."
> — David M., CTO`,

  'sample-resource': `### What other professionals say:
> "The RAG query rewriter prompt changed our search relevance overnight. Absolute goldmine."
> — Haris S., AI Product Owner

> "Roman Urdu Hinglish chatbot replies sound so natural now. Our local customer engagement doubled."
> — Ayesha N., Marketing Lead`,

  'supabase-vector-rag-prompt': `### What other professionals say:
> "Hallucinations went down to zero. The match function RPC script ran flawlessly on our Supabase instance."
> — Daniyal Z., Backend Developer

> "Simple, production-grade, and saved us hours of custom prompt tuning."
> — Julia W., Solopreneur`
};

async function run() {
  try {
    // 1. Fetch all resources from Supabase (including locked_content)
    const { data: dbResources, error } = await supabase
      .from('resources')
      .select('*');
      
    if (error) {
      throw error;
    }
    
    console.log(`Fetched ${dbResources.length} resources from Supabase database.`);
    
    // Ensure target directories exist
    const resourcesDir = './src/content/resources';
    const lockedDir = './src/content/locked';
    await fs.mkdir(resourcesDir, { recursive: true });
    await fs.mkdir(lockedDir, { recursive: true });
    
    for (let res of dbResources) {
      const slug = res.slug;
      
      // 2. Write the locked content file
      const lockedPath = path.join(lockedDir, `${slug}.md`);
      await fs.writeFile(lockedPath, res.locked_content, 'utf-8');
      console.log(`- Saved locked content: ${lockedPath}`);
      
      // 3. Construct MDX teaser content
      const testimonials = testimonialsMap[slug] || '';
      
      const bulletList = (res.bullet_points || []).map(bp => `  - "${bp.replace(/"/g, '\\"')}"`).join('\n');
      const teaserList = (res.teaser_points || []).map(tp => `  - "${tp.replace(/"/g, '\\"')}"`).join('\n');
      const tocList = (res.table_of_contents || []).map(toc => `  - "${toc.replace(/"/g, '\\"')}"`).join('\n');
      
      const mdxContent = `---
title: "${res.title.replace(/"/g, '\\"')}"
slug: "${slug}"
category: "${res.category}"
targetServiceTag: "${res.target_service_tag}"
description: "${res.description.replace(/"/g, '\\"')}"
premium: ${res.premium}
${res.download_url ? `downloadUrl: "${res.download_url}"` : ''}
${bulletList ? `bulletPoints:\n${bulletList}` : ''}
${res.preview_image ? `previewImage: "${res.preview_image}"` : ''}
${res.estimated_value ? `estimatedValue: "${res.estimated_value}"` : ''}
${teaserList ? `teaserPoints:\n${teaserList}` : ''}
${tocList ? `tableOfContents:\n${tocList}` : ''}
lockedContentFile: "src/content/locked/${slug}.md"
---

import ResourceGate from '../../components/ResourceGate.astro';

# ${res.title}

${res.description}

### What you'll unlock:
${(res.bullet_points || []).map(bp => `* **${bp}**`).join('\n')}

### Table of Contents:
${(res.table_of_contents || []).map((toc, idx) => `${idx + 1}. **${toc}**`).join('\n')}

### 📖 Excerpt: Chapter 1 Preview
${res.excerpt || ''}

<ResourceGate slug="${slug}" resourceTitle="${res.title}" />

${testimonials}
`;
      
      // 4. Write MDX file
      const mdxPath = path.join(resourcesDir, `${slug}.mdx`);
      await fs.writeFile(mdxPath, mdxContent, 'utf-8');
      console.log(`- Saved MDX teaser: ${mdxPath}`);
    }
    
    console.log('All resources successfully compiled from Supabase to local content files!');
  } catch (err) {
    if (err.message && err.message.includes('Invalid API key')) {
      console.warn("[Warning] Invalid Supabase API key. Skipping database sync and building using existing local cache.");
      process.exit(0);
    }
    console.error('Fatal error during build-time resource sync:', err);
    process.exit(1);
  }
}

run();
