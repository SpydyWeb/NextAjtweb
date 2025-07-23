'use client';

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {individualproducts} from '@/lib/utilities';
import Link from "next/link";
import Contactus from "../layout/Contactus";
import ProductCard from "../features/product-card";
import { getLocalizedText } from "@/lib/utils";
import utilities from "@/Utilities.json";
const IndividualSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
 const [isLangAr, setLangAr] = useState<boolean>(
    (typeof window !== "undefined" && localStorage.getItem("lang") === "ar") ||
      false
  );
  const handleProductClick = (productTitle: string) => {
    setSelectedProduct(productTitle);
  };
  return (
    <>
    <div className="mt-4 w-full  border-gray-200 bg-white">
      <section className="px-4 py-12 md:px-16 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#10426C] mb-4">
          Retail Insurance
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-sm md:text-base">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
        </p>

        {/* Subheading */}
        <h3 className="text-xl font-bold text-[#10426C] mb-2">
          OUR PRODUCTS
        </h3>
        <p className="text-gray-500 mb-10 text-sm md:text-base">
          Explore our wide range of products!
        </p>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
           {individualproducts.map((product, idx) => (
              <ProductCard
                key={idx}
                product={product}
                isSelected={selectedProduct === product.title}
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

export default IndividualSection;
