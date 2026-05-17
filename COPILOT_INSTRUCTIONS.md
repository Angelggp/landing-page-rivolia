# INSTRUCCIONES PARA GITHUB COPILOT - PROYECTO RIVOLIA

## CONTEXTO DEL PROYECTO

Estoy maquetando una landing page para "RIVOLIA" (café instantáneo premium) usando:
- **Next.js 16** con App Router
- **TypeScript** estricto
- **Tailwind CSS** (configurado en globals.css)
- **Framer Motion** para animaciones
- **Componentes desde cero** (sin shadcn/ui)

---

## ESTRUCTURA DEL PROYECTO

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css        # Configuración Tailwind + custom CSS
├── components/
│   ├── ui/                # Componentes base reutilizables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ProductCard.tsx
│   ├── sections/          # Secciones de la landing
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── StepsSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── ComparisonSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── CTASection.tsx
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
├── hooks/                 # Custom hooks (lógica reutilizable)
│   ├── useMediaQuery.ts
│   └── useScrollAnimation.ts
├── lib/
│   ├── constants.ts       # Colores, textos, datos
│   └── utils.ts           # Helpers (cn, etc)
└── types/
    └── index.ts           # Interfaces globales
```

---

## CONFIGURACIÓN DE TAILWIND (globals.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Colores Rivolia */
    --rivolia-primary: 166 30 34;        /* #A61E22 */
    --rivolia-secondary: 78 47 43;       /* #4E2F2B */
    --rivolia-accent: 175 136 70;        /* #AF8846 */
    --rivolia-beige: 207 195 181;        /* #CFC3B5 */
    --rivolia-primary-dark: 101 20 16;   /* #651410 */
    --rivolia-secondary-dark: 39 17 16;  /* #271110 */
  }
}

/* Fuentes Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Cinzel:wght@400;700&display=swap');
```

---

## ESPECIFICACIONES DE DISEÑO

### Paleta de Colores (usar directamente en Tailwind):

```typescript
// lib/constants.ts
export const COLORS = {
  primary: '#A61E22',
  secondary: '#4E2F2B',
  accent: '#AF8846',
  beige: '#CFC3B5',
  primaryDark: '#651410',
  secondaryDark: '#271110',
} as const;
```

### Tipografías:

- **Montserrat**: `font-['Montserrat']`
  - Light (300): `font-light`
  - Regular (400): `font-normal`
  - Bold (700): `font-bold`
  
- **Cinzel**: `font-['Cinzel']`
  - Regular (400): `font-normal`
  - Bold (700): `font-bold`

### Tamaños de texto (aproximados en Tailwind):

- 61pt → `text-6xl` o `text-7xl`
- 44pt → `text-5xl`
- 36pt → `text-4xl`
- 30pt → `text-3xl`
- 25pt → `text-2xl`
- 22pt → `text-xl`
- 20pt → `text-lg`
- 18-19pt → `text-base`

**Responsive**: Usar `text-2xl md:text-4xl lg:text-6xl`

### Componentes de Botón - Variantes:

```typescript
// components/ui/Button.tsx
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'whatsapp';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
}

// Estados:
// Primary (Comprar ahora):
//   Normal: bg-[#A61E22] text-white
//   Hover: bg-[#651410]
//
// Secondary (Comprar pack 20):
//   Normal: bg-[#4E2F2B] text-white
//   Hover: bg-[#271110]
//
// WhatsApp:
//   Normal: bg-[#AF8846] text-white
//   Hover: bg-[#4E2F2B]
//
// Font: font-['Montserrat'] text-xl (22pt)
// Transición: transition-colors duration-300
```

---

## SECCIONES DE LA LANDING (9 secciones)

### 1. HeroSection

- **Título principal**: "CAFÉ REAL. SIN MÁQUINA. SIN COMPLICACIONES"
  - Font: `font-['Cinzel'] font-bold text-4xl md:text-6xl`
  - Color: `text-[#A61E22]`
- **Subtítulo**: "Abre, vierte agua caliente y disfruta..."
  - Font: `font-['Montserrat'] font-light text-lg md:text-2xl`
- **Extras destacados**:
  - Varias presentaciones (ícono + texto)
  - % Cacao Panameño
  - Listo en 1 minuto
