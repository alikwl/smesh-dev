import { createClient } from '@supabase/supabase-js';
import fs from 'fs/promises';
import path from 'path';

// Force SSR for this route in Astro
export const prerender = false;

try {
  process.loadEnvFile();
} catch (e) {}

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

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

function normalizeCategory(category) {
  if (!category) return 'Prompt';
  const cat = category.trim().toLowerCase();
  if (cat.startsWith('prompt')) return 'Prompt';
  if (cat.startsWith('pdf')) return 'PDF';
  if (cat.startsWith('guide')) return 'Guide';
  return 'Prompt';
}

async function doSync() {
  if (!supabaseUrl || !supabaseServiceKey || supabaseServiceKey === 'your_service_role_key') {
    throw new Error('Supabase credentials missing or invalid in local environment.');
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  // 1. Fetch from Supabase
  const { data: dbResources, error } = await supabase.from('resources').select('*');
  if (error) throw error;

  const resourcesDir = path.join(process.cwd(), 'src/content/resources');
  const lockedDir = path.join(process.cwd(), 'src/content/locked');
  await fs.mkdir(resourcesDir, { recursive: true });
  await fs.mkdir(lockedDir, { recursive: true });

  const logs = [];

  for (let res of dbResources) {
    const slug = res.slug;

    // 2. Write locked content file
    const lockedPath = path.join(lockedDir, `${slug}.md`);
    await fs.writeFile(lockedPath, res.locked_content, 'utf-8');
    logs.push(`Saved locked content for ${slug}`);

    // 3. Construct MDX teaser content
    const testimonials = testimonialsMap[slug] || '';
    const cleanTitle = res.title.replace(/^#\s*/, '').trim();
    const bulletList = (res.bullet_points || []).map(bp => `  - "${bp.replace(/"/g, '\\"')}"`).join('\n');
    const teaserList = (res.teaser_points || []).map(tp => `  - "${tp.replace(/"/g, '\\"')}"`).join('\n');
    const tocList = (res.table_of_contents || []).map(toc => `  - "${toc.replace(/"/g, '\\"')}"`).join('\n');

    const mdxContent = `---
title: "${cleanTitle.replace(/"/g, '\\"')}"
slug: "${slug}"
category: "${normalizeCategory(res.category)}"
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

# ${cleanTitle}

${res.description}

### What you'll unlock:
${(res.bullet_points || []).map(bp => `* **${bp}**`).join('\n')}

### Table of Contents:
${(res.table_of_contents || []).map((toc, idx) => `${idx + 1}. **${toc}**`).join('\n')}

### 📖 Excerpt: Chapter 1 Preview
${res.excerpt || ''}

${testimonials}
`;

    // 4. Write MDX file
    const mdxPath = path.join(resourcesDir, `${slug}.mdx`);
    await fs.writeFile(mdxPath, mdxContent, 'utf-8');
    logs.push(`Saved MDX teaser for ${slug}`);
  }

  // 5. Clean up stale files
  const dbSlugs = new Set(dbResources.map(res => res.slug));
  const existingMdxFiles = await fs.readdir(resourcesDir);
  for (let file of existingMdxFiles) {
    if (!file.endsWith('.mdx')) continue;
    const slug = file.replace(/\.mdx$/, '');
    if (!dbSlugs.has(slug)) {
      const filePath = path.join(resourcesDir, file);
      await fs.unlink(filePath);
      logs.push(`Deleted stale MDX file: ${file}`);
    }
  }

  const existingMdFiles = await fs.readdir(lockedDir);
  for (let file of existingMdFiles) {
    if (!file.endsWith('.md')) continue;
    const slug = file.replace(/\.md$/, '');
    if (!dbSlugs.has(slug)) {
      const filePath = path.join(lockedDir, file);
      await fs.unlink(filePath);
      logs.push(`Deleted stale locked content file: ${file}`);
    }
  }

  return logs;
}

export const GET = async () => {
  try {
    const logs = await doSync();
    return new Response(JSON.stringify({ success: true, logs }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Enable CORS so local admin dashboard can call it
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};

export const POST = GET;

export const OPTIONS = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    }
  });
};
