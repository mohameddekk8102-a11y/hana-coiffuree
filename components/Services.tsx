
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES } from '../constants';
import { Scissors, Sparkles, Heart } from 'lucide-react';

const CATEGORIES = [
  { id: 'capillaire', label: 'Capillaire', icon: Scissors },
  { id: 'institut', label: 'Institut', icon: Sparkles },
  { id: 'detente', label: 'Détente', icon: Heart },
];

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('capillaire');

  const filteredServices = SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-hana-bg relative overflow-hidden transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-hana-magenta tracking-widest uppercase text-xs mb-4 font-bold"
          >
            Notre Menu de Prestige
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl text-hana-text mb-12"
          >
            Le Rituel Hana
          </motion.h2>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-full border transition-all duration-500 ${isActive
                      ? 'bg-hana-magenta border-hana-magenta text-white shadow-xl shadow-hana-magenta/20'
                      : 'border-hana-border-ui text-hana-text-sec hover:border-hana-magenta/50 hover:text-hana-magenta'
                    }`}
                >
                  <Icon size={18} />
                  <span className="text-sm font-bold tracking-widest uppercase">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-hana-card p-8 rounded-3xl group hover:border-hana-magenta/50 border border-hana-border-ui transition-all duration-500 shadow-sm"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-hana-magenta/10 rounded-2xl flex items-center justify-center text-hana-magenta group-hover:bg-hana-magenta group-hover:text-white transition-all duration-500">
                    <Sparkles size={20} />
                  </div>
                  <span className="text-hana-magenta font-serif italic text-lg font-bold">{service.price}</span>
                </div>
                <h3 className="text-xl font-bold text-hana-text mb-3 font-serif">{service.name}</h3>
                <p className="text-hana-text-sec text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <button className="text-hana-magenta text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-2 group-hover:gap-4 transition-all">
                  Réserver <span>→</span>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;
