import { LucideIcon } from 'lucide-react';

export interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  icon?: LucideIcon;
}

export interface StepItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: LucideIcon;
}