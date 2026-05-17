'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { COMPARISON_DATA } from '@/lib/constants';

export function ComparisonSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-cinzel font-bold text-3xl md:text-4xl text-rivolia-secondary text-center mb-12"
        >
          Rivolia vs Café Instantáneo
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* RIVOLIA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-rivolia-beige p-8 md:p-10 rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
          >
            <h3 className="font-cinzel font-bold text-3xl text-rivolia-primary mb-1">
              {COMPARISON_DATA.rivolia.title}
            </h3>
            <p className="font-montserrat font-light text-sm text-rivolia-secondary mb-4">
              {COMPARISON_DATA.rivolia.subtitle}
            </p>
            <div className="relative w-full h-36 mb-6">
              <Image
                src="/Secci%C3%B3n%206%20%201-%20Rivolia%20vs%20Caf%C3%A9%20instant%C3%A1neo_082839.png"
                alt="Rivolia café filtrado"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
              />
            </div>
            <ul className="flex flex-col gap-5">
              {COMPARISON_DATA.rivolia.features.map((f) => (
                <li key={f.label} className="flex gap-3 items-start">
                  <span className="text-green-600 font-bold text-lg mt-0.5" aria-hidden="true">✓</span>
                  <span className="font-montserrat font-light text-sm text-gray-700 leading-relaxed">
                    {f.value}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Café Instantáneo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gray-100 p-8 md:p-10 rounded-b-2xl md:rounded-b-none md:rounded-r-2xl"
          >
            <h3 className="font-cinzel font-bold text-3xl text-gray-400 mb-1">
              {COMPARISON_DATA.instant.title}
            </h3>
            <p className="font-montserrat font-light text-sm text-gray-300 mb-4">&nbsp;</p>
            <div className="relative w-full h-36 mb-6">
              <Image
                src="/Secci%C3%B3n%206%202-%20Rivolia%20vs%20Caf%C3%A9%20instant%C3%A1neo_082854.png"
                alt="Café instantáneo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={100}
              />
            </div>
            <ul className="flex flex-col gap-5">
              {COMPARISON_DATA.instant.features.map((f) => (
                <li key={f.label} className="flex gap-3 items-start">
                  <span className="text-red-400 font-bold text-lg mt-0.5" aria-hidden="true">✗</span>
                  <span className="font-montserrat font-light text-sm text-gray-500 leading-relaxed">
                    {f.value}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
