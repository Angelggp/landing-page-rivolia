import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { StepsSection } from '@/components/sections/StepsSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <StepsSection />
        <BenefitsSection />
        <ComparisonSection />
        <GallerySection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
