import { createClient } from '@supabase/supabase-js';
import fs from 'fs/promises';
import path from 'path';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_KEY in environment variables.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Simple parser for YAML frontmatter block
function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]+?)\r?\n---/);
  if (!match) return { data: {}, body: content };
  
  const yamlSection = match[1];
  const body = content.slice(match[0].length).trim();
  const data = {};
  
  let currentKey = null;
  const lines = yamlSection.split(/\r?\n/);
  
  for (let line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    
    // Check for array list item
    if (trimmed.startsWith('-') && currentKey) {
      if (!Array.isArray(data[currentKey])) {
        data[currentKey] = [];
      }
      const val = trimmed.slice(1).trim().replace(/^["']|["']$/g, '');
      data[currentKey].push(val);
      continue;
    }
    
    // Check for key-value pair
    const colonIndex = line.indexOf(':');
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim();
      const val = line.slice(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
      
      currentKey = key;
      
      if (val === 'true') {
        data[key] = true;
      } else if (val === 'false') {
        data[key] = false;
      } else if (val !== '') {
        data[key] = val;
      } else {
        data[key] = []; // assume array if empty on same line
      }
    }
  }
  
  return { data, body };
}

async function syncBlogPosts() {
  console.log('--- Syncing Blog Posts ---');
  const dir = './src/content/posts';
  const files = await fs.readdir(dir);
  
  for (let file of files) {
    if (!file.endsWith('.md')) continue;
    
    const filePath = path.join(dir, file);
    const content = await fs.readFile(filePath, 'utf-8');
    const { data, body } = parseFrontmatter(content);
    
    // Parse slug from filename e.g. "2026-06-11-what-is-ai-support-chatbot-rag.md" -> "what-is-ai-support-chatbot-rag"
    const slug = file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');
    const publishedAt = data.date ? new Date(data.date).toISOString() : new Date().toISOString();
    
    console.log(`Syncing blog post: ${slug}...`);
    
    const { error } = await supabase.from('blog_posts').upsert({
      slug,
      title: data.title,
      excerpt: data.description || null,
      content: body,
      category: data.category || null,
      tags: data.tags || [],
      cover_image: data.image || null,
      published: true,
      published_at: publishedAt,
      seo_title: data.title,
      seo_description: data.description || null
    }, { onConflict: 'slug' });
    
    if (error) {
      console.error(`[Error] Failed to sync blog post ${slug}:`, error.message);
    } else {
      console.log(`[Success] Synced blog post ${slug}!`);
    }
  }
}

async function syncPortfolio() {
  console.log('--- Syncing Portfolio Case Studies ---');
  const dir = './src/content/portfolio';
  const files = await fs.readdir(dir);
  
  for (let file of files) {
    if (!file.endsWith('.md')) continue;
    
    const filePath = path.join(dir, file);
    const content = await fs.readFile(filePath, 'utf-8');
    const { data, body } = parseFrontmatter(content);
    
    const slug = data.slug || file.replace(/\.md$/, '');
    
    console.log(`Syncing portfolio case study: ${slug}...`);
    
    const { error } = await supabase.from('portfolio').upsert({
      slug,
      title: data.title,
      client_type: data.category || null,
      description: data.description || null,
      content: body,
      tech_stack: data.techStack || data.tech || [],
      outcome: data.result || null,
      cover_image: data.image || null,
      published: true,
      sort_order: 0
    }, { onConflict: 'slug' });
    
    if (error) {
      console.error(`[Error] Failed to sync portfolio case study ${slug}:`, error.message);
    } else {
      console.log(`[Success] Synced portfolio case study ${slug}!`);
    }
  }
}

async function syncDemos() {
  console.log('--- Syncing Demos ---');
  const dir = './src/content/demos';
  const files = await fs.readdir(dir);
  
  for (let file of files) {
    if (!file.endsWith('.md')) continue;
    
    const filePath = path.join(dir, file);
    const content = await fs.readFile(filePath, 'utf-8');
    const { data } = parseFrontmatter(content);
    
    const slug = data.slug || file.replace(/\.md$/, '');
    
    console.log(`Syncing demo: ${slug}...`);
    
    const { error } = await supabase.from('demos').upsert({
      slug,
      title: data.title,
      description: data.description || null,
      demo_url: data.demo_url || null,
      cover_image: data.image || null,
      published: true
    }, { onConflict: 'slug' });
    
    if (error) {
      console.error(`[Error] Failed to sync demo ${slug}:`, error.message);
    } else {
      console.log(`[Success] Synced demo ${slug}!`);
    }
  }
}

async function syncResources() {
  console.log('--- Syncing Resources ---');
  const dir = './src/content/resources';
  const files = await fs.readdir(dir);
  
  for (let file of files) {
    if (!file.endsWith('.mdx')) continue;
    
    const filePath = path.join(dir, file);
    const content = await fs.readFile(filePath, 'utf-8');
    const { data } = parseFrontmatter(content);
    
    const slug = file.replace(/\.mdx$/, '');
    
    const lockedPath = data.lockedContentFile;
    if (!lockedPath) continue;
    
    const fullLockedPath = path.join(process.cwd(), lockedPath);
    let lockedContent = '';
    try {
      lockedContent = await fs.readFile(fullLockedPath, 'utf-8');
    } catch (err) {
      console.error(`[Error] Failed to read locked content at ${fullLockedPath}:`, err);
      continue;
    }
    
    console.log(`Syncing resource: ${slug}...`);
    
    const { error } = await supabase.from('resources').upsert({
      slug,
      title: data.title,
      category: data.category,
      target_service_tag: data.targetServiceTag,
      description: data.description,
      premium: data.premium ?? true,
      download_url: data.downloadUrl || null,
      bullet_points: data.bulletPoints || [],
      preview_image: data.previewImage || null,
      estimated_value: data.estimatedValue || null,
      teaser_points: data.teaserPoints || [],
      table_of_contents: data.tableOfContents || [],
      locked_content: lockedContent,
      published: true
    }, { onConflict: 'slug' });
    
    if (error) {
      console.error(`[Error] Failed to sync resource ${slug}:`, error.message);
    } else {
      console.log(`[Success] Synced resource ${slug}!`);
    }
  }
}

async function run() {
  try {
    await syncBlogPosts();
    await syncPortfolio();
    await syncDemos();
    await syncResources();
    console.log('All local content synchronized to Supabase successfully!');
  } catch (err) {
    console.error('Fatal execution error during content sync:', err);
    process.exit(1);
  }
}

run();
