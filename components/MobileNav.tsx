
import React from 'react';
import { NAV_LINKS } from '../constants';
import { Phone, MapPin } from 'lucide-react';

interface MobileNavProps {
  onNavClick: (id: string) => void;
  activeSection: string;
}

const MobileNav: React.FC<MobileNavProps> = ({ onNavClick, activeSection }) => {
  return (
    <div className="md:hidden fixed bottom-6 left-6 right-6 z-[60]">
      <div className="glass p-2 rounded-full flex items-center justify-between shadow-2xl">
        <button 
          onClick={() => onNavClick('home')}
          className={`flex-1 flex flex-col items-center py-2 transition-colors ${
            activeSection === 'home' ? 'text-hana-magenta' : 'text-hana-text/50'
          }`}
        >
          {NAV_LINKS[0].icon}
          <span className="text-[8px] uppercase tracking-tighter mt-1 font-bold">Salon</span>
        </button>
        <button 
          onClick={() => onNavClick('services')}
          className={`flex-1 flex flex-col items-center py-2 transition-colors ${
            activeSection === 'services' ? 'text-hana-magenta' : 'text-hana-text/50'
          }`}
        >
          {NAV_LINKS[1].icon}
          <span className="text-[8px] uppercase tracking-tighter mt-1 font-bold">Soin</span>
        </button>
        
        {/* Central Call Action */}
        <a 
          href="tel:+25377872368"
          className="bg-hana-magenta text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg -mt-10 border-4 border-hana-bg transition-colors duration-500"
        >
          <Phone size={24} />
        </a>

        <button 
          onClick={() => onNavClick('portfolio')}
          className={`flex-1 flex flex-col items-center py-2 transition-colors ${
            activeSection === 'portfolio' ? 'text-hana-magenta' : 'text-hana-text/50'
          }`}
        >
          {NAV_LINKS[2].icon}
          <span className="text-[8px] uppercase tracking-tighter mt-1 font-bold">Galerie</span>
        </button>
        <button 
          onClick={() => onNavClick('contact')}
          className={`flex-1 flex flex-col items-center py-2 transition-colors ${
            activeSection === 'contact' ? 'text-hana-magenta' : 'text-hana-text/50'
          }`}
        >
          <MapPin size={20} />
          <span className="text-[8px] uppercase tracking-tighter mt-1 font-bold">Lieu</span>
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
