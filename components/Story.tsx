import React from 'react';
import Section from './ui/Section';

const Story = () => {
  return (
    <Section id="historia" className="bg-dark-950 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Por trás do cabelo, <br/>
            <span className="text-gold-500">existe uma vida.</span>
          </h2>
          
          <div className="space-y-4 md:space-y-6 text-gray-400 text-base md:text-lg leading-relaxed border-l-2 border-gold-600/30 pl-4 md:pl-6">
            <p>
              "Todo dia eu atendo homens que chegam cabisbaixos, evitando o espelho. 
              O boné se tornou parte do corpo, não por estilo, mas por esconderijo."
            </p>
            <p>
              "E todo dia eu vejo esses mesmos homens se levantarem diferentes... 
              com brilho nos olhos, com energia, com vida."
            </p>
            <p className="text-white font-semibold italic">
              A prótese capilar não é só cabelo. 
              É sobre voltar a se sentir você.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative h-[300px] sm:h-[400px] md:h-[500px] w-full rounded-lg overflow-hidden shadow-2xl shadow-gold-900/10">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
            <img 
              src="https://i.imgur.com/NBDf2Lj.png" 
              alt="Barbeiro conversando com cliente"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute bottom-6 left-6 z-20">
                <p className="text-gold-400 font-medium text-sm uppercase tracking-wider">Resgate sua identidade</p>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Story;