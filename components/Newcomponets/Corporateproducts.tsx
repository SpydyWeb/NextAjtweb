'use client';

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {corporateproducts} from '@/lib/utilities';
import Link from "next/link";
import Contactus from "../layout/Contactus";
import ProductCard from "../features/product-card";
import { useTranslation } from "react-i18next"; 
const Corporateproducts = () => {
   const [selected, setSelected] = useState("");
  const {t,i18n} = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
 const handleCardClick = (service: string) => {
    setSelected(service);
  };
  return (
    <>
   <div className="mt-4 w-[768px] md:w-full mx-auto border-gray-200 bg-white">
  <section className="px-4 py-10 md:px-16 md:py-14 text-center">
    <h2 className="text-2xl md:text-4xl font-bold text-[#10426C] mb-4">
      {t("CorporateInsurance")}
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-sm md:text-base">
      {t("CorporateInsurancedesc")}
    </p>

    <h3 className="text-lg md:text-xl font-bold text-[#10426C] mb-2">
      {t("OURPRODUCTS")}
    </h3>
    <p className="text-gray-500 mb-8 text-sm md:text-base">
      {t("Exploreproducts")}
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
      {/* {corporateproducts.map((product, idx) => (
        <ProductCard
          key={idx}
          product={product}
          isSelected={selectedProduct === (product.title)}
          onProductClick={handleProductClick}
        />
      ))} */}
          {corporateproducts.map(({ title, icon, description }) => {
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
              <Image
                src={icon}
                alt={t(title)}
                className={`h-[60px] mb-4 mx-auto object-contain transition duration-200 
                  ${isSelected ? "filter brightness-0 invert" : "group-hover:filter group-hover:brightness-0 group-hover:invert"}`}
              />
      
              <div className="text-lg font-semibold mb-2 group-hover:text-white">
                {t(title)}
              </div>
              <p className="text-sm min-h-[3rem] group-hover:text-white">
                {t(description)}
              </p>
      
              {(isSelected || title === "Motor") ? (
                <button
                  className={`mt-4 rounded-full font-semibold px-4 py-2 transition duration-200 ${
                    isSelected || title === "Motor"
                      ? "bg-white text-[#10426C]"
                      : "group-hover:bg-white group-hover:text-[#10426C]"
                  }`}
                >
                  {t("InsureNow")}!
                </button>
              ) : (
                <span
                  className={`inline-block mt-4 font-medium text-sm underline transition duration-200 ${
                    isSelected ? "text-white" : "text-[#1e3a8a] group-hover:text-white"
                  }`}
                >
                  {t("LearnMore")}
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
  </section>
</div>

     <Contactus/>
    </>
  );
};

export default Corporateproducts;
