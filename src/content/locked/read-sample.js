import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Supabase URL or Key missing in environment");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function run() {
  const { data, error } = await supabase
    .from('resources')
    .select('*')
    .eq('slug', 'sample-resource')
    .single();

  if (error) {
    console.error("Error fetching resource:", error);
    process.exit(1);
  }

  console.log("=== Database Resource Row ===");
  console.log("ID:", data.id);
  console.log("Slug:", data.slug);
  console.log("Title:", data.title);
  console.log("Premium:", data.premium);
  console.log("Description:", data.description);
  console.log("Locked Content Length:", data.locked_content?.length);
  console.log("Excerpt:", data.excerpt);
}

run();
