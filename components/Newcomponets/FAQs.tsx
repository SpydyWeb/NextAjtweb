import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {faqData} from "@/lib/utilities"
import { useTranslation } from "react-i18next";


const FAQ: React.FC = () => {
  const {t}=useTranslation("travelplan")
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold text-[#10426C] mb-6">{t("FAQs")}</h2>
      <div className="space-y-3">
  {faqData.map((item, index) => (
    <div
      key={item.answer}
      className={`border rounded-lg overflow-hidden transition-all ${
        activeIndex === index ? "border-gray-300" : "bg-gray-50"
      }`}
    >
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full flex justify-between items-center px-5 py-4 text-left text-[#10426C] font-semibold"
      >
        {t(item.question)}
        <ChevronDownIcon
          className={`w-5 h-5 transform transition-transform duration-300 ${
            activeIndex === index ? "rotate-180" : ""
          }`}
        />
      </button>
      {activeIndex === index && (
        <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
          {t(item.answer)}
        </div>
      )}
    </div>
  ))}
</div>

    </div>
  );
};

export default FAQ;
