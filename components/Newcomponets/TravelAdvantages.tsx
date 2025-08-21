import React from "react";
import { FaCheck } from "react-icons/fa";
import { useTranslation } from "react-i18next";

type AdvantageItem = { text: string };

type AdvantagesProps = {
  items: AdvantageItem[];
  title: string;
  subtitle: string;
  planName: string;
  buttonText: string;
  namespace: string;
};

const Advantages: React.FC<AdvantagesProps> = ({
  items,
  title,
  subtitle,
  planName,
  buttonText,
  namespace,
}) => {
  const { t } = useTranslation([
    "travelplan",
    "motorinsuranceplan",
    "householderplans",
    "medicalinsuranceplan",
  ]); // use namespace

  return (
    <div>
      <div className="bg-[#184A7C] py-12 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-12">
            {t("Advantages")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {items.map((item, idx) => (
              <div
                key={item.text}
                className="relative bg-white rounded-xl pt-14 pb-8 px-6 shadow-md"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                  <div className="w-14 h-14 rounded-full bg-[#2C9CD4] border-[6px] border-white flex items-center justify-center shadow">
                    <FaCheck className="w-5 h-5 text-white" />
                  </div>
                </div>
                <p className="text-[#184A7C] text-sm sm:text-base leading-relaxed">
                  {t(item.text, { ns: namespace })}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#F8F8F8] py-12 px-6 sm:px-8 lg:px-12 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            <span className="text-black">{t(title)}</span>{" "}
            <span className="text-[#2C9CD4]">{t(subtitle)}</span>
          </h2>
          <p className="text-gray-900 text-sm sm:text-base mb-6">
            {t(planName, { ns: namespace })}
          </p>
          <button className="bg-[#2C9CD4] text-white text-sm sm:text-base font-medium px-6 py-3 rounded-md transition-colors">
            {t(buttonText)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