- **CTA**: Button variant="primary"
- **Layout**: Grid 2 columnas en desktop, stack en mobile
- **Imagen**: Producto + taza negra (lado derecho desktop)
- **Animación**: Fade in + slide up con Framer Motion

### 2. AboutSection - "¿QUÉ ES RIVOLIA?"

- **Título**: `font-['Cinzel'] font-bold text-4xl text-[#A61E22]`
- **Descripción**: `font-['Montserrat'] font-light text-xl md:text-2xl`
- **Layout**: Centrado, max-w-4xl
- **Animación**: Fade in cuando entra en viewport

### 3. ProductsSection - "ELIGE CÓMO DISFRUTAR RIVOLIA"

- **Título**: `font-['Cinzel'] font-bold text-4xl text-[#A61E22]`
- **Grid**: 1 col mobile → 2 cols tablet → 4 cols desktop
- **ProductCard estructura**:
  ```typescript
  interface Product {
    id: string;
    name: string;
    description: string;
    image: string;
    price?: string;
  }
  ```
- **Card contiene**:
  - Imagen del producto
  - Nombre: `font-['Cinzel'] font-normal text-lg`
  - Descripción: `font-['Montserrat'] font-light text-base`
  - Button "COMPRAR" variant="primary"
- **Animación**: Stagger children con delay incremental

### 4. StepsSection - "MÁS FÁCIL QUE PREPARAR TÉ"

- **Subtítulo**: "Café filtrado fresco y listo"
- **3 pasos** con imagen + texto:
  1. "ABRE EL SACHET"
  2. "COLÓCALO EN TU TAZA"
  3. "VIERTE AGUA CALIENTE"
- **Layout**: Grid 3 columnas desktop, stack mobile
- **Títulos pasos**: `font-['Cinzel'] font-bold text-xl`
- **Descripción**: `font-['Cinzel'] font-normal text-lg`
- **Animación**: Secuencia de aparición 1→2→3

### 5. BenefitsSection (Slogan grande)

- **Texto superior**: `font-['Cinzel'] font-normal text-2xl md:text-3xl`
  - "NO ES CAFÉ RÁPIDO."
- **Texto principal**: `font-['Cinzel'] font-bold text-3xl md:text-5xl`
  - "ES CAFÉ BIEN HECHO, RÁPIDO."
- **Subtítulo**: "Como el café que tomarías en casa pero en cualquier lugar"
- **Background**: `bg-[#CFC3B5]` o imagen de café
- **Imagen decorativa**: taza negra
- **Animación**: Scale + fade para énfasis

### 6. ComparisonSection - "RIVOLIA VS CAFÉ INSTANTÁNEO"

- **Título**: `font-['Cinzel'] font-bold text-4xl`
- **Tabla comparativa** 2 columnas:
  - Izquierda: "RIVOLIA" (Café Filtrado)
  - Derecha: "CAFÉ INSTANTÁNEO"
- **Aspectos comparados**:
  - Café Filtrado vs Polvo ultraprocesado
  - Aroma fresco vs Sin aroma
  - Sabor natural vs Sabor artificial
  - Listo en 3 minutos vs Listo en 1 minuto
  - Menor preparación vs Menor calidad
- **Tipografía**:
  - Nombres café: `font-['Cinzel'] font-bold text-3xl`
  - Aspectos: `font-['Montserrat'] font-bold text-lg`
  - Explicación: `font-['Montserrat'] font-light text-base`
- **Animación**: Slide from sides (Rivolia desde izquierda, Instantáneo desde derecha)

### 7. GallerySection - "MÁS FORMAS DE DISFRUTAR RIVOLIA"

- **Título**: `font-['Cinzel'] font-bold text-4xl`
- **Imagen hero**: Granos de café en cuencos de madera
- **Elementos decorativos**: canela, anís estrellado
- **Layout**: imagen full-width, texto overlay o debajo
- **Animación**: Parallax suave en scroll

### 8. TestimonialsSection

- **Título**: "TESTIMONIOS" (opcional)
- **Cards de testimonios**:
  ```typescript
  interface Testimonial {
    id: string;
    text: string;
    author: string;
    role?: string;
  }
  ```
