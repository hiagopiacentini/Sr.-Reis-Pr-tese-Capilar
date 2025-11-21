import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById('historia');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black-950">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Spotlight Gradient Effect (Top to Bottom) */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-dark-900 via-black to-black opacity-100" />
        
        {/* Ambient Gold Glow - Subtle atmosphere */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gold-500/5 blur-[80px] rounded-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-5 text-center md:text-left md:px-12 mt-0 md:mt-16">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gold-500 font-bold tracking-[0.2em] uppercase mb-4 text-xs md:text-sm lg:text-base"
        >
          EXISTE UM NOVO COMEÇO
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          Você não precisa <br/>
          aceitar a <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">calvície</span>.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mb-8 md:mb-10 leading-relaxed font-light"
        >
          <span className="font-semibold text-white">Sr. Reis Prótese Capilar</span> — transformando confiança em autoestima.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center md:justify-start w-full"
        >
          <Button onClick={scrollToNext} className="w-full md:w-auto">
            Quero entender como funciona
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 cursor-pointer hover:text-gold-500 transition-colors"
        onClick={scrollToNext}
      >
        <ChevronDown size={28} className="md:w-8 md:h-8" />
      </motion.div>
    </section>
  );
};

export default Hero;