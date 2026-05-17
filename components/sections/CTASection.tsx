'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export function CTASection() {
  return (
    <section id="comprar" className="py-20 md:py-32 bg-rivolia-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Texto + botones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 order-2 md:order-1"
        >
          <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-rivolia-secondary leading-tight">
            NO HAY MEJOR MOMENTO PARA PROBAR RIVOLIA
          </h2>

          <div className="flex flex-col gap-3">
            <Button variant="primary" href="#" className="w-full md:w-auto text-center">
              Comprar ahora
            </Button>
            <Button variant="secondary" href="#" className="w-full md:w-auto text-center">
              Comprar pack 20
            </Button>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-xl" aria-hidden="true">🔥</span>
            <p className="font-cinzel font-bold text-sm text-rivolia-secondary-dark tracking-widest uppercase">
              Últimos packs disponibles
            </p>
          </div>
        </motion.div>

        {/* Imagen producto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <Image
              src="/Secci%C3%B3n_9_1_No_hay_mejor_momento_para_probar_Rivolia_053728.png"
              alt="Rivolia producto"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 256px, 384px"
              quality={100}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
