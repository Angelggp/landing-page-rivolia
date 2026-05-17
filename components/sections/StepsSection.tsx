'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { STEPS } from '@/lib/constants';

const STEP_CUP_IMAGE = '/Secci%C3%B3n%205%201-%20No%20es%20caf%C3%A9%20r%C3%A1pido..._075012.png';

export function StepsSection() {
  return (
    <section className="py-16 md:py-24 bg-rivolia-secondary-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-2">
            <span className="w-10 md:flex-1 h-px bg-white/40" />
            <h2 className="font-cinzel font-bold text-3xl md:text-4xl text-white whitespace-nowrap">
              MÁS FÁCIL QUE PREPARAR TÉ
            </h2>
            <span className="w-10 md:flex-1 h-px bg-white/40" />
          </div>
          <p className="font-montserrat font-light text-base md:text-lg text-rivolia-beige">
            Café filtrado. Fresco y listo.
          </p>
        </motion.div>
      </div>

      <div className="mt-10 md:mt-12 w-full border-y border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative h-[320px] md:h-[360px] bg-[#4b2d26] border-b md:border-b-0 border-white/20 md:border-r md:last:border-r-0"
            >
              <div className="absolute inset-0 flex items-center justify-center p-5 md:p-8">
                <Image
                  src={STEP_CUP_IMAGE}
                  alt={step.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  quality={100}
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 px-4 md:px-5 py-4 md:py-5 text-center bg-black/30 border-t border-white/15">
                <h3 className="font-cinzel font-bold text-sm md:text-base text-white uppercase tracking-wide">
                  {step.id}. {step.title}
                </h3>
                <p className="font-cinzel font-normal text-xs md:text-sm text-rivolia-beige mt-1">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
