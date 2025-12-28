
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO } from '../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-hana-bg-sec transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-hana-magenta tracking-widest uppercase text-xs mb-4 font-bold"
            >
              Exposition Artistique
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl md:text-5xl text-hana-text"
            >
              La Galerie d'Art
            </motion.h2>
          </div>
          <p className="text-hana-text-sec max-w-sm text-sm leading-relaxed">
            Un aperçu de nos créations signatures, du balayage français classique aux tresses Habesha les plus sophistiquées.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {PORTFOLIO.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-3xl border border-hana-glass-border shadow-sm"
            >
              <motion.img
                src={item.imageUrl}
                alt={item.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8 }}
                className="w-full h-auto object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-hana-card/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-8 text-center backdrop-blur-[2px]">
                <p className="text-hana-magenta text-[10px] tracking-widest uppercase mb-2 font-bold">{item.category}</p>
                <h3 className="text-hana-text font-serif text-2xl font-bold">{item.title}</h3>
                <div className="w-12 h-[2px] bg-hana-magenta mt-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
