'use client';
import React from "react";
import { useTranslation } from "react-i18next";

const CraftsmenPlan = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-[#10426c]">
        <div className="container mx-auto w-[95%] mt-10">
          <div className="mb-10">
            <div className="flex flex-wrap items-center justify-between">
              <div className="w-full md:w-2/3">
                <h3 className="text-[30px] text-[#00A5DF]">
                  <a className="uppercase text-[#10426c] no-underline hover:underline hover:text-[#00A5DF]">
                    {t("IPHeader")}
                  </a>{" "}
                  | {t("CrafstmanHeader")}
                </h3>
              </div>
              <div className="w-full md:w-1/3 text-right">
                <div className="mb-3 flex justify-end">
                  <button
                    type="button"
                    className="form-button next-button w-[200px]"
                  >
                    {t("MotorPlanBye")}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-[#10426c] border border-[#10426c] rounded-[10px] p-6 mb-[50px] max-w-[1000px] mx-auto">
            <div className="w-[95%] max-w-[950px] mx-auto pt-5 pb-5">
              <p>{t("CrafstmanSubHeader1Desc1")}</p>

              <h5 className="font-semibold mt-6">{t("CrafstmanSubHeader2")}</h5>
              <p>{t("CrafstmanSubHeader2Desc1")}</p>

              <h5 className="font-semibold mt-6">{t("CrafstmanSubHeader3")}</h5>
              <p>{t("CrafstmanSubHeader3Desc1")}</p>

              <h5 className="font-semibold mt-6">{t("CrafstmanSubHeader4")}</h5>

              <h5 className="font-semibold mt-4">{t("CrafstmanSubHeader4Item1")}</h5>
              <ul className="list-disc pl-5">
                <li>{t("CrafstmanSubHeader4Item1Point1")}</li>
                <li>{t("CrafstmanSubHeader4Item1Point2")}</li>
                <li>{t("CrafstmanSubHeader4Item1Point3")}</li>
                <li>{t("CrafstmanSubHeader4Item1Point4")}</li>
                <li>{t("CrafstmanSubHeader4Item1Point5")}</li>
                <li>{t("CrafstmanSubHeader4Item1Point6")}</li>
              </ul>

              <h5 className="font-semibold mt-6">{t("CrafstmanSubHeader4Item2")}</h5>
              <ul className="list-disc pl-5">
                <li>{t("CrafstmanSubHeader4Item2Point1")}</li>
                <li>{t("CrafstmanSubHeader4Item2Point2")}</li>
                <li>{t("CrafstmanSubHeader4Item2Point3")}</li>
                <li>{t("CrafstmanSubHeader4Item2Point4")}</li>
                <li>{t("CrafstmanSubHeader4Item2Point5")}</li>
                <li>{t("CrafstmanSubHeader4Item2Point6")}</li>
              </ul>

              <h5 className="font-semibold mt-6">{t("CrafstmanSubHeader4Item3")}</h5>
              <ul className="list-disc pl-5">
                <li>{t("CrafstmanSubHeader4Item3Point1")}</li>
                <li>{t("CrafstmanSubHeader4Item3Point2")}</li>
                <li>{t("CrafstmanSubHeader4Item3Point3")}</li>
              </ul>

              <h5 className="font-semibold mt-6">{t("CrafstmanSubHeader4Item4")}</h5>
              <ul className="list-disc pl-5">
                <li>{t("CrafstmanSubHeader4Item4Point1")}</li>
                <li>{t("CrafstmanSubHeader4Item4Point2")}</li>
                <li>{t("CrafstmanSubHeader4Item4Point3")}</li>
                <li>{t("CrafstmanSubHeader4Item4Point4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CraftsmenPlan;
