export interface NavItem {
  name: string;
  url: string;
}

export const navigation: NavItem[] = [
  { name: 'Home', url: '/' },
  { name: 'Services', url: '/services/' },
  { name: 'Work', url: '/portfolio/' },
  { name: 'Demos', url: '/demos/' },
  { name: 'Pricing', url: '/pricing/' },
  { name: 'FAQ', url: '/faq/' },
  { name: 'Contact', url: '/contact/' },
];
