
"use client";
import Image from 'next/image';
import globelogImg from '../../assets/Images/globelogoImg.png';
import { useTranslation } from "react-i18next";
export function Stats() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="relative text-center py-10 px-4">
        {/* Globe Background Image */}
        <div className="relative z-10 w-full max-w-2xl aspect-square mx-auto flex flex-col justify-center items-center p-6 sm:p-8 overflow-hidden">
          <Image
            src={globelogImg}
            alt="Globe Background"
            fill
            className="object-contain object-center z-0"
            priority
          />

          {/* Foreground Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#10426C]">
               {t("MoreThan")}  <span className="text-blue-500">{t("Years")}</span><br />
              {t("InsuranceServices")}
            </h2>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed max-w-xl mx-auto">
              {t("Aim")}
            </p>
            <button className="mt-6 px-6 py-2 border border-[#123766] text-[#10426C] rounded-full text-sm sm:text-base font-medium bg-transparent hover:bg-[#10426C] hover:text-white transition-colors duration-200">
              {t("AboutAljazirabtn")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
