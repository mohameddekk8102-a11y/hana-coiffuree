
import React from 'react';
import { ServiceItem, PortfolioItem } from './types';
import { Scissors, Sparkles, Heart } from 'lucide-react';

export const SERVICES: ServiceItem[] = [
  // Capillaire
  { id: '1', name: 'Balayage Signature', price: 'À partir de 15.000 DJF', description: 'Technique française pour un éclat naturel et sur-mesure.', category: 'capillaire' },
  { id: '2', name: 'Tresses Complexes', price: '8.000 DJF', description: 'Artisanat éthiopien traditionnel revisité avec modernité.', category: 'capillaire' },
  { id: '3', name: 'Coloration Haute Couture', price: '12.000 DJF', description: 'Pigmentations riches pour une brillance absolue.', category: 'capillaire' },
  // Institut
  { id: '4', name: 'Soin Visage Éclat', price: '10.000 DJF', description: 'Nettoyage profond et hydratation intense.', category: 'institut' },
  { id: '5', name: 'Manucure Royale', price: '6.000 DJF', description: 'Soin complet des mains avec pose de vernis prestige.', category: 'institut' },
  // Détente
  { id: '6', name: 'Massage Éthiopien', price: '18.000 DJF', description: 'Rituel ancestral aux huiles essentielles pour une relaxation profonde.', category: 'detente' },
  { id: '7', name: 'Hammam Privé', price: '15.000 DJF', description: 'Soin vapeur et gommage traditionnel au savon noir.', category: 'detente' },
];

export const PORTFOLIO: PortfolioItem[] = [
  { id: 'p1', title: 'Balayage Honey Gold', imageUrl: 'https://picsum.photos/seed/hair1/800/1000', category: 'Couleur' },
  { id: 'p2', title: 'Habesha Braids', imageUrl: 'https://picsum.photos/seed/hair2/800/1000', category: 'Tresses' },
  { id: 'p3', title: 'Chignon Mariage', imageUrl: 'https://picsum.photos/seed/hair3/800/1000', category: 'Prestige' },
  { id: 'p4', title: 'Platinum Bob', imageUrl: 'https://picsum.photos/seed/hair4/800/1000', category: 'Coupe' },
  { id: 'p5', title: 'Goddess Locs', imageUrl: 'https://picsum.photos/seed/hair5/800/1000', category: 'Tresses' },
  { id: 'p6', title: 'Coloration Magenta', imageUrl: 'https://picsum.photos/seed/hair6/800/1000', category: 'Couleur' },
];

export const NAV_LINKS = [
  { id: 'home', label: 'Salon', icon: <Scissors className="w-5 h-5" /> },
  { id: 'services', label: 'Services', icon: <Sparkles className="w-5 h-5" /> },
  { id: 'portfolio', label: 'Galerie', icon: <Heart className="w-5 h-5" /> },
  { id: 'about', label: 'Héritage', icon: <Sparkles className="w-5 h-5" /> },
  { id: 'contact', label: 'Contact', icon: <Sparkles className="w-5 h-5" /> },
];
