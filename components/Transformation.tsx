import React, { useState } from 'react';
import Section from './ui/Section';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CASES = [
  {
    id: 1,
    before: "https://i.imgur.com/E2itbb7.jpeg/600/600",
    after: "https://i.imgur.com/obhwppN.jpeg/600/600",
    label: "Rejuvenescimento total"
  },
  {
    id: 2,
    before: "https://i.imgur.com/oHqiquq.jpeg/600/600",
    after: "https://i.imgur.com/rzX1j0y.jpeg/600/600",
    label: "Naturalidade na linha frontal"
  },
  {
    id: 3,
    before: "https://i.imgur.com/tdE2KPM.jpeg/600/600",
    after: "https://i.imgur.com/Cps2LQn.jpeg/600/600",
    label: "Volume e estilo moderno"
  }
];

const Transformation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % CASES.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + CASES.length) % CASES.length);

  return (
    <Section className="bg-dark-900">
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Transformações Reais</h2>
        <p className="text-gray-400 text-sm md:text-base">45 minutos separando um "eu inseguro" de um "eu completo".</p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center">
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={`before-${currentIndex}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="relative w-full sm:w-[80%] md:w-1/2 aspect-square max-w-[400px] rounded-lg overflow-hidden shadow-lg border border-gray-800"
            >
              <div className="absolute top-4 left-4 bg-black/70 px-3 py-1 rounded text-xs font-bold text-gray-300 z-10">ANTES</div>
              <img src={CASES[currentIndex].before} alt="Antes" className="w-full h-full object-cover grayscale" />
            </motion.div>
          </AnimatePresence>

          <div className="hidden md:flex flex-col items-center text-gold-500">
            <ArrowRight size={32} />
          </div>

          <AnimatePresence mode="wait">
             <motion.div 
              key={`after-${currentIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative w-full sm:w-[80%] md:w-1/2 aspect-square max-w-[400px] rounded-lg overflow-hidden shadow-[0_0_30px_rgba(255,230,0,0.2)] border border-gold-500/30"
            >
               <div className="absolute top-4 left-4 bg-gold-500 px-3 py-1 rounded text-xs font-bold text-black z-10">DEPOIS</div>
              <img src={CASES[currentIndex].after} alt="Depois" className="w-full h-full object-cover" />
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="mt-8 text-center">
            <p className="text-xl text-white font-medium mb-6">{CASES[currentIndex].label}</p>
            <div className="flex justify-center gap-6">
                <button onClick={prev} className="p-3 md:p-4 rounded-full border border-gray-700 hover:border-gold-500 hover:text-gold-500 transition-colors bg-dark-950/50 active:scale-95">
                    <ArrowLeft size={24} />
                </button>
                <button onClick={next} className="p-3 md:p-4 rounded-full border border-gray-700 hover:border-gold-500 hover:text-gold-500 transition-colors bg-dark-950/50 active:scale-95">
                    <ArrowRight size={24} />
                </button>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Transformation;