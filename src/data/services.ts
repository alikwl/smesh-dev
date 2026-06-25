export interface Service {
  title: string;
  slug: string;
  icon: string;
  audience: string[];
  short: string;
  description: string;
  cta: string;
  banner: string;
}

export const services: Service[] = [
  {
    title: 'WhatsApp Automation',
    slug: 'whatsapp-automation',
    icon: 'message-square',
    audience: ['local-pk', 'automation'],
    short: 'Auto replies, order collection, menu catalogs, and n8n lead log reminders.',
    description: 'Build interactive WhatsApp order and customer query flows that reply 24/7 without manual effort.',
    cta: 'Automate My WhatsApp',
    banner: '/assets/images/whatsapp-phone-mockup.png'
  },
  {
    title: 'AI Support Chatbots',
    slug: 'ai-support-chatbots',
    icon: 'bot',
    audience: ['international', 'ai', 'automation'],
    short: 'RAG chatbots trained on your business docs, FAQs, and site content.',
    description: 'Improve support capacity with custom AI chatbots grounded in your facts, featuring human handoff.',
    cta: 'Build My Chatbot',
    banner: '/assets/images/ai-network-illustration.png'
  },
  {
    title: 'Business Websites',
    slug: 'business-websites',
    icon: 'globe',
    audience: ['local-pk', 'international', 'website'],
    short: 'Fast Astro and Next.js websites, landing pages, and SEO-ready setups.',
    description: 'Professional, clean, credibility-building websites that convert visitors and load instantly.',
    cta: 'Build My Website',
    banner: '/assets/images/website-mockup-illustration.png'
  },
  {
    title: 'Workflow & n8n Automation',
    slug: 'workflow-automation',
    icon: 'git-branch',
    audience: ['international', 'automation'],
    short: 'Connect Gmail, Stripe, Google Sheets, Supabase, and Slack seamlessly.',
    description: 'Eliminate repetitive tasks by building custom webhooks and robust automation workflows with n8n.',
    cta: 'Automate My Workflows',
    banner: '/assets/images/automation-workflow-illustration.png'
  },
  {
    title: 'Appointment Booking Systems',
    slug: 'appointment-booking',
    icon: 'calendar',
    audience: ['local-pk', 'automation'],
    short: 'Self-service online booking with calendar sync and SMS/WhatsApp alerts.',
    description: 'Let clients book slots online. Automatically update Google Calendar and trigger confirmation alerts.',
    cta: 'Setup My Booking System',
    banner: '/assets/images/calendar-booking-mockup.png'
  },
  {
    title: 'SaaS & MVP Development',
    slug: 'saas-mvp-development',
    icon: 'layers',
    audience: ['international', 'saas'],
    short: 'Build your web application prototype with auth, databases, and billing.',
    description: 'Fast-track your SaaS launch with a functional MVP using Supabase, Next.js or static frontends.',
    cta: 'Launch My MVP',
    banner: '/assets/images/saas-dashboard-illustration.png'
  },
  {
    title: 'Dashboards & Internal Tools',
    slug: 'dashboards-internal-tools',
    icon: 'layout',
    audience: ['local-pk', 'international', 'dashboards'],
    short: 'Custom database views, analytics charts, and operational controls.',
    description: 'Centralize your business ops with clean, fast internal dashboards connecting all your tool data.',
    cta: 'Build My Dashboard',
    banner: '/assets/images/saas-dashboard-illustration.png'
  },
  {
    title: 'POS & Inventory Systems',
    slug: 'pos-inventory-systems',
    icon: 'shopping-bag',
    audience: ['local-pk', 'dashboards'],
    short: 'Stock tracking, barcode/IMEI logic, customer ledgers, and profit reports.',
    description: 'Run your shop smoothly with custom web-based POS and stock tracking systems made for Pakistan\'s market.',
    cta: 'Setup My POS System',
    banner: '/assets/images/saas-dashboard-illustration.png'
  },
  {
    title: 'Social Media & Lead Automation',
    slug: 'social-media-lead-automation',
    icon: 'megaphone',
    audience: ['local-pk', 'automation'],
    short: 'Automated response to DMs, lead sync to CRM, and custom landing pages.',
    description: 'Capture social media leads instantly and follow up automatically without leaving them waiting.',
    cta: 'Automate My Lead Gen',
    banner: '/assets/images/social-media-illustration.png'
  },
  {
    title: 'SEO, AIO & GEO Setup',
    slug: 'seo-aio-geo-content',
    icon: 'search',
    audience: ['local-pk', 'international', 'website'],
    short: 'Make your site search-friendly for humans and AI engines (ChatGPT/Gemini).',
    description: 'Future-proof your business by optimizing copy, answers, schema, and page speed for generative search engines.',
    cta: 'Optimize My Site',
    banner: '/assets/images/website-mockup-illustration.png'
  },
  {
    title: 'Chrome Extensions',
    slug: 'chrome-extensions',
    icon: 'chrome',
    audience: ['international', 'automation'],
    short: 'Custom browser tools to automate data scraping, CRM updates, and clicks.',
    description: 'Automate browser workflows, extract structured tables, or build tools directly integrated into your daily workspace.',
    cta: 'Build My Extension',
    banner: '/assets/images/chrome-extension-illustration.png'
  }
];
