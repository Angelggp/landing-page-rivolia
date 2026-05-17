'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import type { Product } from '@/types';

interface ProductCardProps extends Product {
  onBuy?: () => void;
}

export function ProductCard({ name, description, image, onBuy }: ProductCardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-white shadow-sm border border-rivolia-beige/60 h-full"
    >
      <h3 className="font-cinzel font-bold text-sm text-rivolia-primary text-center leading-snug">
        {name}
      </h3>
      <p className="font-montserrat font-light text-xs text-gray-500 text-center flex-1 leading-relaxed">
        {description}
      </p>

      

      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 260px, 220px"
          quality={100}
        />
      </div>

      <Button
        variant="secondary"
        onClick={onBuy}
        className="text-xs px-4 py-2 w-full"
      >
        COMPRAR
      </Button>
    </motion.article>
  );
}
