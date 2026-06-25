export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: 'How does the WhatsApp order system work?',
    answer: 'When a customer sends a message, our automation replies with a product catalog. The customer chooses their items, and the system logs their order details to a Google Sheet and notifies you via WhatsApp or Email instantly.'
  },
  {
    question: 'Do I need to buy expensive software subscriptions?',
    answer: 'No. We utilize open-source tools like n8n and free tiers of databases (like Supabase) wherever possible to keep monthly operating costs close to zero for small businesses.'
  },
  {
    question: 'How long does a typical project take to deliver?',
    answer: 'Simple landing pages and basic WhatsApp bots take 3 to 7 days. Custom dashboards, inventory portals, or complex AI RAG bots take between 2 to 4 weeks.'
  },
  {
    question: 'What is an AI Support Chatbot with RAG?',
    answer: 'RAG (Retrieval-Augmented Generation) means the AI chatbot answers customer questions using *only* facts from your specific business documents or FAQs. It won\'t make up random info, and if it doesn\'t know, it escalates the chat to your WhatsApp.'
  },
  {
    question: 'Can we modify the systems later?',
    answer: 'Yes. We build with standard systems like Astro, Next.js, and n8n, then hand over clear documentation so your team can keep moving without guesswork.'
  },
  {
    question: 'How do we get started?',
    answer: 'Simply drop me a message on WhatsApp with your business name and what you want to automate. I will suggest the simplest, most cost-effective workflow to start with.'
  }
];
