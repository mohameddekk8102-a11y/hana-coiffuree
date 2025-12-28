
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-hana-bg-sec border-t border-hana-glass-border transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <img 
            src="Logo Hana.png" 
            alt="Hana Coiffure" 
            className="h-10 w-auto object-contain"
          />
          <span className="font-serif tracking-widest text-hana-text uppercase font-bold transition-colors">Hana Coiffure</span>
        </div>
        
        <p className="text-hana-text-sec text-[10px] tracking-widest uppercase font-bold opacity-50">
          &copy; {new Date().getFullYear()} Hana Coiffure Djibouti. Tous droits réservés.
        </p>
        
        <div className="flex gap-8 text-[10px] tracking-widest uppercase text-hana-magenta/70 font-bold">
          <a href="#" className="hover:text-hana-magenta transition-colors">Confidentialité</a>
          <a href="#" className="hover:text-hana-magenta transition-colors">Mentions Légales</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
