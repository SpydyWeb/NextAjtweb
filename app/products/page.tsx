import { ProductCard } from '@/components/features/product-card';
import { Badge } from '@/components/ui/badge';

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Web Development Suite',
      description: 'Complete toolkit for modern web development with React, Next.js, and TypeScript.',
      price: '$99',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['React 18', 'Next.js 13', 'TypeScript', 'Tailwind CSS'],
      popular: true,
    },
    {
      id: 2,
      name: 'Design System Pro',
      description: 'Professional design system with components, tokens, and guidelines.',
      price: '$149',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Component Library', 'Design Tokens', 'Documentation', 'Figma Kit'],
      popular: false,
    },
    {
      id: 3,
      name: 'Mobile App Starter',
      description: 'Cross-platform mobile app template with authentication and backend.',
      price: '$199',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['React Native', 'Authentication', 'Backend API', 'Push Notifications'],
      popular: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">Products</Badge>
        <h1 className="text-4xl font-bold mb-4">Our Products</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover our range of professional tools and templates designed to accelerate your development process
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}