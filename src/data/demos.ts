export interface Demo {
  title: string;
  slug: string;
  category: string;
  description: string;
  tech: string[];
  is_interactive: boolean;
  action_text: string;
}

export const demos: Demo[] = [
  {
    title: 'WhatsApp Order System',
    slug: 'whatsapp-order-system',
    category: 'Automation',
    description: 'Experience the interactive WhatsApp ordering bot. Check products, add to cart, and get automatic invoices.',
    tech: ['n8n', 'WhatsApp Sandbox', 'Google Sheets'],
    is_interactive: true,
    action_text: 'Try Order System'
  },
  {
    title: 'AI Support Chatbot',
    slug: 'ai-support-chatbot',
    category: 'AI Chatbot',
    description: 'Test the RAG knowledge chatbot. Ask questions about Smesh.Dev pricing or services and check how it escalates to email.',
    tech: ['n8n', 'OpenAI', 'Vector Search'],
    is_interactive: true,
    action_text: 'Open Demo Widget'
  },
  {
    title: 'Booking Dashboard',
    slug: 'booking-dashboard',
    category: 'Dashboard',
    description: 'A patient appointment dashboard showing booking tables, available time slots, and status lists.',
    tech: ['Tailwind CSS', 'Alpine.js', 'Mock Data'],
    is_interactive: true,
    action_text: 'View Booking Grid'
  },
  {
    title: 'POS & Inventory Dashboard',
    slug: 'pos-inventory-dashboard',
    category: 'Local Business',
    description: 'A retail POS dashboard mockup. Scan test barcodes, track low stock alerts, and generate day reports.',
    tech: ['HTML5', 'CSS Grid', 'Local Storage'],
    is_interactive: true,
    action_text: 'Open POS App'
  },
  {
    title: 'SaaS MVP Dashboard',
    slug: 'saas-mvp-dashboard',
    category: 'SaaS',
    description: 'Demo user dashboard featuring billing plans, database stats, user profiles, and active API usage logs.',
    tech: ['React Layout', 'Tailwind CSS', 'Chart.js Mock'],
    is_interactive: true,
    action_text: 'Open Admin Panel'
  },
  {
    title: 'Lead Capture Workflow',
    slug: 'lead-capture-workflow',
    category: 'Automation',
    description: 'Visualizer of how a contact form submission routes through n8n to Slack, Email, and Google Sheets.',
    tech: ['n8n UI Mock', 'Mermaid.js Flow'],
    is_interactive: true,
    action_text: 'Watch Flow Log'
  }
];
