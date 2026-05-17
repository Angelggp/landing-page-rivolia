'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 px-4 py-4 md:px-8 md:py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-cinzel font-bold text-2xl md:text-3xl text-rivolia-primary tracking-widest">
            RIVOLIA
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:block"
        >
          <Button variant="primary" href="#comprar">
            Comprar ahora
          </Button>
        </motion.div>
      </div>
    </header>
  );
}
