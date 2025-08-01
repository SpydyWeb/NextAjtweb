'use client';

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {individualproducts} from '@/lib/utilities';
import Link from "next/link";
import Contactus from "../layout/Contactus";
import ProductCard from "../features/product-card";
import utilities from "@/Utilities.json";
import { useTranslation } from "react-i18next";
const IndividualSection = () => {
     const [selected, setSelected] = useState("");
    const {t,i18n} = useTranslation();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
 const handleCardClick = (service: string) => {
    setSelected(service);
  };
//   const handleCardClick = (title: string) => {
//   setSelectedProduct(title);
// };
  return (
    <>
    <div className="mt-4 w-full  border-gray-200 bg-white">
      <section className="px-4 py-12 md:px-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#10426C] mb-4">
          {t("RetailInsurance")}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-sm md:text-base">
           {t("RetailInsurancedesc")}
        </p>
        <h3 className="text-xl font-bold text-[#10426C] mb-2">
          {t("OURPRODUCTS")}
        </h3>
        <p className="text-gray-500 mb-10 text-sm md:text-base">
          {t("Exploreproducts")}
        </p>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-x-2 gap-y-4 max-w-[60rem] mx-auto px-6 py-6">
      {/* {individualproducts.map((product, idx) => (
        <ProductCard
          key={idx}
          product={product}
          isSelected={selectedProduct === product.title}
          onProductClick={handleCardClick}
        />
      ))} */}
  {individualproducts.map(({ title, icon, description }) => {
    const isSelected = selected === title;

    return (
      <div
        key={title}
        className={`group relative cursor-pointer p-6 rounded-xl shadow-sm text-center overflow-hidden transition-all duration-200 border
          w-full h-[250px] sm:h-[320px] md:h-[340px] lg:h-[360px]
          ${isSelected ? "bg-[#0d2e57] text-white border-none" : "bg-white text-gray-800 border-gray-200"}`}
      >
        <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-[#0d2e57] transition-all duration-300 ease-in-out z-0" />
        <div className="relative z-10 sm:mt-12">
          <Image
            src={icon}
            alt={t(title)}
            className={`h-[60px] mb-4 mx-auto object-contain transition duration-200
              ${isSelected ? "filter brightness-0 invert" : "group-hover:filter group-hover:brightness-0 group-hover:invert"}`}
          />
          <div className="text-lg font-semibold mb-2 group-hover:text-white">{t(title)}</div>
         <div className="relative min-h-[4.5rem]  sm:mt-8">
        <p
          className={`text-sm transition-opacity duration-200 
            ${isSelected ? "text-white" : "text-gray-800"} group-hover:opacity-0`}
        >
          {t(description)}
        </p>
        <span  className={`text-sm transition-opacity duration-200 
            ${isSelected ? "text-white" : "text-[#10426C]"} group-hover:opacity-0 underline mb-20`}>
          {t("Learnmore")}
        </span>
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="mb-2 font-medium text-sm underline text-white">
            {t("Learnmore")}
          </span>
          <button className="bg-white text-[#10426C] rounded-full font-semibold px-4 py-2">
            {t("insurenow")}
          </button>
        </div>
      </div>

        </div>
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

export default IndividualSection;
