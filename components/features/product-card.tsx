// ProductCard.tsx
'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getLocalizedText } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import type { StaticImageData } from "next/image";
interface ProductCardProps {
  product: {
    title: string;
    icon: string |StaticImageData ;
    url: string;
    description: string;
  };
  isSelected: boolean;
  onProductClick: (productTitle: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isSelected, onProductClick }) => {
  const { t } = useTranslation();
  const { title, icon, description } = product;

  return (
    <div
      // onClick={() => onProductClick(title)}
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

        <div className="relative min-h-[4.5rem] sm:mt-8">
          <p
            className={`text-sm transition-opacity duration-200 
              ${isSelected ? "text-white" : "text-gray-800"} group-hover:opacity-0`}
          >
            {t(description)}
          </p>
          <span
            className={`text-sm transition-opacity duration-200 
              ${isSelected ? "text-white" : "text-[#10426C]"} group-hover:opacity-0 underline mb-20`}
          >
            {t("LearnMore")}
          </span>

          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
};

export default ProductCard;