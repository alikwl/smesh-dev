import { createClient } from '@supabase/supabase-js';
try {
  process.loadEnvFile();
} catch (e) {}

const supabaseUrl = process.env.SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function search() {
  console.log("Searching for articles related to WhatsApp Automation...");
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, slug, title, excerpt, content, category, tags, faq_schema')
    .or('slug.ilike.%whatsapp%,title.ilike.%whatsapp%');
    
  if (error) {
    console.error("Error searching Supabase:", error);
    return;
  }
  
  console.log(`Found ${data.length} matches:`);
  for (const row of data) {
    console.log(`- ID: ${row.id}, Slug: ${row.slug}, Title: ${row.title}`);
  }
  
  if (data.length > 0) {
    import('node:fs').then(fs => {
      fs.writeFileSync('scratch/found-post.json', JSON.stringify(data[0], null, 2));
      console.log("Written first match to scratch/found-post.json");
    });
  }
}
search();
