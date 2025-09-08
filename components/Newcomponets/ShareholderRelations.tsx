"use client";
import React from "react";
import { ImArrowUp } from "react-icons/im";
import { LineChart, Line, ResponsiveContainer } from "recharts";
import CompanyProfileScreen from "@/components/Newcomponets/CompanyProfileScreen";
import { useTranslation } from "react-i18next";

// Sample data for the mini chart
const data = [
  { name: "Jan", price: 13 },
  { name: "Feb", price: 12.8 },
  { name: "Mar", price: 12.6 },
  { name: "Apr", price: 12.9 },
  { name: "May", price: 12.5 },
  { name: "Jun", price: 12.3 },
  { name: "Jul", price: 12.1 },
  { name: "Aug", price: 12.49 },
];

const ShareholderRelation = () => {
  const { t } = useTranslation("shareholderrelation");
  return (
    <>
      <div className="max-w-7xl mx-auto px-[1rem] sm:px-[1.5rem] lg:px-[3rem] py-[2.5rem]">
        <h2 className="text-center text-[1.5rem] sm:text-[1.875rem] font-bold text-[#184A7C] mb-[0.75rem]">
          {t("ShareHolderHeader")}
        </h2>
        <p className="text-center max-w-2xl mx-auto mb-[2rem] text-[0.875rem] sm:text-[1rem]">
          {t("ShareHolderdesc")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-[13.75rem_1fr] gap-[1.5rem]">
          <div className="bg-white shadow-md rounded-2xl flex flex-col p-[1.5rem]">
            <h3 className="text-[#184A7C] font-bold text-[1.125rem] mb-[1rem]">
              {t("ShareHolderName")}
            </h3>
            <div className="flex flex-col text-green-600 space-y-[0.5rem]">
              <p className="font-semibold text-[1.25rem]">12.49 SAR</p>
              <p className="font-semibold text-[1.25rem]">0.01</p>
              <p className="font-medium text-[1.25rem] flex items-center gap-[0.25rem]">
                0.08% <ImArrowUp />
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-[1.5rem] flex flex-col justify-between">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-[1.5rem]">
              <div>
                <h4 className="font-semibold text-[#184A7C] text-[1rem] sm:text-[1.125rem]">
                  {t("ShareHolderCompany")}
                </h4>
                <p className="text-[0.75rem] sm:text-[0.875rem] text-gray-500">
                  {t("ShareHolderLastUpdated")}
                </p>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-[2.5rem] gap-[1rem]">
                <div className="flex items-center gap-[2.5rem]">
                  <p className="text-[#184A7C] font-bold text-[1.125rem]">
                    12.49 SAR
                  </p>
                  <p className="text-green-600 text-[1.125rem] flex items-center gap-[0.25rem]">
                    <ImArrowUp /> 0.01
                  </p>
                  <p className="text-green-600 text-[1.125rem]">0.08%</p>
                </div>
                <div className="flex flex-col items-end">
                  <h5 className="text-[0.875rem] font-medium text-gray-500 mb-[0.25rem]">
                    {t("ShareHolder1YHistoricalPrices")}
                  </h5>
                  <div className="w-[10rem] h-[4rem] bg-gray-50">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={data}>
                        <Line
                          type="monotone"
                          dataKey="price"
                          stroke="#184A7C"
                          strokeWidth={2}
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex gap-[1rem] mt-[0.25rem] text-[0.875rem]">
                    <span className="text-gray-600">1Y</span>
                    <span className="text-red-600">-5.43</span>
                    <span className="text-red-600">-30.30%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-[0.75rem] overflow-x-auto pb-[0.5rem] w-full mt-[1.5rem]">
              <span className="bg-[#1C95D0] text-white rounded-lg px-[1rem] py-[0.5rem] text-[0.875rem] font-medium whitespace-nowrap">
                {t("ShareHolderSymbol")}
              </span>
              <span className="bg-[#1C95D0] text-white rounded-lg px-[1rem] py-[0.5rem] text-[0.875rem] font-medium whitespace-nowrap">
                {t("ShareHolderSINCode")}
              </span>
              <span className="bg-[#1C95D0] text-white rounded-lg px-[1rem] py-[0.5rem] text-[0.875rem] font-medium whitespace-nowrap">
                {t("ShareHolderExchange")}
              </span>
              <span className="bg-[#1C95D0] text-white rounded-lg px-[1rem] py-[0.5rem] text-[0.875rem] font-medium whitespace-nowrap">
                {t("ShareHolderSector")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <CompanyProfileScreen />
    </>
  );
};

export default ShareholderRelation;
