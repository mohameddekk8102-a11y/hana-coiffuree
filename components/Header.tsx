
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  onNavClick: (id: string) => void;
  activeSection: string;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavClick, activeSection, theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-4 ${isScrolled ? 'glass py-3' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center cursor-pointer"
          onClick={() => onNavClick('home')}
        >
          <img
            src="/Logo.svg"
            alt="Hana Coiffure"
            className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-all"
          />
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavClick(link.id)}
              className={`text-xs font-bold tracking-widest uppercase transition-colors hover:text-hana-magenta ${activeSection === link.id ? 'text-hana-magenta' : 'text-hana-text'
                }`}
            >
              {link.label}
            </button>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${theme === 'dark'
              ? 'border-hana-magenta shadow-[0_0_10px_rgba(177,30,118,0.4)] text-hana-magenta'
              : 'border-hana-magenta shadow-sm text-hana-magenta bg-white/50'
              }`}
            title={theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre'}
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Action Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-hana-magenta text-white px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-lg shadow-hana-magenta/20"
            onClick={() => onNavClick('contact')}
          >
            Réserver
          </motion.button>
        </nav>

        {/* Action Button (Mobile Toggle Helper) */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={onToggleTheme}
            className="w-10 h-10 rounded-full border-2 border-hana-magenta flex items-center justify-center text-hana-magenta transition-all"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
