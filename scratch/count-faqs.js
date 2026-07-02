import { createClient } from '@supabase/supabase-js';
try {
  process.loadEnvFile();
} catch (e) {}

const supabaseUrl = process.env.SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function count() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('slug, faq_schema, published')
    .eq('published', true);

  if (error) {
    console.error(error);
  } else {
    let withFaq = 0;
    let withoutFaq = 0;
    for (const post of data) {
      if (post.faq_schema && Array.isArray(post.faq_schema) && post.faq_schema.length > 0) {
        withFaq++;
      } else {
        withoutFaq++;
      }
    }
    console.log(`Total published: ${data.length}`);
    console.log(`With FAQ: ${withFaq}`);
    console.log(`Without FAQ (NULL/Empty): ${withoutFaq}`);
  }
}
count();
