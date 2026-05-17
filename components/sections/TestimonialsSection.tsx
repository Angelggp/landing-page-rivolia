'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TESTIMONIALS } from '@/lib/constants';

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.article
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center text-center gap-5"
            >
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/Iconos-05_074458.png"
                  alt=""
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>
              <blockquote className="font-cinzel font-bold text-base md:text-lg text-rivolia-secondary leading-relaxed">
                {testimonial.text}
              </blockquote>
              <footer className="font-cinzel font-bold text-sm text-rivolia-accent uppercase tracking-widest">
                — {testimonial.author}
              </footer>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
