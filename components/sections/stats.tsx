
"use client";
import Image from 'next/image';
import globeImg from '../../public/assets/Images/ImagesIcons/globeImg.png';
import { useTranslation } from "react-i18next";
export function Stats() {
  const { t, i18n } = useTranslation();
  return (
    <>
  <section className="relative text-center py-10 px-4">
  {/* Globe Background Image */}
  <div className="relative z-10 w-full max-w-[38.75rem] aspect-square mx-auto flex flex-col justify-center items-center p-4 sm:p-6 md:p-8 overflow-hidden">
    <Image
      src={globeImg}
      alt="Globe Background"
      fill
      className="object-contain object-center z-0"
      priority
    />

    {/* Foreground Content */}
    <div className="relative z-10 text-center w-full">
      <h2 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] xl:text-5xl font-bold text-[#10426C] leading-tight">
        {t("MoreThan")}{" "}
        <span className="text-blue-500">{t("Years")}</span>
        <br />
        {t("InsuranceServices")}
      </h2>

      <p className="mt-4 text-xs sm:text-base md:text-lg text-gray-800 leading-relaxed max-w-2xl mx-auto">
        {t("Aim")}
      </p>

      <button className="mt-2 sm:mt-6 px-2 sm:px-6 py-2 sm:py-3 border border-[#123766] text-[#10426C] rounded-full text-sm sm:text-base font-medium bg-transparent hover:bg-[#10426C] hover:text-white transition-colors duration-200">
        {t("AboutAljazirabtn")}
      </button>
    </div>
  </div>
</section>

    </>
  );
}
