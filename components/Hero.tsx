
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC<{ onReserve: () => void }> = ({ onReserve }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-hana-bg transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-hana-magenta/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-hana-magenta/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-hana-magenta tracking-[0.4em] uppercase text-xs mb-4 font-bold"
          >
            L'Éclat de l'Abyssinie, le Chic de Paris
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 text-hana-text"
          >
            Révélez votre <br />
            <span className="text-hana-magenta italic">Majesté</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-hana-text-sec max-w-lg text-lg mb-10 leading-relaxed font-light transition-colors"
          >
            Hana Coiffure fusionne l'expertise coloriste française et l'authenticité des soins éthiopiens pour une expérience beauté incomparable à Djibouti.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={onReserve}
              className="magenta-gradient text-white px-8 py-4 rounded-full font-bold tracking-widest uppercase text-sm hover:shadow-2xl hover:shadow-hana-magenta/40 transition-all"
            >
              Réserver mon instant beauté
            </button>
            <button className="border border-hana-magenta/30 text-hana-text px-8 py-4 rounded-full font-bold tracking-widest uppercase text-sm hover:bg-hana-magenta/5 transition-all">
              Découvrir nos soins
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 flex items-center gap-6"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i}
                  src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                  className="w-12 h-12 rounded-full border-2 border-hana-card"
                  alt="Client"
                />
              ))}
              <div className="w-12 h-12 rounded-full bg-hana-magenta flex items-center justify-center border-2 border-hana-card text-white text-[10px] font-bold">
                500+
              </div>
            </div>
            <div className="text-sm">
              <div className="flex text-hana-magenta mb-1">
                {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <p className="text-hana-text-sec text-xs">Plus de 500 clientes satisfaites</p>
            </div>
          </motion.div>
        </div>

        {/* Image Display */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative z-10 w-full aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-hana-glass-border shadow-2xl"
          >
            <img 
              src="https://picsum.photos/seed/salon-hero/800/1000" 
              className="w-full h-full object-cover"
              alt="Hana Coiffure Salon"
            />
            {/* Removed the hardcoded dark gradient overlay to allow light through in light mode */}
            <div className="absolute inset-0 bg-gradient-to-t from-hana-bg/40 via-transparent to-transparent opacity-60 transition-colors duration-500" />
            <div className="absolute bottom-8 left-8">
              <p className="text-hana-magenta font-serif text-3xl italic font-bold">Depuis 2013</p>
              <p className="text-hana-text-sec tracking-widest text-xs uppercase font-bold">Route de l'Aéroport, Djibouti</p>
            </div>
          </motion.div>
          
          {/* Floating Glass Card */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-6 md:-right-12 z-20 glass p-6 rounded-2xl w-56 hidden sm:block shadow-xl"
          >
            <p className="text-hana-magenta font-bold text-lg mb-1">Expertise</p>
            <p className="text-hana-text-sec text-sm leading-snug">Spécialiste du balayage et des tresses protectrices.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
