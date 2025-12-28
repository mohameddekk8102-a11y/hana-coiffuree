
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-hana-bg transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-hana-magenta opacity-30" />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative z-10"
          >
            <img
              src="https://picsum.photos/seed/hana-portrait/800/1000"
              className="rounded-[3rem] w-full aspect-[4/5] object-cover shadow-2xl border-4 border-hana-card"
              alt="Hana Portrait"
            />
          </motion.div>
          <div className="absolute -bottom-8 -right-8 glass p-8 rounded-2xl z-20 shadow-xl">
            <p className="font-serif text-4xl text-hana-magenta mb-1 font-bold">10+</p>
            <p className="text-hana-text text-[10px] tracking-widest uppercase font-bold">Années d'Excellence</p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-hana-magenta tracking-widest uppercase text-xs mb-4 font-bold"
          >
            L'Héritage d'une Passion
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl text-hana-text mb-8 leading-tight"
          >
            De Paris à Djibouti : <br />
            <span className="text-hana-magenta italic">L'Odyssée de Hana</span>
          </motion.h2>

          <div className="space-y-6 text-hana-text-sec leading-relaxed text-lg font-light transition-colors">
            <p>
              Formée dans les plus prestigieuses académies de coiffure en France, Hana a rapporté avec elle en 2013 un savoir-faire unique : la précision du geste français alliée à la richesse ancestrale des soins éthiopiens.
            </p>
            <p>
              Situé stratégiquement sur la Route de l'Aéroport, notre salon est devenu l'adresse incontournable pour les familles de diplomates, les militaires et la clientèle locale la plus exigeante.
            </p>
            <div className="pt-8 grid grid-cols-2 gap-8">
              <div className="p-4 border-l-2 border-hana-magenta/20">
                <h4 className="text-hana-magenta font-bold uppercase text-[10px] tracking-widest mb-2">Diplôme</h4>
                <p className="text-hana-text text-sm font-semibold">Formation Haute Coiffure Parisienne</p>
              </div>
              <div className="p-4 border-l-2 border-hana-magenta/20">
                <h4 className="text-hana-magenta font-bold uppercase text-[10px] tracking-widest mb-2">Engagement</h4>
                <p className="text-hana-text text-sm font-semibold">Produits Premium & Hygiène Irréprochable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
