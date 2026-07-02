import { createClient } from '@supabase/supabase-js';
import fs from 'node:fs';
try {
  process.loadEnvFile();
} catch (e) {}

const supabaseUrl = process.env.SUPABASE_URL || process.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY || process.env.PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const targetId = '1c81f63b-8808-4548-9d66-081850911fd7';

const seoTitle = 'WhatsApp Automation for Local Shops | Smesh.Dev';
const metaTitle = 'WhatsApp Automation: Save Hours & Scale Local Shops';
const seoDescription = 'Stop wasting hours manually replying to WhatsApp chats. Discover how an automated n8n and Supabase system secures checkouts, tracks orders, and scales sales.';
const metaDescription = 'Stop wasting hours manually replying to WhatsApp chats. Discover how an automated n8n and Supabase system secures checkouts, tracks orders, and scales sales.';
const excerpt = 'Stop wasting hours manually replying to WhatsApp chats. Discover how local retail shops and service businesses use the official WhatsApp Business Cloud API, n8n, and Supabase to automate checkouts, sync inventory in real time, and scale revenue without hiring more support agents.';

const faqSchema = [
  {
    "question": "What is the cost of setting up custom WhatsApp automation?",
    "answer": "Smesh.dev custom n8n + Supabase pipelines start at $1,500, depending on systems complexity. Since there are no recurring per-message software markup fees like ManyChat or Zapier, the setup pays for itself in under 90 days."
  },
  {
    "question": "Is my WhatsApp number at risk of getting banned by Meta?",
    "answer": "No. We route all workflows exclusively through the Official WhatsApp Business Cloud API. Unlike unofficial browser-scraping tools, this official route is 100% compliant with Meta's terms, ensuring zero risk of number suspensions."
  },
  {
    "question": "Can this integrate with my existing Shopify or custom e-commerce store?",
    "answer": "Yes. n8n acts as an orchestrator, connecting the WhatsApp API to Shopify, WooCommerce, Stripe, or any custom Supabase database via webhooks and REST APIs."
  },
  {
    "question": "How does the system handle complex customer queries that the bot cannot answer?",
    "answer": "When the bot detects a query it cannot resolve, or if a customer requests human help, n8n flags the status in Supabase and instantly routes the chat to your live agents via Slack or a custom dashboard (like Chatwoot)."
  }
];

async function update() {
  console.log("Reading content from scratch/new-blog-content.md...");
  const content = fs.readFileSync('scratch/new-blog-content.md', 'utf8');
  
  console.log("Updating article in Supabase...");
  const { data, error } = await supabase
    .from('blog_posts')
    .update({
      seo_title: seoTitle,
      meta_title: metaTitle,
      seo_description: seoDescription,
      meta_description: metaDescription,
      excerpt: excerpt,
      content: content,
      faq_schema: faqSchema
    })
    .eq('id', targetId);
    
  if (error) {
    console.error("Error updating Supabase:", error);
  } else {
    console.log("Supabase blog post successfully updated!");
  }
}
update();
