import React from 'react';
import Section from './ui/Section';
import { MapPin, Star } from 'lucide-react';
import { LOCATIONS } from '../constants';

const About = () => {
  return (
    <Section className="bg-black">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center max-w-5xl mx-auto">
        
        <div className="w-full sm:w-2/3 md:w-1/3">
            <div className="relative">
                <div className="absolute inset-0 bg-gold-500 rounded-full blur-3xl opacity-20"></div>
                <img 
                    src="https://i.imgur.com/YKXKKFL.jpeg" 
                    alt="Sr. Reis" 
                    className="relative w-full aspect-square object-cover rounded-2xl border-2 border-gray-800 grayscale hover:grayscale-0 transition-all duration-500"
                />
            </div>
        </div>

        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold text-white mb-4">
            Por que escolher o <span className="text-gold-500">Sr. Reis?</span>
          </h2>
          
          <div className="space-y-6 text-gray-300 text-base md:text-lg mb-8">
            <p>
              Mais do que técnica, eu ofereço um ambiente seguro e sem julgamentos. 
              Sei exatamente o que a calvície faz com a autoestima de um homem, e dedico 
              minha carreira a devolver essa confiança.
            </p>
            <ul className="space-y-3 inline-block text-left">
               <li className="flex items-center gap-3">
                   <Star className="text-gold-500 w-5 h-5 fill-gold-500 shrink-0" />
                   <span>Atendimento personalizado e sem pressa</span>
               </li>
               <li className="flex items-center gap-3">
                   <Star className="text-gold-500 w-5 h-5 fill-gold-500 shrink-0" />
                   <span>Técnica premium de visagismo</span>
               </li>
               <li className="flex items-center gap-3">
                   <Star className="text-gold-500 w-5 h-5 fill-gold-500 shrink-0" />
                   <span>Discrição absoluta</span>
               </li>
            </ul>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Atendimento Presencial</h4>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4">
                {LOCATIONS.map(loc => (
                    <span key={loc} className="flex items-center gap-2 px-4 py-2 bg-dark-900 rounded-full text-xs md:text-sm text-white border border-gray-800">
                        <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                        {loc}
                    </span>
                ))}
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default About;