- **Tipografía**:
  - Texto testimonio: `font-['Cinzel'] font-bold text-lg`
  - Autor: `font-['Cinzel'] font-bold text-base`
- **Ícono decorativo**: arriba de cada card
- **Grid**: 2-3 columnas desktop, 1 mobile
- **Animación**: Fade in + slide up staggered

### 9. CTASection - CTA Final

- **Texto principal**: "NO HAY MEJOR MOMENTO PARA PROBAR RIVOLIA"
  - `font-['Cinzel'] font-bold text-3xl md:text-4xl`
- **Dos botones**:
  - "Comprar ahora" (variant="primary")
  - "Comprar pack 20" (variant="secondary")
- **Texto inferior**: "PARA DISTRIBUIDORES"
  - `font-['Cinzel'] font-bold text-lg`
- **Imagen**: Producto Rivolia (lateral)
- **Background**: `bg-[#CFC3B5]`
- **Animación**: Pulse suave en botones

---

## FRAMER MOTION - GUÍA DE USO

### Instalación:
```bash
npm install framer-motion
```

### Patrones comunes:

#### 1. Fade In básico:
```typescript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  {children}
</motion.div>
```

#### 2. Slide Up (para secciones):
```typescript
<motion.section
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  {children}
</motion.section>
```

#### 3. Stagger Children (para grids de productos):
```typescript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

<motion.div
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid grid-cols-1 md:grid-cols-4 gap-6"
>
  {products.map((product) => (
    <motion.div key={product.id} variants={itemVariants}>
      <ProductCard {...product} />
    </motion.div>
  ))}
</motion.div>
```

#### 4. Hover Effects (para botones y cards):
```typescript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
  Comprar ahora
</motion.button>
```

#### 5. Custom Hook para animaciones de scroll:
```typescript
// hooks/useScrollAnimation.ts
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return { ref, isInView };
}

// Uso:
const { ref, isInView } = useScrollAnimation();

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.6 }}
>
```

### Recomendaciones de animación por sección:

- **HeroSection**: Fade in + slide up (duration: 0.8s)
- **AboutSection**: Fade in simple (duration: 0.6s)
- **ProductsSection**: Stagger children (delay: 0.1s entre items)
- **StepsSection**: Secuencia numérica (delays: 0s, 0.2s, 0.4s)
- **BenefitsSection**: Scale + fade (scale: 0.95 → 1)
- **ComparisonSection**: Slide from sides
- **GallerySection**: Parallax con `useScroll` y `useTransform`
- **TestimonialsSection**: Stagger + slide up
- **CTASection**: Pulse en botones con `whileHover`

### Performance:
- Usar `whileInView` con `viewport={{ once: true }}` para animaciones one-time
- Evitar animar `width`, `height` (usar `scale` en su lugar)
- Preferir `opacity`, `transform` (GPU-accelerated)
- Layout animations con `layout` prop cuando sea necesario

---

## REQUISITOS TÉCNICOS CRÍTICOS

### 1. COMPONENTIZACIÓN (Modularidad)

#### Componentes UI puros (carpeta ui/):
- Solo reciben props, **CERO lógica de negocio**
- Altamente reutilizables
- TypeScript interfaces estrictas
- Ejemplos: Button, Card, ProductCard, TestimonialCard

#### Componentes de Sección (carpeta sections/):
- Orquestan componentes UI
- Pueden contener datos estáticos
- Llaman hooks si necesitan lógica
- **Un archivo = una sección**

