"use client";
import React from "react";
import Vision2030 from "../../public/assets/Images/Boardmembers/Vision2030.png";
import Image from "next/image";
import { Steps } from "@/lib/utilities";
import BoardMembers from "../Newcomponets/BoardMembers";
import { useTranslation } from "react-i18next";
const AboutUs = () => {
  const { t } = useTranslation("aboutus");
  return (
    <>
      <div className="flex flex-col min-h-screen font-sans text-[#1c1c1c] bg-white mt-4">
        {/* About Us Section */}
        <section className="px-6 md:px-20 xl:px-[12rem]">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-2 text-[#10426C]">
              {t("AboutUsHeader")}
            </h1>
            <p className=" text-black-500 font-semibold text-sm sm:text-xl">
              {t("CompanyProfileTab")}
              <br />
              {t("CompanyProfileTab1")}
            </p>
          </div>

          {/* Who We Are Section */}
          <div className="grid md:grid-cols-2 items-center gap-[8rem] mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#002c60] text-justify">
                {t("who")} <span className="text-[#1e3a8a]">{t("weare")}</span>
              </h3>
              <p className="leading-relaxed text-[#10426C] text-sm sm:text-xl">
                {t("CompanyProfilDesc1")}
                <br />
                {t("CompanyProfilDesc21")}
              </p>
            </div>
            <div className="flex justify-center lg:p-[1rem] lg:ml-[100px]">
              <Image src={Vision2030} alt="Vision 2030" className="w-full" />
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="bg-white px-4 md:px-24 py-16 relative overflow-hidden">
          <h2 className="text-3xl font-bold text-center text-[#1e3a8a] mb-20 ml-[-50%]">
            {t("Our")} <span className="text-[#002c60]">{t("Story")}</span>
          </h2>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-18">
            {Steps.map((step, index) => {
              let mtClass = "";
              if (index === 1) {
                mtClass = "md:mt-32";
              } else if (index === 3) {
                mtClass = "md:mt-[11rem]";
              }

              return (
                <div
                  key={step.id}
                  className={`flex flex-col items-center px-4 relative step-circle${
                    index + 1
                  } ${mtClass}`}
                >
                  <div className="relative">
                    <img
                      src={step.BgImage.src}
                      alt="backgroundimages"
                      className="w-24 h-24 relative z-[1]"
                    />
                    <span className="text-[#002c60] text-xl font-bold absolute top-[37%] left-[37%] z-[2]">
                      {step.id}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#002c60] mt-12 mb-2 text-left">
                    {t(step.title)}
                  </h3>
                  <p className="text-ms text-gray-700 text-left">
                    {t(step.text)}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <BoardMembers />
    </>
  );
};

export default AboutUs;
