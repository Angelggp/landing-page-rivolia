'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { TESTIMONIALS } from '@/lib/constants';

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 36, rotate: -1.5 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: 'spring', stiffness: 110, damping: 16 },
  },
};

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="font-cinzel font-bold text-xl sm:text-2xl md:text-4xl text-rivolia-secondary leading-tight">
            Lo que dicen nuestros clientes
          </h2>
        </motion.div>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.article
              key={testimonial.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.25 }}
              className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center text-center gap-5"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="relative w-12 h-12 shrink-0"
              >
                <Image
                  src="/Iconos-05_074458.png"
                  alt=""
                  fill
                  className="object-contain"
                  quality={100}
                />
              </motion.div>
              <blockquote className="font-cinzel font-bold text-base md:text-lg text-rivolia-secondary leading-relaxed">
                {testimonial.text}
              </blockquote>
              <footer className="font-cinzel font-bold text-sm text-rivolia-accent uppercase tracking-widest">
                — {testimonial.author}
              </footer>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
