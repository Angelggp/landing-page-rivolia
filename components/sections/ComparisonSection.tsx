'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { COMPARISON_DATA } from '@/lib/constants';

export function ComparisonSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 md:gap-4 mb-12"
        >
          <span className="w-8 md:flex-1 h-px bg-rivolia-primary/30" />
          <h2 className="font-cinzel font-bold text-xl sm:text-2xl md:text-4xl text-rivolia-primary text-center leading-tight">
            Rivolia vs Café Instantáneo
          </h2>
          <span className="w-8 md:flex-1 h-px bg-rivolia-primary/30" />
        </motion.div>

        <div className="relative md:pb-52">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative z-10">
          {/* RIVOLIA */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-rivolia-beige/80 backdrop-blur-[1px] p-8 md:p-10 rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
          >
            <h3 className="font-cinzel font-bold text-3xl text-rivolia-primary mb-1">
              {COMPARISON_DATA.rivolia.title}
            </h3>
            <p className="font-montserrat font-light text-sm text-[#5C3A31] mb-4">
              {COMPARISON_DATA.rivolia.subtitle}
            </p>
            <div className="relative w-full h-36 mb-6 md:hidden">
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
                  <span className="text-green-700 font-bold text-lg mt-0.5" aria-hidden="true">✓</span>
                  <span className="font-montserrat font-light text-sm text-[#3F2D27] leading-relaxed">
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
            className="bg-gray-100/80 backdrop-blur-[1px] p-8 md:p-10 rounded-b-2xl md:rounded-b-none md:rounded-r-2xl"
          >
            <h3 className="font-cinzel font-bold text-3xl text-[#6F5952] mb-1">
              {COMPARISON_DATA.instant.title}
            </h3>
            <p className="font-montserrat font-light text-sm text-[#9A847D] mb-4">&nbsp;</p>
            <div className="relative w-full h-36 mb-6 md:hidden">
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
                  <span className="text-[#B84B44] font-bold text-lg mt-0.5" aria-hidden="true">✗</span>
                  <span className="font-montserrat font-light text-sm text-[#4E3F3A] leading-relaxed">
                    {f.value}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
          </div>

          {/* Desktop: imágenes fuera de la tarjeta, en extremos inferiores */}
          <div className="hidden md:block absolute bottom-[-30px] left-[calc(50%-50vw)] w-[54vw] h-[24rem] pointer-events-none">
            <Image
              src="/Secci%C3%B3n%206%20%201-%20Rivolia%20vs%20Caf%C3%A9%20instant%C3%A1neo_082839.png"
              alt="Rivolia café filtrado"
              fill
              className="object-contain object-left-bottom"
              sizes="54vw"
              quality={100}
            />
          </div>
          <div className="hidden md:block absolute bottom-[-30px] right-[calc(50%-50vw)] w-[54vw] h-[24rem] pointer-events-none">
            <Image
              src="/Secci%C3%B3n%206%202-%20Rivolia%20vs%20Caf%C3%A9%20instant%C3%A1neo_082854.png"
              alt="Café instantáneo"
              fill
              className="object-contain object-right-bottom"
              sizes="54vw"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
