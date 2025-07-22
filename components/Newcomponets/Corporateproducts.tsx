'use client';

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {products} from '@/lib/utilities';
import Link from "next/link";
import Contactus from "../layout/Contactus";
import ProductCard from "../features/product-card";
import utilities from "@/Utilities.json";
import { getLocalizedText } from "@/lib/utils";
const Corporateproducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
 const [isLangAr, setLangAr] = useState<boolean>(
    (typeof window !== "undefined" && localStorage.getItem("lang") === "ar") ||
      false
  );
  const handleProductClick = (productTitle: string) => {
    setSelectedProduct(productTitle);
  };
  const { NavigationData } = utilities;
   const lang: string = isLangAr ? "ar" : "en";
  return (
    <>
   <div className="mt-4 w-[768px] md:w-full mx-auto border-gray-200 bg-white">
  <section className="px-4 py-10 md:px-16 md:py-14 text-center">
    <h2 className="text-2xl md:text-4xl font-bold text-[#10426C] mb-4">
      Corporate Insurance
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm md:text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>

    <h3 className="text-lg md:text-xl font-bold text-[#10426C] mb-2">
      OUR PRODUCTS
    </h3>
    <p className="text-gray-500 mb-8 text-sm md:text-base">
      Explore our wide range of products!
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
      {NavigationData.corporateProducts.items.map((product, idx) => (
        <ProductCard
          key={idx}
          product={product}
          isSelected={selectedProduct === getLocalizedText(product.label, lang)}
          onProductClick={handleProductClick}
        />
      ))}
    </div>
  </section>
</div>

     <Contactus/>
    </>
  );
};

export default Corporateproducts;
