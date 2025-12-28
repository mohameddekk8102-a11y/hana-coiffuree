
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-hana-bg transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-hana-magenta tracking-widest uppercase text-xs mb-4 font-bold"
            >
              Contact & Accès
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-serif text-4xl md:text-5xl text-hana-text mb-12"
            >
              Le Salon
            </motion.h2>

            <div className="space-y-12">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-hana-magenta/10 flex items-center justify-center text-hana-magenta flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-hana-magenta font-bold text-xs tracking-widest uppercase mb-2">Localisation</h4>
                  <p className="text-hana-text text-xl leading-relaxed font-semibold">
                    Route de l'Aéroport, <br />
                    Face à la base aérienne, Djibouti
                  </p>
                  <button className="text-hana-magenta text-sm mt-4 font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest">
                    Ouvrir dans Maps <span>→</span>
                  </button>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-hana-magenta/10 flex items-center justify-center text-hana-magenta flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="text-hana-magenta font-bold text-xs tracking-widest uppercase mb-2">Horaires</h4>
                  <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-hana-text-sec">
                    <p>Lun - Sam</p> <p className="text-hana-text font-bold">09h00 - 20h00</p>
                    <p>Dimanche</p> <p className="text-hana-text font-bold">10h00 - 18h00</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-full bg-hana-magenta/10 flex items-center justify-center text-hana-magenta flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-hana-magenta font-bold text-xs tracking-widest uppercase mb-2">Réservation Directe</h4>
                  <a href="tel:+25377872368" className="text-hana-text text-2xl font-serif hover:text-hana-magenta transition-colors font-bold">
                    +253 77 87 23 68
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="bg-hana-card p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center shadow-2xl border border-hana-border-ui transition-all duration-500">
            <div className="w-20 h-20 bg-hana-magenta/10 rounded-full flex items-center justify-center text-hana-magenta mb-8">
              <Phone size={40} className="animate-pulse" />
            </div>
            <h3 className="font-serif text-3xl text-hana-text mb-4 font-bold">Prêt pour votre <br /> transformation ?</h3>
            <p className="text-hana-text-sec mb-10 max-w-xs">
              Nos experts vous attendent pour un diagnostic personnalisé.
            </p>
            <a 
              href="tel:+25377872368"
              className="magenta-gradient w-full py-5 rounded-full text-white font-bold tracking-widest uppercase flex items-center justify-center gap-4 shadow-xl shadow-hana-magenta/20"
            >
              Appeler Maintenant
            </a>
            
            <div className="mt-12 flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-hana-border-ui flex items-center justify-center text-hana-magenta hover:text-white hover:bg-hana-magenta transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-hana-border-ui flex items-center justify-center text-hana-magenta hover:text-white hover:bg-hana-magenta transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
