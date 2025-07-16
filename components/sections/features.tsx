import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Shield, Smartphone, Code, Globe, Users } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized performance with modern build tools and caching strategies.',
    },
    {
      icon: Shield,
      title: 'Secure by Default',
      description: 'Built-in security features and best practices to protect your application.',
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Responsive design that works seamlessly across all devices.',
    },
    {
      icon: Code,
      title: 'Developer Friendly',
      description: 'Clean code, comprehensive documentation, and excellent DX.',
    },
    {
      icon: Globe,
      title: 'Global CDN',
      description: 'Deploy worldwide with automatic edge optimization.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built for teams with role-based access and collaboration tools.',
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale your web applications
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}