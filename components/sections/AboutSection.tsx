'use client';

import { motion } from 'framer-motion';

const BENEFITS = [
  'Perfecto para oficinas sin cafetera',
  'Ideal para viajes y carretera',
  'Solución rápida sin sacrificar el sabor',
] as const;

export function AboutSection() {
  return (
    <section
      className="py-16 md:py-24"
      style={{
        backgroundColor: '#E7DDCB',
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E\")",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="hidden md:block flex-1 h-px bg-rivolia-primary opacity-40" />
            <h2 className="font-cinzel font-bold text-xl sm:text-2xl md:text-4xl text-rivolia-primary text-center leading-tight">
              ¿QUÉ ES RIVOLIA?
            </h2>
            <span className="hidden md:block flex-1 h-px bg-rivolia-primary opacity-40" />
          </div>
          <p className="font-montserrat font-light text-lg md:text-xl text-gray-600 leading-relaxed mb-10">
            La forma más simple de tomar buen café en cualquier lugar.{' '}
            Café filtrado real, en un formato práctico.{' '}
            Diferentes formatos para cada momento.
          </p>

          <h3 className="font-cinzel font-bold text-xl sm:text-2xl text-rivolia-primary mb-6">
            BENEFICIOS
          </h3>
          <ul className="flex flex-col gap-3">
            {BENEFITS.map((benefit) => (
              <li
                key={benefit}
                className="font-montserrat font-light text-base md:text-lg text-gray-600"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
