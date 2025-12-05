export interface Feature {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  content: string;
  image?: string;
  rating?: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  duration?: string;
  image?: string;
}

export interface Staff {
  name: string;
  role: string;
  image: string;
  description?: string;
}

export interface CaseStudy {
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image?: string;
}
