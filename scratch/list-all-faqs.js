import { createClient } from '@supabase/supabase-js';
try {
  process.loadEnvFile();
} catch (e) {}

const supabaseUrl = process.env.SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function main() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('slug, title, faq_schema, published');

  if (error) {
    console.error("Error fetching posts:", error);
    return;
  }

  console.log(`Fetched ${data.length} blog posts:`);
  for (const post of data) {
    console.log(`\nSlug: ${post.slug}`);
    console.log(`Title: ${post.title}`);
    console.log(`Published: ${post.published}`);
    console.log(`FAQ Schema Type: ${typeof post.faq_schema}`);
    console.log(`FAQ Schema Raw:`, JSON.stringify(post.faq_schema));
  }
}

main();
