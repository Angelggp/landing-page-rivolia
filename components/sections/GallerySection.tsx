'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export function GallerySection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-cinzel font-bold text-3xl md:text-4xl text-rivolia-secondary text-center mb-10"
        >
          Más formas de disfrutar Rivolia
        </motion.h2>

        <div className="relative h-64 md:h-[480px] rounded-2xl overflow-hidden">
          <motion.div
            style={{ y }}
            className="absolute inset-[-10%]"
          >
            <Image
              src="/Secci%C3%B3n%207%201-%20M%C3%A1s%20formas%20de%20disfrutar%20Rivolia%201_090258.png"
              alt="Granos de café seleccionados con canela y anís estrellado"
              fill
              className="object-cover"
              sizes="100vw"
              quality={100}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
