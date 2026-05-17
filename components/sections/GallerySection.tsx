'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export function GallerySection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-2%', '2%']);

  return (
    <section ref={sectionRef} className="relative bg-[#FCF5F0] overflow-hidden">
      {/* Titulo en flujo para movil */}
      <div className="md:hidden px-4 pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2"
        >
          <span className="w-6 h-px bg-rivolia-secondary/40" />
          <h2 className="font-cinzel font-bold text-xl sm:text-2xl text-rivolia-primary text-center leading-tight">
            Más formas de disfrutar Rivolia
          </h2>
          <span className="w-6 h-px bg-rivolia-secondary/40" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={{ y: imageY }}
        className="relative w-full"
      >
        <Image
          src="/Secci%C3%B3n%207%201-%20M%C3%A1s%20formas%20de%20disfrutar%20Rivolia%201_090258.png"
          alt="Granos de café seleccionados con canela y anís estrellado"
          width={1920}
          height={760}
          className="w-full h-auto block"
          sizes="100vw"
          quality={100}
        />
      </motion.div>

      <div className="hidden md:block absolute inset-0 bg-black/10 pointer-events-none" />

      <div className="hidden md:block absolute inset-x-0 top-0 z-10 max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 md:gap-4"
        >
          <span className="w-8 md:flex-1 h-px bg-rivolia-secondary/40" />
          <h2 className="font-cinzel font-bold text-xl sm:text-2xl md:text-4xl text-rivolia-primary text-center leading-tight">
            Más formas de disfrutar Rivolia
          </h2>
          <span className="w-8 md:flex-1 h-px bg-rivolia-secondary/40" />
        </motion.div>
      </div>
    </section>
  );
}
