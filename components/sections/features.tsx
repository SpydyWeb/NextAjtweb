// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Zap, Shield, Smartphone, Code, Globe, Users } from 'lucide-react';

// export function Features() {
//   const features = [
//     {
//       icon: Zap,
//       title: 'Lightning Fast',
//       description: 'Optimized performance with modern build tools and caching strategies.',
//     },
//     {
//       icon: Shield,
//       title: 'Secure by Default',
//       description: 'Built-in security features and best practices to protect your application.',
//     },
//     {
//       icon: Smartphone,
//       title: 'Mobile First',
//       description: 'Responsive design that works seamlessly across all devices.',
//     },
//     {
//       icon: Code,
//       title: 'Developer Friendly',
//       description: 'Clean code, comprehensive documentation, and excellent DX.',
//     },
//     {
//       icon: Globe,
//       title: 'Global CDN',
//       description: 'Deploy worldwide with automatic edge optimization.',
//     },
//     {
//       icon: Users,
//       title: 'Team Collaboration',
//       description: 'Built for teams with role-based access and collaboration tools.',
//     },
//   ];

//   return (
//     <section className="py-20">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold mb-4">OUR SERVICES</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             Explore our wide range of produts !
//           </p>
//         </div>

//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {features.map((feature, index) => (
//             <Card key={index} className="hover:shadow-lg transition-shadow">
//               <CardHeader>
//                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//                   <feature.icon className="w-6 h-6 text-blue-600" />
//                 </div>
//                 <CardTitle>{feature.title}</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <CardDescription className="text-base">
//                   {feature.description}
//                 </CardDescription>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { Car,Stethoscope,ShieldAlert, Home,Gavel,Plane,PiggyBank,} from "lucide-react";
import {products1,products2}from "@/lib/utilities";
export function Features() {
   const [products,setProducts] =useState('Retail');
  const [selectedCategory, setSelectedCategory] = useState("Retail");
 const [selected, setSelected] = useState("");

 const handleCardClick = (service: string) => {
    setSelected(service);
  };
  return (
    <section className="py-10 bg-gray-50">
      <h2 className="text-center text-2xl font-bold text-[#10426C] mb-2">OUR SERVICE</h2>
      <p className="text-center text-2xl font-bold mb-6">Explore our wide range of products</p>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap px-4">
        <button
          onClick={() => setProducts("Retail")}
          className={`w-[280px] md:w-[350px] px-6 py-3 border rounded-full font-semibold transition ${
            products === "Retail"
              ? "bg-[#10426C] text-white border-gray-300"
              : "bg-gray-100 text-gray-800 border-gray-300"
          }`}
        >
          Retail Products
        </button>
        <button
          onClick={() => setProducts("Corporate")}
          className={`w-[280px] md:w-[350px] px-6 py-3 border rounded-full font-semibold transition ${
            products === "Corporate"
              ? "bg-[#10426C] text-white border-gray-300"
              : "bg-gray-100 text-gray-800 border-gray-300"
          }`}
        >
          Corporate Products
        </button>
      </div>

      {/* Product Cards */}
     {products === "Corporate" && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[96rem] mx-auto px-4 py-8">
    {products1.map(({ title, icon, description }) => {
      const isSelected = selected === title;
      return (
   <div
  key={title}
  onClick={() => handleCardClick(title)}
  className={`group relative cursor-pointer p-6 rounded-xl shadow-sm text-center overflow-hidden transition-all duration-200 border
    ${isSelected ? "bg-[#0d2e57] text-white border-none" : "bg-white text-gray-800 border-gray-200"}`}
>
  {/* Background animation layer */}
  <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-[#0d2e57] transition-all duration-300 ease-in-out z-0" />

  {/* Foreground content */}
  <div className="relative z-10">
    <img
      src={icon}
      alt={title}
      className={`h-[60px] mb-4 mx-auto object-contain transition duration-200 
        ${isSelected ? "filter brightness-0 invert" : "group-hover:filter group-hover:brightness-0 group-hover:invert"}`}
    />

   <div className="text-lg font-semibold mb-2 group-hover:text-white">{title}</div>
<p className="text-sm min-h-[3rem] group-hover:text-white">{description}</p>

    {(isSelected || title === "Motor") ? (
      <button
        className={`mt-4 rounded-full font-semibold px-4 py-2 transition duration-200 ${
          isSelected || title === "Motor"
            ? "bg-white text-[#10426C]"
            : "group-hover:bg-white group-hover:text-[#10426C]"
        }`}
      >
        InsureNow !
      </button>
    ) : (
      <span
        className={`inline-block mt-4 font-medium text-sm underline transition duration-200 ${
          isSelected ? "text-white" : "text-[#1e3a8a] group-hover:text-white"
        }`}
      >
        LearnMore
      </span>
    )}
  </div>

  {/* Bottom blue strip only when not selected */}
  {!isSelected && (
    <div className="absolute bottom-0 left-0 h-2 w-full bg-[#10426C] rounded-b-xl z-10" />
  )}
</div>

      );
    })}
  </div>
)}

{products === "Retail" && (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[96rem] mx-auto px-4 py-8">
    {products2.map(({ title, icon, description }) => {
      const isSelected = selected === title;
      return (
       <div
  key={title}
  onClick={() => handleCardClick(title)}
  className={`group cursor-pointer p-6 rounded-xl shadow-sm text-center relative overflow-hidden transition-all duration-200 border
    ${isSelected ? "bg-[#0d2e57] text-white border-none" : "bg-white text-gray-800 border border-gray-200"}`}
>
  {/* Hover background animation layer */}
  <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-[#0d2e57] transition-all duration-300 ease-in-out z-0" />

  {/* Foreground content */}
  <div className="relative z-10">
    <img
      src={icon}
      alt={title}
      className={`h-[60px] mb-4 mx-auto object-contain transition duration-200 ${
        isSelected ? "filter brightness-0 invert" : "group-hover:filter group-hover:brightness-0 group-hover:invert"
      }`}
    />

    <div className="text-lg font-semibold mb-2 group-hover:text-white">{title}</div>
    <p className="text-sm min-h-[3rem] group-hover:text-white">{description}</p>

    {isSelected && title === "Motor" ? (
      <button className="mt-4 bg-white text-[#10426C] rounded-full font-semibold px-4 py-2">
        InsureNow !
      </button>
    ) : (
      <span
        className={`inline-block mt-4 font-medium text-sm underline transition duration-200 ${
          isSelected ? "text-white" : "text-[#1e3a8a] group-hover:text-white"
        }`}
      >
        LearnMore
      </span>
    )}
  </div>

  {/* Bottom bar only for non-selected */}
  {!isSelected && (
    <div className="absolute bottom-0 left-0 h-2 w-full bg-[#10426C] rounded-b-xl z-10" />
  )}
</div>

      );
    })}
  </div>
)}

    </section>
  );
}
