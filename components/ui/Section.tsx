import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

const Section: React.FC<SectionProps> = ({ children, className = "", id, delay = 0 }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={`py-16 px-5 md:py-20 md:px-12 lg:px-24 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;