
export interface ServiceItem {
  id: string;
  name: string;
  price: string;
  description: string;
  category: 'capillaire' | 'institut' | 'detente';
}

export interface PortfolioItem {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
}

export enum Page {
  Home = 'home',
  Services = 'services',
  About = 'about',
  Portfolio = 'portfolio',
  Contact = 'contact'
}
