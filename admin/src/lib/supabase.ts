import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Auth helpers
export async function getSession() {
  const { data: { session } } = await supabase.auth.getSession();
  return session;
}

export async function signInWithMagicLink(email: string) {
  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: 'https://admin.smesh.dev/dashboard'
    }
  });
  return { error };
}

export async function signOut() {
  await supabase.auth.signOut();
  window.location.href = '/login';
}

// Blog CRUD
export async function getBlogs() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id, slug, title, published, published_at, category, updated_at')
    .order('updated_at', { ascending: false });
  return { data, error };
}

export async function getBlog(id: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .single();
  return { data, error };
}

export async function saveBlog(blog: any, id?: string) {
  if (id) {
    return await supabase.from('blog_posts').update({ ...blog, updated_at: new Date().toISOString() }).eq('id', id);
  }
  return await supabase.from('blog_posts').insert([{ ...blog, updated_at: new Date().toISOString() }]);
}

export async function deleteBlog(id: string) {
  return await supabase.from('blog_posts').delete().eq('id', id);
}

// Resources CRUD
export async function getResources() {
  const { data, error } = await supabase
    .from('resources')
    .select('id, slug, title, published, category, updated_at')
    .order('updated_at', { ascending: false });
  return { data, error };
}

export async function getResource(id: string) {
  const { data, error } = await supabase
    .from('resources')
    .select('*')
    .eq('id', id)
    .single();
  return { data, error };
}

export async function saveResource(resource: any, id?: string) {
  if (id) {
    return await supabase.from('resources').update({ ...resource, updated_at: new Date().toISOString() }).eq('id', id);
  }
  return await supabase.from('resources').insert([{ ...resource, updated_at: new Date().toISOString() }]);
}

export async function deleteResource(id: string) {
  return await supabase.from('resources').delete().eq('id', id);
}

// Portfolio CRUD
export async function getPortfolios() {
  const { data, error } = await supabase
    .from('portfolio')
    .select('id, slug, title, published, sort_order, updated_at')
    .order('sort_order', { ascending: true });
  return { data, error };
}

export async function getPortfolio(id: string) {
  const { data, error } = await supabase
    .from('portfolio')
    .select('*')
    .eq('id', id)
    .single();
  return { data, error };
}

export async function savePortfolio(item: any, id?: string) {
  if (id) {
    return await supabase.from('portfolio').update({ ...item, updated_at: new Date().toISOString() }).eq('id', id);
  }
  return await supabase.from('portfolio').insert([{ ...item, updated_at: new Date().toISOString() }]);
}

// Leads — read only
export async function getLeads() {
  const { data: leads } = await supabase
    .from('resource_leads')
    .select('*')
    .order('unlocked_at', { ascending: false });
  const { data: contacts } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('submitted_at', { ascending: false });
  return { leads, contacts };
}

// GitHub deploy trigger
export async function triggerDeploy() {
  const pat = import.meta.env.PUBLIC_GITHUB_PAT;
  const repo = import.meta.env.PUBLIC_GITHUB_REPO;
  const res = await fetch(`https://api.github.com/repos/${repo}/dispatches`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${pat}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ event_type: 'supabase-content-updated' })
  });
  return res.ok;
}
