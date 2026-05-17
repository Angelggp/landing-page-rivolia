'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const ctaContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const ctaItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut' as const },
  },
};

export function CTASection() {
  return (
    <section id="comprar" className="py-20 md:py-32 bg-rivolia-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Texto + botones */}
        <motion.div
          variants={ctaContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col gap-6 order-2 md:order-1"
        >
          <motion.h2 variants={ctaItem} className="font-cinzel font-bold text-xl sm:text-2xl md:text-4xl text-rivolia-secondary leading-tight">
            NO HAY MEJOR MOMENTO PARA PROBAR RIVOLIA
          </motion.h2>

          <motion.div variants={ctaItem} className="flex flex-col gap-3">
            <Button variant="primary" href="#" className="w-full md:w-auto text-center">
              Comprar ahora
            </Button>
            <Button variant="secondary" href="#" className="w-full md:w-auto text-center">
              Comprar pack 20
            </Button>
          </motion.div>

          <motion.div variants={ctaItem} className="flex items-center gap-2 mt-2">
            <span className="text-xl" aria-hidden="true">🔥</span>
            <p className="font-cinzel font-bold text-sm text-rivolia-secondary-dark tracking-widest uppercase">
              Últimos packs disponibles
            </p>
          </motion.div>
        </motion.div>

        {/* Imagen producto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 1.5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, type: 'spring', stiffness: 110, damping: 16 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-80 h-80 md:w-[460px] md:h-[460px]">
            <Image
              src="/Secci%C3%B3n_9_1_No_hay_mejor_momento_para_probar_Rivolia_053728.png"
              alt="Rivolia producto"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 320px, 460px"
              quality={100}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
