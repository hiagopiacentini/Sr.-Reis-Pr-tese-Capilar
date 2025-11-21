import React, { useState } from 'react';
import Section from './ui/Section';
import { MYTHS } from '../constants';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section className="bg-dark-900">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Medos comuns <span className="text-gold-500">& Verdades</span>
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {MYTHS.map((item, index) => (
          <div 
            key={index} 
            className="border border-gray-800 rounded-lg bg-black overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-dark-900 transition-colors"
            >
              <div className="flex items-center gap-4">
                {item.icon && <item.icon className="text-gold-500 w-5 h-5" />}
                <span className="text-white font-semibold text-lg">{item.question}</span>
              </div>
              {openIndex === index ? <Minus className="text-gold-500" /> : <Plus className="text-gray-500" />}
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-gray-800/50">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Faq;