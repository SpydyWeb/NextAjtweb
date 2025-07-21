'use client';

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {individualproducts} from '@/lib/utilities';
import Link from "next/link";
import Contactus from "../layout/Contactus";
const Individualproducts = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleProductClick = (productTitle: string) => {
    setSelectedProduct(productTitle);
  };

  return (
    <>
    <div className="mt-12 w-full border-b border-gray-200 bg-white">
      <section className="px-4 py-12 md:px-16 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#10426C] mb-4">
          Individual Insurance
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-sm md:text-base">
          Discover our wide range of insurance products tailored to meet corporate needs.
        </p>

        {/* Subheading */}
        <h3 className="text-xl font-bold text-[#10426C] mb-2">
          OUR PRODUCTS
        </h3>
        <p className="text-gray-500 mb-10 text-sm md:text-base">
          Explore our wide range of products!
        </p>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {individualproducts.map((product, idx) => {
            const isSelected = selectedProduct === product.title;

            return (
              <div
                key={idx}
                onClick={() => handleProductClick(product.title)}
                className={`relative cursor-pointer rounded-2xl border transition duration-300 p-6 flex flex-col justify-between items-center min-h-[260px]
                ${isSelected ? 'bg-[#0d2e57] text-white' : 'bg-white text-[#1c1c1c] border-gray-200 hover:shadow-lg'}`}
              >
                {/* Icon */}
                <div className="mb-4 h-12 flex items-center justify-center">
                  <Image
                    src={product.icon}
                    alt={product.title}
                    className={`h-10 w-10 object-contain ${isSelected ? 'filter brightness-0 invert' : ''}`}
                  />
                </div>

                {/* Title */}
                <h4 className="font-semibold text-base mb-1">{product.title}</h4>

                {/* Description */}
                <p className="text-sm text-center mb-4 px-2 min-h-[3rem]">
                  {product.description}
                </p>

                {/* CTA */}
                {isSelected && product.title === "Motor" ? (
                  <button className="mt-auto bg-white text-[#10426C] font-semibold py-2 px-5 rounded-full text-sm hover:bg-gray-100 transition">
                    Insure now
                  </button>
                ) : (
                  <span
                    className={`mt-auto font-medium text-sm underline ${
                      isSelected ? 'text-white' : 'text-[#1e3a8a]'
                    } hover:no-underline`}
                  >
                    Learn More
                  </span>
                )}

                {/* Bottom Accent */}
                {!isSelected && (
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-[#10426C] rounded-b-2xl" />
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
    <Contactus/>
    </>
  );
};

export default Individualproducts;
