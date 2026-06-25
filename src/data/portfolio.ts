export interface PortfolioProject {
  title: string;
  slug: string;
  category: string;
  audience: 'local-pk' | 'international';
  problem: string;
  solution: string;
  tech: string[];
  result: string;
  image: string;
  demo_slug: string;
}

export const portfolio: PortfolioProject[] = [
  {
    title: 'WhatsApp Order Bot for Local Shop',
    slug: 'whatsapp-order-bot-demo',
    category: 'Automation',
    audience: 'local-pk',
    problem: 'Local fabric shop owner was receiving 100+ daily WhatsApp queries about color options, stock levels, and pricing, leading to missed sales and late night work.',
    solution: 'Built a customized n8n automation flow connected to a WhatsApp business API. The bot fetches live catalog items from a Google Sheet, calculates total prices, saves orders, and alerts the owner.',
    tech: ['n8n', 'WhatsApp API', 'Google Sheets'],
    result: 'Saved 4+ hours daily. Zero missed orders. Seamless client experience with instant responses.',
    image: '/assets/images/whatsapp-phone-mockup.png',
    demo_slug: 'whatsapp-order-system'
  },
  {
    title: 'AI Support Chatbot with RAG',
    slug: 'ai-support-rag-demo',
    category: 'AI Chatbots',
    audience: 'international',
    problem: 'A SaaS company was getting repetitive support requests for API endpoints and installation, consuming engineering time.',
    solution: 'Deployed an on-site chat widget powered by a custom LLM grounded on the developer docs vector database (RAG). Created automated handoff workflows to open email tickets.',
    tech: ['OpenAI API', 'Pinecone', 'n8n', 'Website Widget'],
    result: 'Resolved 65% of common developer questions autonomously without escalation.',
    image: '/assets/images/ai-network-illustration.png',
    demo_slug: 'ai-support-chatbot'
  },
  {
    title: 'Booking System Dashboard',
    slug: 'booking-dashboard-demo',
    category: 'SaaS / Internal Tools',
    audience: 'local-pk',
    problem: 'A clinic coordinator was manually managing patient appointments via phone calls and WhatsApp, leading to scheduling double-bookings.',
    solution: 'Built a clean, responsive client-facing booking panel linked directly to the clinic\'s Google Calendar with automated WhatsApp reminder alerts sent 2 hours before slots.',
    tech: ['React', 'Supabase', 'Google Calendar API', 'n8n'],
    result: 'No-show rate dropped by 75%. No scheduling errors. Streamlined receptionist workload.',
    image: '/assets/images/calendar-booking-mockup.png',
    demo_slug: 'booking-dashboard'
  },
  {
    title: 'POS / Inventory Dashboard',
    slug: 'pos-inventory-demo',
    category: 'Dashboards & POS',
    audience: 'local-pk',
    problem: 'A mobile shop owner in Khanewal struggled to track IMEI codes, credit histories of regular customers, and exact profit splits.',
    solution: 'Engineered a custom inventory and point-of-sale system with IMEI lookup, vendor ledgers, cash drawer tracking, and daily Profit/Loss statement generation.',
    tech: ['Next.js', 'Supabase PostgreSQL', 'Tailwind CSS'],
    result: 'Instant credit checks. Absolute clarity on daily profits. Barcode/IMEI scanning support.',
    image: '/assets/images/saas-dashboard-illustration.png',
    demo_slug: 'pos-inventory-dashboard'
  },
  {
    title: 'SaaS MVP Starter Dashboard',
    slug: 'saas-mvp-dashboard-demo',
    category: 'SaaS MVP',
    audience: 'international',
    problem: 'A solo founder wanted to build a micro-SaaS but was stuck writing basic authentication, database relations, and user profiles.',
    solution: 'Delivered a production-ready boilerplate boilerplate containing Tailwind Admin panels, Supabase backend structure, subscription checkout flow, and developer documentation.',
    tech: ['Next.js', 'Supabase', 'Stripe API', 'Vercel'],
    result: 'Launched the core platform in 10 days. Focused exclusively on building unique features.',
    image: '/assets/images/saas-dashboard-illustration.png',
    demo_slug: 'saas-mvp-dashboard'
  },
  {
    title: 'Agency Website + Contact Automation',
    slug: 'agency-website-automation',
    category: 'Websites',
    audience: 'international',
    problem: 'Agency lacked a fast-loading website and leads from their static contact forms were manually copied over to their sales funnel.',
    solution: 'Developed an extremely fast marketing website paired with a custom n8n lead-capture webhook that pushes submissions straight to Notion and Slack.',
    tech: ['Astro', 'n8n', 'Notion API', 'Slack API'],
    result: '99/100 Lighthouse performance. Contact requests routed instantly to sales agents in less than 3 seconds.',
    image: '/assets/images/automation-workflow-illustration.png',
    demo_slug: 'lead-capture-workflow'
  }
];
