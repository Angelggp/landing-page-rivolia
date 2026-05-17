'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const BADGES = [
  { icon: '/Iconos-02_074458.png', text: 'Últimos packs disponibles hoy' },
  { icon: '/Iconos-03_074455.png', text: 'Entrega rápida en Perú' },
  { icon: '/Iconos-04_074457.png', text: 'Listo en 3 minutos' },
] as const;

const MOBILE_BADGES = [
  { text: '+ de 1800 clientes lo probaron' },
  { text: 'Entrega rápida en Lima' },
] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export function HeroSection() {
  return (
    <section className="relative bg-[#F2E5DD] min-h-screen overflow-x-hidden">

      {/* ── Desktop: imagen absoluta pegada al borde derecho ── */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="hidden md:block absolute right-0 top-0 bottom-0 w-[60%]"
      >
        <Image
          src="/Hero%20de%20Desktop%201_054349.png"
          alt="Rivolia — Café tostado y molido 100%"
          fill
          className="object-contain object-right"
          quality={100}
          priority
        />
      </motion.div>

      {/* ── Contenido ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="md:min-h-screen md:flex md:flex-col md:justify-center">

          {/* Columna de texto — ocupa la mitad izquierda en desktop */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="md:w-[48%] flex flex-col gap-5 pt-28 pb-6 md:pt-0 md:pb-0 text-center md:text-left"
          >
            <motion.p
              variants={item}
              className="font-montserrat font-bold text-3xl md:text-5xl text-rivolia-primary"
            >
              RIVOLIA
            </motion.p>

            <motion.h1
              variants={item}
              className="font-cinzel font-bold text-xl md:text-3xl lg:text-4xl text-gray-900 leading-snug uppercase"
            >
              Café Real. Sin Máquina.{' '}
              <br className="hidden md:block" />
              Sin Complicaciones.
            </motion.h1>

            {/* Tagline — solo desktop */}
            <motion.p
              variants={item}
              className="hidden md:block font-cinzel font-light text-xs md:text-sm text-gray-700 uppercase tracking-widest"
            >
              Abre, vierte agua caliente y disfruta. Así de simple.
            </motion.p>

            {/* Botón — solo móvil, aparece ANTES de los badges */}
            <motion.div variants={item} className="md:hidden">
              <Button variant="secondary" href="#comprar" className="block w-full text-center">
                Comprar ahora
              </Button>
            </motion.div>

            {/* Badges — solo móvil: 2 checks verdes */}
            <motion.ul variants={item} className="md:hidden flex flex-col gap-3 items-center">
              {MOBILE_BADGES.map((badge) => (
                <li
                  key={badge.text}
                  className="flex items-center gap-2 font-cinzel text-sm text-gray-700 uppercase tracking-wide"
                >
                  <svg
                    className="w-5 h-5 shrink-0 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{badge.text}</span>
                </li>
              ))}
            </motion.ul>

            {/* Badges — solo desktop: 3 con iconos */}
            <motion.ul variants={item} className="hidden md:flex flex-col gap-3 mt-1">
              {BADGES.map((badge) => (
                <li
                  key={badge.text}
                  className="flex items-center gap-3 font-cinzel text-base text-gray-700"
                >
                  <div className="relative w-5 h-5 shrink-0">
                    <Image
                      src={badge.icon}
                      alt=""
                      fill
                      className="object-contain"
                      unoptimized={true}
                    />
                  </div>
                  <span>{badge.text}</span>
                </li>
              ))}
            </motion.ul>

            {/* Botón — solo desktop, después de badges */}
            <motion.div variants={item} className="hidden md:flex flex-col gap-2 items-start mt-2">
              <Button variant="secondary" href="#comprar" className="w-2/3 text-center">
                Comprar ahora
              </Button>
              <div className="w-2/3 text-center">
                <span className="font-cinzel text-gray-700">Desde $3 por taza</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Mobile: imagen debajo del texto, en el flujo ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:hidden relative w-full h-80 mt-4 mb-10"
          >
            <Image
              src="/Hero%20de%20Desktop%201_054349.png"
              alt="Rivolia — Café tostado y molido 100%"
              fill
              className="object-contain"
              quality={100}
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}



