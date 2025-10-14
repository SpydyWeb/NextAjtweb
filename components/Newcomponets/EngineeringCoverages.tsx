import { FaCheck } from "react-icons/fa";
import {engineeringcoverages} from "@/lib/utilities";
import { useTranslation } from "react-i18next";

export default function AdditionalCoverageCard() {
  const { t } = useTranslation("engineeringinsuranceplan");

  return (
    <div className="flex items-center justify-center  bg-white px-4 lg:px-0">
      <div className="rounded-lg border shadow-sm overflow-hidden max-w-2xl w-full">
        {/* Header */}
        <div className="px-6 py-4 text-[#184A7C] font-semibold">
          {t("AdditionalCoverage")}
        </div>

        {/* Coverage List */}
        <ul>
          {engineeringcoverages.map((item, idx) => (
            <li
              key={idx}
              className={`flex items-center gap-3 px-6 py-3 ${
                idx % 2 !== 0 ? "bg-gray-50" : ""
              }`}
            >
              <FaCheck className="text-sky-500 text-sm flex-shrink-0" />
              <span className="text-gray-700">{t(item.name)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
