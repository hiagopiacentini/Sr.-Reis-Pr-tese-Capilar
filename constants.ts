import { ShieldCheck, Zap, Smile, Wind, UserCheck, Calendar, Scissors, MapPin } from 'lucide-react';
import { FaqItem, StepItem, BenefitItem, Testimonial } from './types';

export const LOCATIONS = ["Vilhena (RO)", "Cacoal (RO)", "Sapezal (MT)"];

export const STEPS: StepItem[] = [
  {
    id: 1,
    title: "Avaliação",
    description: "Conversamos para entender seu estilo de vida e expectativas.",
    image: "https://picsum.photos/seed/hair_consult/800/600"
  },
  {
    id: 2,
    title: "Escolha da Densidade",
    description: "Definimos o volume ideal para uma transição imperceptível.",
    image: "https://picsum.photos/seed/hair_texture/800/600"
  },
  {
    id: 3,
    title: "Fixação e Corte",
    description: "Aplicação segura seguida de um corte visagista personalizado.",
    image: "https://picsum.photos/seed/haircut_barber/800/600"
  },
  {
    id: 4,
    title: "Resultado Imediato",
    description: "Esse é o momento em que você percebe que voltou a se reconhecer.",
    image: "https://picsum.photos/seed/happy_man_mirror/800/600"
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    title: "Rejuvenesça Anos",
    description: "A moldura do rosto devolve a jovialidade instantaneamente.",
    icon: UserCheck
  },
  {
    title: "Vida Ativa",
    description: "Treine, nade e corra. A fixação é segura para esportes.",
    icon: Zap
  },
  {
    title: "Sem Cirurgia",
    description: "Zero dor, zero cicatrizes, resultado imediato e reversível.",
    icon: ShieldCheck
  },
  {
    title: "Imperceptível",
    description: "Tecnologia que imita o couro cabeludo. Só você sabe.",
    icon: Smile
  }
];

export const MYTHS: FaqItem[] = [
  {
    question: "Vai aparecer que é prótese?",
    answer: "Não. As bases atuais imitam o couro cabeludo e os fios são implantados um a um. O corte conecta com seu cabelo lateral, tornando o visual 100% natural.",
    icon: UserCheck
  },
  {
    question: "Posso treinar e suar?",
    answer: "Sim! Nossas colas e fitas são de alta fixação, resistentes ao suor e à água. Você pode levar uma vida ativa sem medo.",
    icon: Zap
  },
  {
    question: "E quando venta muito?",
    answer: "Pode andar de moto ou enfrentar ventanias. A fixação é projetada para resistir a tração e ventos fortes.",
    icon: Wind
  },
  {
    question: "Tem manutenção?",
    answer: "Sim, a cada 15 a 20 dias realizamos a higienização e refixação para garantir a saúde do seu couro cabeludo e a durabilidade da peça.",
    icon: Calendar
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Carlos M.",
    quote: "Voltei a tirar fotos sem boné. Parece algo pequeno, mas pra mim foi uma liberdade que eu não sentia há 10 anos.",
    image: "https://picsum.photos/seed/man1/150/150"
  },
  {
    id: 2,
    name: "João P.",
    quote: "Meu filho disse 'pai, você tá diferente, tá mais feliz'. A prótese mudou minha postura diante da vida.",
    image: "https://picsum.photos/seed/man2/150/150"
  },
  {
    id: 3,
    name: "Ricardo S.",
    quote: "Eu tinha medo de ficar artificial. Hoje, até eu esqueço que uso. O trabalho do Sr. Reis é arte pura.",
    image: "https://picsum.photos/seed/man3/150/150"
  }
];