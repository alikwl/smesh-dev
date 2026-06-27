export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  metric: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Liam Sterling',
    role: 'CEO',
    company: 'Sterling Logistics (UK)',
    quote: 'Haider connected our Shopify orders directly to our local carrier API using n8n and Supabase. The automation runs flawlessly 24/7 without any maintenance from our side. It is the best operational upgrade we\'ve done.',
    avatar: 'https://picsum.photos/seed/liam/150/150',
    metric: 'Before: 15 hrs/week manually dispatching → After: 0 hrs (100% automated)',
  },
  {
    name: 'Elena Rostova',
    role: 'Operations Director',
    company: 'Veloce Distribution (Germany)',
    quote: 'Our retail stock checkouts used to freeze during internet outages. Haider built an offline-first POS sync system with SQLite and Supabase. We haven\'t lost a single transaction since.',
    avatar: 'https://picsum.photos/seed/elena/150/150',
    metric: 'Before: 2% transaction loss on offline checkout → After: 0% data loss',
  },
  {
    name: 'Marcus Thorne',
    role: 'Founder',
    company: 'SaaS Engine (USA)',
    quote: 'We needed a custom AI chatbot that could troubleshoot support tickets using our private developer docs. Haider set up a pgvector RAG flow that handles 70% of tickets automatically, leaving only complex cases for our team.',
    avatar: 'https://picsum.photos/seed/marcus/150/150',
    metric: 'Before: 24-hour support ticket response times → After: Instant AI replies',
  },
  {
    name: 'Siddharth Mehta',
    role: 'Co-Founder',
    company: 'RetailPulse (Singapore)',
    quote: 'The direct execution with Haider made a huge difference. He drew out the database triggers, wrote the n8n workflows, and handed over the code to us within three weeks. Outstanding speed.',
    avatar: 'https://picsum.photos/seed/siddharth/150/150',
    metric: 'Before: 6-week agency estimation delay → After: 15-day live handover',
  },
  {
    name: 'Sophia Chen',
    role: 'CEO',
    company: 'Loom & Weave (Australia)',
    quote: 'We were copying leads manually from WhatsApp business chats to our CRM. Haider automated the whole mapping process. Now leads are categorized and follow-ups are triggered instantly.',
    avatar: 'https://picsum.photos/seed/sophia/150/150',
    metric: 'Before: 4-hour delay in lead follow-ups → After: 2-minute automated responses',
  },
];
