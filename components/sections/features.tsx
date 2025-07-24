
"use client";

import { useState } from "react";
import { Car,Stethoscope,ShieldAlert, Home,Gavel,Plane,PiggyBank,} from "lucide-react";
import {corporateproducts,individualproducts}from "@/lib/utilities";
import Image from 'next/image';
import { useTranslation } from "react-i18next";
export function Features() {
    const { t, i18n } = useTranslation();
   const [products,setProducts] =useState('Retail');
  const [selectedCategory, setSelectedCategory] = useState("Retail");
 const [selected, setSelected] = useState("");

 const handleCardClick = (service: string) => {
    setSelected(service);
  };
  return (
    <section className="py-10 ">
      <h2 className="text-center text-2xl font-bold text-[#10426C] mb-2">{t("Ourservice")}</h2>
      <p className="text-center text-2xl font-bold mb-6">{t("Exploreproducts")}</p>

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
          {t("RetailProducts")}
        </button>
        <button
          onClick={() => setProducts("Corporate")}
          className={`w-[280px] md:w-[350px] px-6 py-3 border rounded-full font-semibold transition ${
            products === "Corporate"
              ? "bg-[#10426C] text-white border-gray-300"
              : "bg-gray-100 text-gray-800 border-gray-300"
          }`}
        >
          {t("CorporateProducts")}
        </button>
      </div>

      {/* Product Cards */}
     {products === "Corporate" && (
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4 max-w-[80rem] mx-auto px-6 py-6">


 {corporateproducts.map(({ title, icon, description }) => {
  const isSelected = selected === title;

  return (
    // <div
    //   key={title}
    //   // onClick={() => handleCardClick(title)}
    //   className={`group relative cursor-pointer p-6 rounded-xl shadow-sm text-center overflow-hidden transition-all duration-200 border
    //     ${isSelected ? "bg-[#0d2e57] text-white border-none" : "bg-white text-gray-800 border-gray-200"}`}
    // >
    <div
  key={title}
  className={`group relative cursor-pointer p-6 rounded-xl shadow-sm text-center overflow-hidden transition-all duration-200 border
    w-[200px] h-[250px] sm:w-[270px] sm:h-[320px] md:w-[280px] md:h-[340px] lg:w-[300px] lg:h-[360px]
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

        {/* Description + hover actions in a fixed-height wrapper */}
        <div className="relative min-h-[4.5rem]">
          {/* Description (visible by default, hidden on hover) */}
          <p
            className={`text-sm transition-opacity duration-200
              ${isSelected ? "text-white" : "text-gray-800"}
              group-hover:opacity-0`}
          >
            {t(description)}
          </p>
          <span  className={`text-sm transition-opacity duration-200 
                ${isSelected ? "text-white" : "text-gray-800"} group-hover:opacity-0 underline mt-20`}>
              {t("LearnMore")}
            </span>
          {/* Hover action buttons (hidden by default, visible on hover) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-20">
             <span className="mb-2 font-medium text-sm underline text-white">
              {t("LearnMore")}
            </span>
            <button
              className="bg-white text-[#10426C] rounded-full font-semibold px-4 py-2"
            >
              {t("InsureNow")}!
            </button>
           
          </div>
        </div>
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
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[80rem] mx-auto px-4 py-8">
{individualproducts.map(({ title, icon, description }) => {
  const isSelected = selected === title;

  return (
    <div
      key={title}
      // onClick={() => handleCardClick(title)}
       className={`group relative cursor-pointer p-6 rounded-xl shadow-sm text-center overflow-hidden transition-all duration-200 border
    w-[200px] h-[250px] sm:w-[270px] sm:h-[320px] md:w-[280px] md:h-[340px] lg:w-[300px] lg:h-[360px]
    ${isSelected ? "bg-[#0d2e57] text-white border-none" : "bg-white text-gray-800 border-gray-200"}`}
    >
      {/* Hover background animation layer */}
      <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-[#0d2e57] transition-all duration-300 ease-in-out z-0" />

      {/* Foreground content */}
      <div className="relative z-10">
        <Image
          src={icon}
          alt={t(title)}
          className={`h-[60px] mb-4 mx-auto object-contain transition duration-200
            ${isSelected ? "filter brightness-0 invert" : "group-hover:filter group-hover:brightness-0 group-hover:invert"}`}
        />

        <div className="text-lg font-semibold mb-2 group-hover:text-white">{t(title)}</div>

        {/* Fixed height container to prevent layout shift */}
        <div className="relative min-h-[4.5rem]">
          {/* Description - shown normally, hidden on hover */}
          <p className={`text-sm transition-opacity duration-200
            ${isSelected ? "text-white" : "text-gray-800"} 
            group-hover:opacity-0`}>
            {t(description)}
          </p>
          <span  className={`text-sm transition-opacity duration-200 
                ${isSelected ? "text-white" : "text-gray-800"} group-hover:opacity-0 underline mb-20`}>
              {t("LearnMore")}
            </span>
          {/* Hover actions - hidden normally, shown on hover */}
          <div className={`absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-20`}>
              <span className="mb-2 font-medium text-sm underline text-white">
              {t("LearnMore")}
            </span>
            <button className="bg-white text-[#10426C] rounded-full font-semibold px-4 py-2">
              {t("InsureNow")}!
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
)}

    </section>
  );
}
