import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL || import.meta.env.SUPABASE_URL || 'https://placeholder-project-url.supabase.co';
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY || import.meta.env.SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Blog posts
export async function getAllBlogPosts() {
  const { data } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false });
  return data || [];
}

export async function getBlogPost(slug: string) {
  const { data } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();
  return data;
}

// Resources
export async function getAllResources() {
  const { data } = await supabase
    .from('resources')
    .select('*')
    .eq('published', true);
  return data || [];
}

export async function getResource(slug: string) {
  const { data } = await supabase
    .from('resources')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single();
  return data;
}

// Portfolio
export async function getAllPortfolio() {
  const { data } = await supabase
    .from('portfolio')
    .select('*')
    .eq('published', true)
    .order('sort_order', { ascending: true });
  return data || [];
}

// Demos
export async function getAllDemos() {
  const { data } = await supabase
    .from('demos')
    .select('*')
    .eq('published', true);
  return data || [];
}
