'use client'

import React from "react";
import { useTranslation } from "react-i18next";

const HouseHolder = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-[#10426c]">
        <div className="container mx-auto">
          <div className="w-[95%] mx-auto mt-10">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-2/3">
                <h3 className="text-[30px] text-[#00A5DF]">
                  <a className="uppercase no-underline text-[#10426c] hover:underline hover:text-[#00A5DF]">
                    {t("IPHeader")}
                  </a>{" "}
                  | {t("HouseHolderheader")}
                </h3>
              </div>
              <div className="w-full md:w-1/3">
                <div className="mb-3 flex justify-end pt-0">
                  <button
                    type="button"
                    className="w-[200px] bg-[#00A5DF] text-white px-4 py-2 rounded hover:bg-[#007fad] transition"
                  >
                    {t("MotorPlanBye")}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[95%] max-w-[1000px] mx-auto mt-5 mb-[50px] p-6 bg-white rounded-[10px] border border-[#10426c] text-[#10426c]">
            <div className="w-[95%] max-w-[950px] mx-auto py-5">
              <h5 className="text-xl font-semibold mb-2">{t("HouseHolderSubheader1")}</h5>
              <p className="mb-4">{t("HouseHolderSubheaderDesc")}</p>

              <h5 className="text-xl font-semibold mb-2">{t("HouseHolderSubheader2")}</h5>
              <ul className="list-decimal list-inside space-y-1">
                <li>{t("HouseHolderSubheader2Point1")}</li>
                <li>{t("HouseHolderSubheader2Point2")}</li>
                <li>{t("HouseHolderSubheader2Point3")}</li>
                <li>{t("HouseHolderSubheader2Point4")}</li>
                {/* <li>{t("HouseHolderSubheader2Point5")}</li> */}
              </ul>

              <h5 className="text-xl font-semibold mt-6 mb-2">{t("HouseHolderSubheader3")}</h5>
              <ul className="list-decimal list-inside space-y-1">
                <li>{t("HouseHolderSubheader3Point1")}</li>
                <li>{t("HouseHolderSubheader3Point2")}</li>
                <li>{t("HouseHolderSubheader3Point3")}</li>
                <li>{t("HouseHolderSubheader3Point4")}</li>
                <li>{t("HouseHolderSubheader3Point5")}</li>
              </ul>

              <h5 className="text-xl font-semibold mt-6 mb-2">{t("HouseHolderSubheader4")}</h5>
              <ul className="list-disc list-inside space-y-1">
                <li>{t("HouseHolderSubheader4Point1")}</li>
                <li>{t("HouseHolderSubheader4Point2")}</li>
                <li>{t("HouseHolderSubheader4Point3")}</li>
                <li>{t("HouseHolderSubheader4Point4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HouseHolder;
