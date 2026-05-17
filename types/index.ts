export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  text: string;
  author: string;
  role?: string;
}

export interface ComparisonFeature {
  label: string;
  value: string;
}

export interface ComparisonSide {
  title: string;
  subtitle: string;
  features: readonly ComparisonFeature[];
}

export interface ComparisonData {
  rivolia: ComparisonSide;
  instant: ComparisonSide;
}