#### Principio:
**Si un componente se repite 2+ veces → extraer a ui/**

---

### 2. SEPARACIÓN DE RESPONSABILIDADES

#### UI (Presentación):
```typescript
// ✅ CORRECTO - Componente UI puro
export function ProductCard({ name, description, image, onBuy }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="..."
    >
      <Image src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <Button onClick={onBuy}>Comprar</Button>
    </motion.div>
  );
}
```

#### Lógica (Hooks/Lib):
```typescript
// ✅ CORRECTO - Lógica separada
// hooks/useCart.ts
export function useCart() {
  const handleAddToCart = (productId: string) => {
    // Lógica de negocio
    console.log('Agregando al carrito:', productId);
  };
  return { handleAddToCart };
}

// sections/ProductsSection.tsx
export function ProductsSection() {
  const { handleAddToCart } = useCart();
  
  return (
    <section>
      {products.map(p => (
        <ProductCard {...p} onBuy={() => handleAddToCart(p.id)} />
      ))}
    </section>
  );
}
```

#### Datos (Constants):
```typescript
// lib/constants.ts
export const PRODUCTS = [
  { id: '1', name: 'Sachet Rivolia', description: '...', image: '/...' },
  // ...
] as const;

export const TESTIMONIALS = [
  { id: '1', text: '"Me encanta..."', author: 'María García' },
  // ...
] as const;
```

---

### 3. LIMPIEZA DE CÓDIGO

#### Naming conventions:
- **Componentes**: PascalCase (`HeroSection.tsx`)
- **Funciones/variables**: camelCase (`handleClick`)
- **Constantes**: UPPER_SNAKE_CASE (`PRODUCT_GRID_COLS`)
- **Tipos/Interfaces**: PascalCase (`ProductCardProps`)

#### Estructura de archivo:
```typescript
// 1. Imports
import { motion } from 'framer-motion';
import { ... } from '...';

// 2. Types/Interfaces
interface ComponentProps {
  // ...
}

// 3. Constants (si son específicos del componente)
const ANIMATION_VARIANTS = {
  // ...
};

// 4. Component
export function Component({ ... }: ComponentProps) {
  // Hooks primero
  // Event handlers
  // Render
}

// 5. Exports secundarios (si hay)
```

#### Reglas:
- Máximo **150 líneas por componente** (si es más → dividir)
- Props destructuring siempre
- Early returns para condicionales
- Comentarios solo cuando sea necesario (código autoexplicativo)

---

### 4. RESPONSIVE DESIGN (Mobile-First)

```typescript
// Siempre empezar con mobile, agregar breakpoints hacia arriba
<div className="
  flex flex-col          // Mobile: stack vertical
  md:flex-row            // Tablet+: horizontal
  gap-4                  // Mobile: gap pequeño
  md:gap-8               // Tablet+: gap más grande
  px-4                   // Mobile: padding lateral
  md:px-8 lg:px-16       // Desktop: padding mayor
">
```

**Breakpoints Next.js/Tailwind:**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

### 5. OPTIMIZACIÓN DE IMÁGENES

```typescript
import Image from 'next/image';

// ✅ Siempre usar next/image
<Image
  src="/images/product.jpg"
  alt="Descripción accesible"
  width={500}
  height={500}
  className="..."
  priority={false}  // true solo para hero
/>
```

---

### 6. ACCESIBILIDAD

- **Semantic HTML**: `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`
- **Alt text** descriptivo en imágenes
- **ARIA labels** cuando sea necesario
- **Contraste de colores** adecuado
- **Navegación por teclado** (focus states)

```typescript
<button
  className="... focus:ring-2 focus:ring-[#A61E22] focus:outline-none"
  aria-label="Comprar producto Rivolia"
>
  Comprar ahora
</button>
```

---

## INSTRUCCIONES ESPECÍFICAS PARA COPILOT

Al generar código, **SIEMPRE**:

1. ✅ **TypeScript estricto**: Todas las props tienen interfaces, no `any`
2. ✅ **Componentes pequeños**: Si pasa de 100 líneas, preguntar si dividir
3. ✅ **Reutilización**: Antes de crear algo, verificar si existe en ui/
4. ✅ **Tailwind only**: No usar CSS modules ni styled-components
5. ✅ **Mobile-first**: Siempre empezar sin breakpoint, luego md:, lg:
6. ✅ **Imports ordenados**: React → Next → Framer Motion → Componentes → Utils → Types
7. ✅ **Named exports**: `export function Component()` (no default)
8. ✅ **Consistencia**: Mismo patrón en todos los componentes similares
9. ✅ **Animaciones sutiles**: No abusar, usar con propósito
10. ✅ **Performance**: `whileInView` con `once: true` para scroll animations

---

## EJEMPLO DE COMPONENTE COMPLETO

```typescript
// components/ui/Button.tsx
import { motion, type HTMLMotionProps } from 'framer-motion';
import { type ReactNode } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, 'children'> {
  variant?: 'primary' | 'secondary' | 'whatsapp';
  children: ReactNode;
  href?: string;
}

export function Button({ 
  variant = 'primary', 
  children, 
  className = '',
  href,
  ...props 
}: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded font-['Montserrat'] text-xl font-normal transition-colors duration-300";
  
  const variants = {
    primary: 'bg-[#A61E22] hover:bg-[#651410] text-white',
    secondary: 'bg-[#4E2F2B] hover:bg-[#271110] text-white',
    whatsapp: 'bg-[#AF8846] hover:bg-[#4E2F2B] text-white',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClassName}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClassName}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
```

---

## DATOS ESTÁTICOS DE EJEMPLO

```typescript
// lib/constants.ts
export const PRODUCTS = [
  {
    id: 'sachet-individual',
    name: 'Sachet Individual',
    description: 'Ideal para probar o llevar contigo',
    image: '/images/products/sachet.jpg',
  },
  {
    id: 'pack-5-sachets',
    name: 'Pack 5 Sachets',
    description: 'Perfecto para la oficina',
    image: '/images/products/pack-5.jpg',
  },
  {
    id: 'pack-20-sachets',
    name: 'Pack 20 Sachets',
    description: 'Mejor precio por taza',
    image: '/images/products/pack-20.jpg',
  },
  {
    id: 'cafe-molido-bag',
    name: 'Café Molido 250g',
    description: 'Para preparar con tu método favorito',
    image: '/images/products/bag.jpg',
  },
] as const;

export const STEPS = [
  {
    id: 1,
    title: 'ABRE EL SACHET',
    description: 'Rasga por la línea punteada',
    image: '/images/steps/step1.jpg',
  },
  {
    id: 2,
    title: 'COLÓCALO EN TU TAZA',
    description: 'Posiciona el filtro',
    image: '/images/steps/step2.jpg',
  },
  {
    id: 3,
    title: 'VIERTE AGUA CALIENTE',
    description: 'Espera 2-3 minutos y disfruta',
    image: '/images/steps/step3.jpg',
  },
] as const;

export const TESTIMONIALS = [
  {
    id: '1',
    text: 'Ya no voy tanto a la cafetería. Rivolia me da el mismo café pero más práctico.',
    author: 'Mariana Contreras',
  },
  {
    id: '2',
    text: 'Viajo con esto en mi equipaje. Café de verdad en cualquier lugar.',
    author: 'Juan Diego',
  },
] as const;

export const COMPARISON_DATA = {
  rivolia: {
    title: 'RIVOLIA',
    subtitle: 'Café Filtrado',
    features: [
      { label: 'Tipo', value: 'Café filtrado real' },
      { label: 'Aroma', value: 'Aroma fresco' },
      { label: 'Sabor', value: 'Sabor natural restaurante' },
      { label: 'Preparación', value: 'Listo en 3 minutos' },
      { label: 'Calidad', value: 'Sin ácidos artificiales' },
    ],
  },
  instant: {
    title: 'CAFÉ INSTANTÁNEO',
    subtitle: '',
    features: [
      { label: 'Tipo', value: 'Polvo ultraprocesado' },
      { label: 'Aroma', value: 'Mínimo o inexistente' },
      { label: 'Sabor', value: 'Sabor a café soluble' },
      { label: 'Preparación', value: 'Listo en 1 minuto' },
      { label: 'Calidad', value: 'Menor calidad' },
    ],
  },
} as const;
```

---

## PRIORIDADES EN ORDEN

1. ✅ **Componentización extrema** (modularidad)
2. ✅ **Separación UI/Lógica** clara
3. ✅ **Código limpio y legible**
4. ✅ **TypeScript sin `any`**
5. ✅ **Mobile-first responsive**
6. ✅ **Animaciones con propósito** (Framer Motion)
7. ✅ **Performance optimizada**

---

## COMANDOS ÚTILES

```bash
# Instalación de dependencias
npm install framer-motion

# Desarrollo
npm run dev

# Build
npm run build

# Lint
npm run lint
```

---

**IMPORTANTE**: Este documento debe estar en la raíz del proyecto para que GitHub Copilot tenga contexto completo en cada archivo que genere.
