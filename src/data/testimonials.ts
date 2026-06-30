export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  tagline: string;
  category: string;
  metricValue: string;
  metricLabel: string;
  before: string;
  after: string;
  caseStudySlug: string;
  featured?: boolean;
  logoText: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Thomas McKenzie',
    role: 'CEO',
    company: 'RankedRight Ltd',
    quote: 'Smesh.dev really understood our needs as a business and delivered quality advice, support, and software training at every step to help support our...',
    avatar: '/assets/images/thomas-mckenzie.webp',
    tagline: 'RevOps transformation built the engine that led to acquisition by Lansweeper',
    category: 'IT & Cyber Security',
    metricValue: 'Acquired',
    metricLabel: 'By Lansweeper',
    before: 'Unstructured CRM, no scalable sales ops',
    after: 'Automated pipelines, scalable inbound &...',
    caseStudySlug: 'agency-website-automation',
    featured: true,
    logoText: 'RankedRight'
  },
  {
    name: 'Joe Struggles',
    role: 'CMO',
    company: 'Ethixbase',
    quote: 'Smesh.dev assisted us with our marketing automation programme. From the initial onboarding sessions through to ongoing support they have been first...',
    avatar: '/assets/images/joe-struggles.webp',
    tagline: 'CRM overhaul saved 260+ hours/year',
    category: 'Software Development',
    metricValue: '>260',
    metricLabel: 'Hours saved per annum',
    before: '15 manual processes, fragmented CRM',
    after: '3 automated workflows, unified CRM',
    caseStudySlug: 'pos-inventory-demo',
    logoText: 'ETHIXBASE360'
  },
  {
    name: 'Denise Parmer',
    role: 'COO',
    company: 'Pattrn Data',
    quote: 'As a result of Smesh.dev\'s work we secured a 6-figure contract with a new customer. Their consultancy was first class, and the team consistently went the extra...',
    avatar: '/assets/images/denise-parmer.webp',
    tagline: 'AI chatbot development secured a 6-figure contract',
    category: 'Business Consulting & Services',
    metricValue: '6-Figure',
    metricLabel: 'Contract secured',
    before: 'Manual customer service, high support burden',
    after: 'Intelligent chatbot, automated knowledge...',
    caseStudySlug: 'ai-support-rag-demo',
    logoText: 'PATTRN'
  }
];
