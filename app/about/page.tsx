import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of working together to achieve great things.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, never settling for mediocrity.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about creating meaningful solutions that make a difference.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Us</Badge>
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-muted-foreground">
            Building the future, one project at a time
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                We are a team of passionate developers and designers who believe in creating 
                exceptional digital experiences that make a real difference in people's lives.
              </p>
              <p>
                Founded in 2020, we've been on a mission to bridge the gap between innovative 
                technology and human-centered design, creating solutions that are both powerful 
                and intuitive.
              </p>
              <p>
                Our diverse team brings together expertise from various fields, allowing us to 
                approach challenges from multiple perspectives and deliver comprehensive solutions.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <div className="text-white text-center">
                <div className="text-6xl font-bold mb-2">5+</div>
                <div className="text-lg opacity-90">Years of Innovation</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center bg-muted rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's create something amazing together. Get in touch to discuss your project.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}