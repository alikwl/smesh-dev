import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://placeholder-project-url.supabase.co', 'placeholder-anon-key');

try {
  console.log("Querying Supabase on invalid domain...");
  const { data, error } = await supabase.from('blog_posts').select('*');
  console.log("Query completed.");
  console.log("Data:", data);
  console.log("Error:", error);
} catch (e) {
  console.error("Query failed with exception:", e);
}
