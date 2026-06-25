export const portfolioImageMap: Record<string, string> = {
  'whatsapp-order-bot-demo': '/assets/images/whatsapp-phone-mockup.png',
  'ai-support-rag-demo': '/assets/images/ai-network-illustration.png',
  'booking-dashboard-demo': '/assets/images/calendar-booking-mockup.png',
  'agency-website-automation': '/assets/images/website-mockup-illustration.png',
  'pos-inventory-demo': '/assets/images/saas-dashboard-illustration.png',
  'saas-mvp-dashboard-demo': '/assets/images/saas-dashboard-illustration.png',
};

export const getPortfolioImage = (slug: string) => portfolioImageMap[slug] || '/assets/images/placeholder.png';
