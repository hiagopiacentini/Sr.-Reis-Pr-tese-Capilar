import React from 'react';
import Section from './ui/Section';
import { STEPS } from '../constants';
import { motion } from 'framer-motion';

const Process = () => {
  return (
    <Section className="bg-dark-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-12 [text-wrap:balance]">
          Como funciona na <span className="text-gold-500">Prática</span>
        </h2>

        {/* Grid responsive: 1 col mobile, 2 cols tablet, 4 cols desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, index) => (
            <motion.div 
              key={step.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-dark-900/50 border border-gray-800 hover:border-gold-500 hover:bg-dark-900 transition-all duration-300 flex flex-col justify-between min-h-[220px]"
            >
              {/* Stylized Number */}
              <div className="absolute top-0 right-4 text-6xl md:text-7xl font-black text-gray-800/50 group-hover:text-gold-500/20 transition-colors duration-300 select-none">
                {String(step.id).padStart(2, '0')}
              </div>
              
              <div className="relative z-10 mt-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors">
                  {step.title}
                </h3>
                <div className="h-1 w-8 bg-gold-500 mb-4 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                <p className="text-gray-300 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Process;