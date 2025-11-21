import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'whatsapp';
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '', fullWidth = false }) => {
  const baseStyles = "font-bold uppercase tracking-wider py-4 px-8 rounded-sm transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gold-500 hover:bg-gold-400 text-black shadow-[0_0_15px_rgba(255,230,0,0.3)] hover:shadow-[0_0_25px_rgba(255,230,0,0.5)]",
    outline: "border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black",
    whatsapp: "bg-green-600 hover:bg-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.3)]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;