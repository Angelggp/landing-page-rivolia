'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from '@/components/ui/ProductCard';
import { PRODUCTS } from '@/lib/constants';

export function ProductsSection() {
  const [current, setCurrent] = useState(0);
  const total = PRODUCTS.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section className="py-16 md:py-24 bg-[#F4EDE7]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-10 md:mb-14"
        >
          <span className="hidden md:block flex-1 h-px bg-rivolia-primary opacity-40" />
          <h2 className="font-cinzel font-bold text-xl sm:text-2xl md:text-4xl text-rivolia-primary text-center leading-tight md:whitespace-nowrap">
            ELIGE CÓMO DISFRUTAR RIVOLIA
          </h2>
          <span className="hidden md:block flex-1 h-px bg-rivolia-primary opacity-40" />
        </motion.div>

        {/* ── Desktop: grid ── */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        {/* ── Mobile: carrusel ── */}
        <div className="md:hidden relative">
          {/* Viewport */}
          <div className="overflow-hidden mx-10">
            <motion.div
              className="flex"
              animate={{ x: `-${current * 100}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {PRODUCTS.map((product) => (
                <div key={product.id} className="w-full shrink-0 px-2">
                  <ProductCard {...product} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Flecha izquierda */}
          <button
            onClick={prev}
            aria-label="Producto anterior"
            className="absolute left-0 top-[42%] -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-rivolia-beige shadow-sm flex items-center justify-center text-rivolia-secondary hover:bg-rivolia-beige/30 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Flecha derecha */}
          <button
            onClick={next}
            aria-label="Producto siguiente"
            className="absolute right-0 top-[42%] -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-rivolia-beige shadow-sm flex items-center justify-center text-rivolia-secondary hover:bg-rivolia-beige/30 transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicadores dot */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {PRODUCTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Producto ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? 'w-5 h-[6px] bg-rivolia-primary'
                    : 'w-[6px] h-[6px] bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
