export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'admin' | 'user';
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  features: string[];
  popular: boolean;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
  
}
 export interface NavLink  {
  label: string;
  path: string;
};

export interface NavSection  {
  title: string;
  links: NavLink[];
};

export interface NavData  {
  [key: string]: NavSection;
};