import type { Product, Step, Testimonial, ComparisonData } from '@/types';

export const COLORS = {
  primary: '#A61E22',
  secondary: '#4E2F2B',
  accent: '#AF8846',
  beige: '#CFC3B5',
  primaryDark: '#651410',
  secondaryDark: '#271110',
} as const;

export const PRODUCTS: readonly Product[] = [
  {
    id: 'sachet-individual',
    name: 'Sachet Individual',
    description: 'Ideal para probar o llevar contigo. Uso ocasional.',
    image: '/Secci%C3%B3n%203%20Cards%201%201_063655.png',
  },
  {
    id: 'sachet-rivolia-especial',
    name: 'Sachet Rivolia Especial',
    description: 'Perfil premium. Notas especiales.',
    image: '/Secci%C3%B3n%203%20Cards%202%201_070305.png',
  },
  {
    id: 'pack-10-sachets',
    name: 'Pack 10 Sachets',
    description: 'Para oficinas sin cafetera. Más práctico.',
    image: '/Secci%C3%B3n%203%20Cards%203%201_065835.png',
  },
  {
    id: 'pack-20-sachets',
    name: 'Pack 20 Sachets',
    description: 'Mejor precio por taza. Ideal para uso diario.',
    image: '/Secci%C3%B3n%203%20Cards%204%201_071918.png',
  },
  {
    id: 'cafe-rivolia-180',
    name: 'Café Rivolia 180',
    description: 'Molido o en grano. Para casa o negocio.',
    image: '/Secci%C3%B3n%203%20Cards%202%201_070305.png',
  },
] as const;

export const STEPS: readonly Step[] = [
  {
    id: 1,
    title: 'ABRE EL SACHET',
    description: 'Rasga por la línea punteada',
    image: '/photo_2026-05-15_12-12-15.jpg',
  },
  {
    id: 2,
    title: 'COLÓCALO EN TU TAZA',
    description: 'Posiciona el filtro sobre tu taza',
    image: '/photo_2026-05-15_12-12-29.jpg',
  },
  {
    id: 3,
    title: 'VIERTE AGUA CALIENTE',
    description: 'Espera 2-3 minutos y disfruta',
    image: '/photo_2026-05-15_12-12-15.jpg',
  },
] as const;

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: '1',
    text: '"Lo llevo a la oficina, ya no pierdo tiempo saliendo por café."',
    author: 'Cliente',
  },
  {
    id: '2',
    text: '"Viajo con esto y siempre tengo buen café."',
    author: 'Cliente',
  },
] as const;

export const COMPARISON_DATA: ComparisonData = {
  rivolia: {
    title: 'RIVOLIA',
    subtitle: 'Café Filtrado',
    features: [
      { label: 'Tipo', value: 'No es polvo soluble, es café para pasar' },
      { label: 'Sabor', value: 'Sabor limpio y natural. Sin ese gusto artificial típico del instantáneo' },
      { label: 'Aroma', value: 'Aroma fresco. Se siente como café recién hecho' },
      { label: 'Preparación', value: 'Listo en 3 minutos. Rapidez sin sacrificar calidad' },
    ],
  },
  instant: {
    title: 'Café Instantáneo',
    subtitle: '',
    features: [
      { label: 'Tipo', value: 'Polvo ultraprocesado. Pierde gran parte del perfil original' },
      { label: 'Sabor', value: 'Sabor plano o artificial. No hay complejidad ni textura' },
      { label: 'Aroma', value: 'Aroma débil o a químico. No genera una experiencia' },
      { label: 'Preparación', value: 'Menor percepción de calidad. Rápido y básico' },
    ],
  },
} as const;
