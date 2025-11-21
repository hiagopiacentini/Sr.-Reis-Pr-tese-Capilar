import React from 'react';
import Section from './ui/Section';
import { Smile, Activity, EyeOff } from 'lucide-react';

const WhatIsIt = () => {
  return (
    <Section className="bg-black-950">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 [text-wrap:balance]">
          O que é uma <span className="text-gold-500">Prótese Capilar?</span>
        </h2>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
          Esqueça o que você ouviu sobre "perucas". Estamos falando de uma tecnologia 
          avançada de reposição capilar não-cirúrgica.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-dark-900 p-8 rounded-xl border border-gray-800 hover:border-gold-500/50 transition-all group">
          <Activity className="w-12 h-12 text-gold-500 mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-white mb-3">Vida 100% Normal</h3>
          <p className="text-gray-400 text-sm">
            Você pode treinar, nadar, trabalhar e viajar. A fixação é resistente e segura.
          </p>
        </div>

        <div className="bg-dark-900 p-8 rounded-xl border border-gray-800 hover:border-gold-500/50 transition-all group">
          <Smile className="w-12 h-12 text-gold-500 mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-white mb-3">Cabelo Natural</h3>
          <p className="text-gray-400 text-sm">
            Fios 100% humanos injetados em uma micropele que imita seu couro cabeludo.
          </p>
        </div>

        <div className="bg-dark-900 p-8 rounded-xl border border-gray-800 hover:border-gold-500/50 transition-all group">
          <EyeOff className="w-12 h-12 text-gold-500 mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-bold text-white mb-3">Imperceptível</h3>
          <p className="text-gray-400 text-sm">
            Ninguém consegue perceber. A transição entre a prótese e seu cabelo é invisível.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default WhatIsIt;