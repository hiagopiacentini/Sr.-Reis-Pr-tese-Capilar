import React from 'react';
import Section from './ui/Section';
import { BENEFITS } from '../constants';

const Benefits = () => {
  return (
    <Section className="bg-gradient-to-b from-dark-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Por que usar? <br className="md:hidden" />
            <span className="text-gold-500">Conheça os benefícios</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BENEFITS.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-start gap-6 p-8 bg-dark-900/50 rounded-2xl border border-gray-800 hover:border-gold-500/30 hover:bg-dark-900 transition-all duration-300"
            >
              <div className="bg-gold-500/10 p-4 rounded-full">
                <benefit.icon className="w-8 h-8 text-gold-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-2xl font-serif italic text-white opacity-80">"Você volta a sorrir para o espelho."</p>
        </div>
      </div>
    </Section>
  );
};

export default Benefits;