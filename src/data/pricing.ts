export interface PricingPackage {
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
}

export interface PricingCategory {
  title: string;
  description: string;
  packages: PricingPackage[];
}

export const pricing: Record<string, PricingCategory> = {
  local_pk: {
    title: 'Standard Business Systems',
    description: 'Affordable web development and automation setups optimized for small businesses, local shops, and clinics.',
    packages: [
      {
        name: 'Starter Website',
        price: '$200',
        duration: '3-7 Days',
        description: 'Get your business online and build credibility with clients.',
        features: [
          '5-page business website in Astro',
          'Contact Form to Email',
          'Direct WhatsApp Chat Button',
          'Basic Google Search Listing',
          'Responsive Mobile Design'
        ],
        cta: 'Order Website',
        popular: false
      },
      {
        name: 'Business Automation',
        price: '$450',
        duration: '5-10 Days',
        description: 'Automate leads and stop responding to repetitive questions.',
        features: [
          'Business website plus contact form',
          'WhatsApp Auto-Reply Flow',
          'Google Sheets Order Lead Log',
          'n8n Webhook Integration',
          '1 Month Setup Support'
        ],
        cta: 'Get Automation',
        popular: true
      },
      {
        name: 'Business System Pro',
        price: '$950',
        duration: '2-4 Weeks',
        description: 'A complete system to run your business operations smoothly.',
        features: [
          'Custom POS & Inventory Panel',
          'Customer & Vendor Ledgers',
          'Google Calendar Sync & Alerts',
          'Sales/Profit Reports Page',
          'Ongoing Admin Control Training'
        ],
        cta: 'Schedule Consultation',
        popular: false
      }
    ]
  },
  international: {
    title: 'International Founders & SaaS Builders',
    description: 'Advanced automation, API integrations, and MVP software engineering for worldwide founders.',
    packages: [
      {
        name: 'Landing + Lead System',
        price: '$850',
        duration: '5-7 Days',
        description: 'High-converting modern landing pages with robust backend pipelines.',
        features: [
          'Astro or Next.js landing page',
          'Lead capture webhook to n8n',
          'Notion / Slack / Email sync',
          'Fathom/Google Analytics 4 setup',
          '100% PageSpeed optimization'
        ],
        cta: 'Build Landing Page',
        popular: false
      },
      {
        name: 'AI Workflow Build',
        price: '$1,800',
        duration: '10-15 Days',
        description: 'Leverage LLMs and complex workflow integrations to save ops time.',
        features: [
          'n8n AI Workflow Pipelines',
          'AI support chatbot with RAG',
          'OpenAI / Gemini API routing',
          'Custom webhook connectors',
          'Detailed architecture documentation'
        ],
        cta: 'Get AI Workflow',
        popular: true
      },
      {
        name: 'MVP Developer Sprint',
        price: '$3,500',
        duration: '3-4 Weeks',
        description: 'A functional SaaS prototype ready for users and investors.',
        features: [
          'Next.js React Frontend',
          'Supabase DB & User Auth',
          'Stripe Subscription Checkout',
          'Admin & User Settings Panels',
          'Clear database schema & handover'
        ],
        cta: 'Start MVP Sprint',
        popular: false
      }
    ]
  }
};
