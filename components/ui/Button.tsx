'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { type ReactNode } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'whatsapp';
  children: ReactNode;
  href?: string;
  className?: string;
}

const BASE_STYLES =
  "inline-block px-8 py-3 rounded font-montserrat text-base md:text-lg font-normal transition-colors duration-300 cursor-pointer";

const VARIANT_STYLES = {
  primary: 'bg-rivolia-primary hover:bg-rivolia-primary-dark text-white',
  secondary: 'bg-rivolia-secondary hover:bg-rivolia-secondary-dark text-white',
  whatsapp: 'bg-rivolia-accent hover:bg-rivolia-secondary text-white',
} as const;

export function Button({
  variant = 'primary',
  children,
  href,
  className = '',
  ...props
}: ButtonProps) {
  const combinedClassName = `${BASE_STYLES} ${VARIANT_STYLES[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClassName}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
