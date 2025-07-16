import { ContactForm } from '@/components/forms/contact-form';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@company.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm',
    },
    {
      icon: MapPin,
      title: 'Office',
      content: '123 Business St, City, State 12345',
      description: 'Come visit our office',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon-Fri: 8am-6pm',
      description: 'Saturday: 9am-4pm',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <Badge variant="outline" className="mb-4">Contact</Badge>
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold mb-1">{info.content}</div>
                  <CardDescription>{info.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}