import React from "react";
import { useTranslation } from "react-i18next";
import {Advantagess} from "@/lib/utilities";

// const advantages = [
//   { text: "All of our products are compliant with the Islamic Sharia Law" },
//   { text: "Competitive prices." },
//   { text: "Excellence in providing professional services" },
//   { text: "Easy claim submission through website." },
// ];

const Advantages: React.FC = () => {
  const {t}=useTranslation()
  return (
    <div className="bg-[#184A7C] py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-10">
          {t("Advantages")}
        </h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {Advantagess.map((item) => (
        <div
          key={t(item.text)}
          className="relative bg-white rounded-xl pt-12 pb-6 px-6 shadow-sm"
        >
          <div className="absolute -top-8 left-1/2 -translate-x-1/2">
            <div className="w-14 h-14 rounded-full bg-[#184A7C] border-[0.3125rem] border-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
          </div>
          <p className="text-[#184A7C] text-center text-sm sm:text-base leading-relaxed">
            {t(item.text)}
          </p>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default Advantages;
