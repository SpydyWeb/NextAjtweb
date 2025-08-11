'use client';
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const AccidentLiabilityPlanCorporate = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();

  const toggleAccordion = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="text-[#10426c]">
      <div className="w-[95%] mx-auto mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h3 className="text-[#00A5DF] text-[30px] uppercase">
            <a className="hover:underline hover:text-[#00A5DF]">
              {t("CPHeader")}
            </a> | {t("accidentName")}
          </h3>
          <div className="mb-3">
            <button className="w-[200px] bg-transparent border border-[#10426c] px-4 py-2 rounded">
              {t("MotorPlanBye")}
            </button>
          </div>
        </div>
      </div>

      <div className="w-[95%] max-w-[1000px] mx-auto mt-5 mb-[50px] bg-white rounded-[10px] border border-[#10426c] p-4">
        <div className="w-[95%] max-w-[950px] mx-auto py-5">
          <div className="space-y-4">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="border rounded shadow">
                <div
                  className={`cursor-pointer flex justify-between items-center px-4 py-2 font-semibold bg-[#f5f5f5] ${
                    activeIndex === i ? "text-[#00A5DF]" : "text-[#10426c]"
                  }`}
                  onClick={() => toggleAccordion(i)}
                >
                  <span>{t(`acc${i + 1}`)}</span>
                  <span>{activeIndex === i ? "▲" : "▼"}</span>
                </div>
                {activeIndex === i && (
                  <div className="p-4 bg-white space-y-4">
                    {/* Here you can replace the following with your dynamic content */}
                    <p>{t(`acc${i + 1}p1`)}</p>
                    {i === 4 && (
                      <table className="table-auto w-full text-center border border-[#10426c]">
                        <thead className="bg-[#00A5DF] text-white">
                          <tr>
                            <th rowSpan={2} className="p-2">
                              <h3>{t("TravelTbHeader1")}</h3>
                            </th>
                            <th colSpan={5} className="p-2">
                              <h3>{t("TravelTbHeader2")}</h3>
                            </th>
                          </tr>
                          <tr>
                            {[3, 4, 5, 6, 7].map((n) => (
                              <th key={n} className="p-2">
                                {t(`TravelTbHeader${n}`)}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {Array.from({ length: 14 }).map((_, idx) => (
                            <tr key={idx} className="border-t border-[#10426c]">
                              <td className="p-2">{t(`TravelTbRow${idx + 1}`)}</td>
                              {[...Array(5)].map((_, j) => (
                                <td key={j} className="p-2">
                                  {/* Replace with actual logic */}
                                  {idx === 1 && j === 4
                                    ? t("NotCovered")
                                    : idx === 5 || idx === 6 || idx === 7 || idx === 8 || idx === 9 || idx === 10 || idx === 11 || idx === 12
                                    ? j === 4
                                      ? t("NotCovered")
                                      : "3,750"
                                    : idx === 13
                                    ? ["250,000", "250,000", "500,000", "1,000,000", "500,000"][j]
                                    : ["37,500", "70,000", "150,000", "650,000", "187,500"][j]}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccidentLiabilityPlanCorporate;
