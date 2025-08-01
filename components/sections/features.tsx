
"use client";

import { useEffect, useState } from "react";
import { Car,Stethoscope,ShieldAlert, Home,Gavel,Plane,PiggyBank,} from "lucide-react";
import {corporateproducts,individualproducts}from "@/lib/utilities";
import Image from 'next/image';
import { useTranslation } from "react-i18next";
export function Features() {
    const { t, i18n } = useTranslation();
   
   const [featureProducts ,setFeatureProducts]:any = useState(corporateproducts);
  
 const [selected, setSelected] = useState("Corporate");

 const handleCardClick = (service: string) => {
    setSelected(service);
    setFeatureProducts(service==="Corporate"?corporateproducts:individualproducts)
  };
  return (
    <section className="py-10 ">
      <h2 className="text-center text-2xl font-bold text-[#10426C] mb-2">{t("Ourservice")}</h2>
      <p className="text-center text-2xl font-bold mb-6">{t("Exploreproducts")}</p>

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-8  px-4">
        <button
          onClick={() => handleCardClick("Retail")}
          className={`w-[280px] md:w-[350px] sm:px-6 sm:py-3 p-2 border rounded-full font-semibold transition ${
            selected === "Retail"
              ? "bg-[#10426C] text-white border-gray-300"
              : "bg-gray-100 text-gray-800 border-gray-300"
          }`}
        >
          {t("RetailProducts")}
        </button>
        <button
          onClick={() => handleCardClick("Corporate")}
          className={`w-[280px] md:w-[350px] sm:px-6 sm:py-3 p-2 border rounded-full font-semibold transition ${
            selected === "Corporate"
              ? "bg-[#10426C] text-white border-gray-300"
              : "bg-gray-100 text-gray-800 border-gray-300"
          }`}
        >
          {t("CorporateProducts")}
        </button>
      </div>

      {/* Product Cards */}
    
 <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-4 max-w-[80rem] mx-auto sm:px-6 sm:py-6 p-1 text-wrap: wrap justify-items-center">


 {featureProducts.map(({ title, icon, description }:any) => {
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
    w-[200px] h-[250px] sm:w-[270px] sm:h-[320px] md:w-[230px] md:h-[340px] lg:w-[240px] xl:w-[300px] lg:h-[360px]
    ${isSelected ? "bg-[#0d2e57] text-white border-none" : "bg-white text-gray-800 border-gray-200"}`}
>

      <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-full bg-[#0d2e57] transition-all duration-300 ease-in-out z-0" />

      <div className="relative z-10 sm:mt-12 mt-0">
        <Image
          src={icon}
          alt={t(title)}
          className={`h-[60px] mb-4 mx-auto object-contain transition duration-200 
            ${isSelected ? "filter brightness-0 invert" : "group-hover:filter group-hover:brightness-0 group-hover:invert"}`}
        />

        <div className="text-lg font-semibold mb-2 group-hover:text-white">
          {t(title)}
        </div>
        <div className="relative sm:min-h-[4.5rem] sm:mt-8 mt-0">
          <p
            className={`text-sm transition-opacity duration-200
              ${isSelected ? "text-white" : "text-gray-800"}
              group-hover:hidden`}
          >
            {t(description)}
          </p>
          <span  className={`text-sm transition-opacity duration-200 
                ${isSelected ? "text-white" : "text-[#10426C]"} group-hover:opacity-0 underline mt-20`}>
              {t("Learnmore")}
            </span>
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 sm:mt-20 mt-8">
             <span className="mb-2 font-medium text-sm underline text-white">
              {t("Learnmore")}
            </span>
            <button
              className="bg-white text-[#10426C] rounded-full font-semibold px-4 py-2"
            >
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
  );
}
