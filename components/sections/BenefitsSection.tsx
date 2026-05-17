'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function BenefitsSection() {
  return (
    <section className="py-20 md:py-18 bg-rivolia-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-3"
        >
          <p className="font-cinzel font-bold text-xl sm:text-2xl md:text-4xl text-rivolia-secondary leading-tight">
            NO ES CAFÉ RÁPIDO.
          </p>
          <h2 className="font-cinzel font-bold text-xl sm:text-2xl md:text-4xl text-rivolia-secondary leading-tight">
            ES CAFÉ BIEN HECHO, RÁPIDO.
          </h2>
          <p className="font-cinzel font-light text-xl text-rivolia-secondary-dark mt-4 max-w-md">
            Como el café que tomarías en casa pero en cualquier lugar
          </p>
        </motion.div>

        {/* Imagen decorativa */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <Image
              src="/Secci%C3%B3n%205%201-%20No%20es%20caf%C3%A9%20r%C3%A1pido..._075012.png"
              alt="Taza de café Rivolia"
              fill
              className="object-contain"
              quality={100}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
