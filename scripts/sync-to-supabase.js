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

async function run() {
  try {
    const dir = './src/content/resources';
    const files = await fs.readdir(dir);
    
    for (let file of files) {
      if (!file.endsWith('.mdx')) continue;
      
      const filePath = path.join(dir, file);
      const content = await fs.readFile(filePath, 'utf-8');
      const { data } = parseFrontmatter(content);
      
      const slug = file.replace(/\.mdx$/, '');
      
      const lockedPath = data.lockedContentFile;
      if (!lockedPath) {
        console.warn(`[Warn] No lockedContentFile specified for ${file}`);
        continue;
      }
      
      const fullLockedPath = path.join(process.cwd(), lockedPath);
      let lockedContent = '';
      try {
        lockedContent = await fs.readFile(fullLockedPath, 'utf-8');
      } catch (err) {
        console.error(`[Error] Failed to read locked content at ${fullLockedPath}:`, err);
        continue;
      }
      
      console.log(`Syncing ${slug} to Supabase resources table...`);
      
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
        locked_content: lockedContent
      }, { onConflict: 'slug' });
      
      if (error) {
        console.error(`[Error] Failed to sync ${slug}:`, error.message);
      } else {
        console.log(`[Success] Synced ${slug}!`);
      }
    }
  } catch (err) {
    console.error('[Fatal] Execution error:', err);
    process.exit(1);
  }
}

run();
