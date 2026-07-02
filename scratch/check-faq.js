import { createClient } from '@supabase/supabase-js';
try {
  process.loadEnvFile();
} catch (e) {}

const supabaseUrl = process.env.SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function check() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, title, slug, faq_schema')
    .eq('slug', 'june-2026-google-spam-update-programmatic-seo-recovery')
    .single();
  if (error) {
    console.error(error);
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
}
check();
