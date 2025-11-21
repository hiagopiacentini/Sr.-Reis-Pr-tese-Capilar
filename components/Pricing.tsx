import React from 'react';
import Section from './ui/Section';
import Button from './ui/Button';
import { CheckCircle2 } from 'lucide-react';

const Pricing = () => {
  const features = [
    "Avaliação visagista completa",
    "Prótese 100% cabelo humano",
    "Corte e personalização",
    "Primeira manutenção inclusa",
    "Kit de cuidados inicial"
  ];

  return (
    <Section className="bg-dark-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Quanto custa recuperar sua <span className="text-gold-500">Autoestima?</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-10 md:mb-12 max-w-2xl mx-auto">
          É menos sobre preço e mais sobre recuperar anos de confiança perdida.
          Trabalhamos com valores transparentes.
        </p>

        <div className="bg-black border border-gold-500/30 rounded-2xl p-6 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-gold-500 text-black text-xs font-bold px-4 py-1 rounded-bl-lg">
            SR. REIS PROTESE CAPILAR
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left space-y-4">
               {features.map((feat, i) => (
                   <div key={i} className="flex items-center gap-3 text-gray-300">
                       <CheckCircle2 className="text-gold-500 w-5 h-5 shrink-0" />
                       <span>{feat}</span>
                   </div>
               ))}
            </div>

            <div className="flex flex-col items-center justify-center md:border-l border-gray-800 pl-0 md:pl-8 pt-8 md:pt-0 border-t md:border-t-0">
                <span className="text-gray-500 text-sm mb-2">Investimento inicial a partir de</span>
                <div className="text-4xl font-bold text-white mb-2">Consulte</div>
                <span className="text-xs text-gray-500 mb-6">Parcelamos no cartão</span>
                <Button variant="whatsapp" fullWidth onClick={() => window.open('https://wa.me/556999525985', '_blank')}>
                    Solicitar Orçamento
                </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;