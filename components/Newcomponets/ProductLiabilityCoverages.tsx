import { FaCheck } from "react-icons/fa";
import {productliabilityCoverages} from "@/lib/utilities";
import { useTranslation } from "react-i18next";

export default function ProductLiabilityCoverage() {
  const { t } = useTranslation("productliabilityinsuranceplan");

  return (
    <div className="flex items-center justify-center  bg-white">
      <div className="rounded-lg border shadow-sm overflow-hidden max-w-2xl w-full">
        {/* Header */}
        <div className=" bg-[#2C9CD4] text-white text-center py-3 font-medium text-2xl">
          {/* bg-[#2C9CD4] */}
          {t("MainCoverages")}
        </div>

        {/* Coverage List */}
        <ul>
          {productliabilityCoverages.map((item, idx) => (
            <li
              key={idx}
              className={`flex items-center gap-3 px-6 py-3 ${
                idx % 2 !== 0 ? "" : ""
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
