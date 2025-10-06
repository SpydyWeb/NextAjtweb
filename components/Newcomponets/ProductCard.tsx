"use client";

import React, { useState, } from "react";
import Image from "next/image";
import { individualproducts1, corporateproducts1 } from "@/lib/utilities";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import FooterCard from "../layout/footercard";
import { Footer } from "../layout/footer";
import CarImg from "@/public/assets/Images/ImagesIcons/car.png";
import { BiSolidZap } from "react-icons/bi";
import {
  IoArrowForwardCircleSharp,
  IoArrowBackCircleSharp,
} from "react-icons/io5";
const ProductCard: React.FC = () => {
  const { t } = useTranslation("homepage2");
  const [category, setCategory] = useState<"Retail" | "Corporate">("Retail");
  const [selectedProduct, setSelectedProduct] = useState<any>(
    individualproducts1[2]
  ); // default product
  //  const [featureProducts, setFeatureProducts]: any =
  //   useState(individualproducts);
  const router = useRouter();

  const handleCategoryClick = (service: "Retail" | "Corporate") => {
    setCategory(service);
    const products =
      service === "Retail" ? individualproducts1 : corporateproducts1;
    setSelectedProduct(products[0]); // reset to first product of that category
  };

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
  };

  const handleNavigation = () => {
    if (selectedProduct?.url) {
      router.push(selectedProduct.url);
    }
  };
  const products =
    category === "Retail" ? individualproducts1 : corporateproducts1;

  return (
    <>
      <div className="w-full bg-white mb-10">
        {/* TOP TABS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="flex gap-4 rounded-xl overflow-hidden shadow-sm">
            <button
              className={`flex-1 py-3 text-center font-semibold rounded-xl ${
                category === "Retail"
                  ? "bg-[#10426C] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => handleCategoryClick("Retail")}
            >
              {t("RetailProducts")}
            </button>
            <button
              className={`flex-1 py-3 text-center font-semibold rounded-xl ${
                category === "Corporate"
                  ? "bg-[#10426C] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
              onClick={() => handleCategoryClick("Corporate")}
            >
              {t("CorporateProducts")}
            </button>
          </div>

          {/* ICON CARDS ROW */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4 mt-6">
            {products.map((p: any) => {
              const isSelected = selectedProduct?.title === p.title;
              return (
                <button
                  key={p.title}
                  onClick={() => handleProductClick(p)}
                  className={`group flex flex-col items-center justify-center gap-3 px-4 py-2 rounded-2xl transition-all duration-200 border h-32 sm:h-36 md:h-40  ${
                    isSelected
                      ? "bg-sky-500 text-white border-transparent shadow"
                      : "bg-white text-gray-700 border-gray-200 hover:shadow-sm"
                  }`}
                > 
                  <div className="w-16 h-16 flex items-center justify-center">
                    <Image
                      src={p.icon}
                      alt={t(p.title) || p.title}
                      width={48}
                      height={48}
                      className={`object-contain w-10 h-10 ${
                        isSelected ? "filter brightness-0 invert" : ""
                      }`}
                    />
                  </div>
                  <span className="text-sm font-medium">
                    {t(p.title) || p.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* HERO AREA: LEFT FORM + RIGHT BANNER */}
         <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* LEFT FORM */}
            <div className="md:col-span-4">
              <div className="bg-[#E6F6FB] rounded-xl p-6 md:p-8 h-[30rem] md:h-full">
                <h4 className="text-lg font-semibold text-[#10426C] mb-1 py-2">
                  {t("InsureYourCarNow")}
                </h4>
                <p className="text-md text-[#2c6b82] mb-6">
                  {t("FreeAddonsWithThirdPartyCover")}⚡
                  {/* <BiSolidZap className="inline text-orange-400 w-5 h-12" /> */}
                </p>

                <label className="block text-sm font-medium text-[#10426C] mb-2">
                  {t("NationalID")}
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder={t("NationalIDPlaceholder")}
                  className="w-full rounded-md border border-white/30 px-4 py-3 mb-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0ea5be] bg-white"
                />

                <label className="block text-sm font-medium text-[#10426C] mb-2">
                  {t("PhoneNumber")}
                </label>
                <input
                  type="tel"
                  placeholder={t("PhoneNumberPlaceholder")}
                  className="w-full rounded-md border border-white/30 px-4 py-3 mb-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0ea5be] bg-white"
                />

                <label className="block text-sm font-medium text-[#10426C] mb-2">
                  {t("BirthDate")}
                </label>
                <input
                  type="text"
                  placeholder={t("BirthdatePlaceholder")}
                  className="w-full rounded-md border border-white/30 px-4 py-3 mb-6 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0ea5be] bg-white"
                />

                <button
                  onClick={handleNavigation}
                  className="w-full bg-[#10426C] text-white rounded-md py-3 font-semibold shadow-md"
                >
                  {t("InsureNow")}
                </button>
              </div>
            </div>

            {/* RIGHT BANNER */}
           <div className="md:col-span-8">
  <div className="rounded-xl bg-gray-50 p-8 md:p-10 shadow-sm relative overflow-hidden h-[31rem] md:h-full">
    {/* Text Content */}
    <div className="max-w-xl">
      <h2 className="text-3xl md:text-4xl font-extrabold text-sky-600">
        {t(selectedProduct?.title1) || "MOTOR INSURANCE"}
        {/* MOTOR INSURANCE */}
      </h2>
      <p className="text-gray-600 text-lg md:text-xl mt-2">
        {t("YouDriveWeInsure")}
      </p>
    </div>

    {/* Car + Man Image */}
    <div className="absolute center top-0 w-[65%] h-[85%] ml-[1.5rem]">
      <Image
        src={selectedProduct?.image || CarImg}
        alt={selectedProduct?.title || "Motor Insurance"}
        fill
        className="object-contain object-bottom"
        priority
      />
    </div>

    {/* Button with Arrow */}
    <div className="absolute left-8 bottom-6 flex items-center gap-2">
      <IoArrowForwardCircleSharp className="text-[#10426C] h-8 w-8" />
      <button
        onClick={handleNavigation}
        className="inline-flex items-center gap-2"
      >
        <span className="text-sm font-medium text-[#0d2e57]">
          {t("LEARNMORE")}
        </span>
      </button>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>

      {/* <Stats />
      <Ourclients />
      <LatestNews />
      <Contactus /> */}
      {/* <Footer />
      <FooterCard /> */}
    </>
  );
};

export default ProductCard;
