'use client'
import React from "react";
import { useTranslation } from "react-i18next";

const MedicalMalpractisePlan = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="text-[#10426c]">
        <div className="container mx-auto">
          <div className="w-[95%] mx-auto mt-10">
            <div className="flex flex-wrap items-start justify-between">
              <div className="w-full md:w-2/3">
                <h3 className="text-[30px] text-[#00A5DF] uppercase font-normal">
                  <a className="no-underline text-[#10426c] hover:underline hover:text-[#00A5DF] uppercase">
                    {t("IPHeader")}
                  </a>{" "}
                  | {t("MedicalMalpractiseHeader")}
                </h3>
              </div>
              <div className="w-full md:w-1/3 flex justify-end mt-4 md:mt-0">
                <button
                  type="button"
                  className="w-[200px] bg-[#00A5DF] text-white px-4 py-2 rounded hover:bg-[#007ca7] transition"
                >
                  {t("MotorPlanBye")}
                </button>
              </div>
            </div>
          </div>

          <div className="w-[95%] max-w-[1000px] mx-auto mt-5 mb-[50px] bg-white rounded-[10px] border border-[#10426c] text-[#10426c]">
            <div className="w-[95%] max-w-[950px] mx-auto py-5">
              <h5 className="text-lg font-semibold mb-2">{t("MedicalMalSubHeader1")}</h5>
              <p className="mb-4">{t("MedicalMalSubHeader1Desc1")}</p>

              <h5 className="text-lg font-semibold mb-2">{t("MedicalMalSubHeader2")}</h5>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>{t("MedicalMalSubHeader2Point1")}</li>
                <li>{t("MedicalMalSubHeader2Point2")}</li>
              </ul>

              <h5 className="text-lg font-semibold mb-2">{t("MedicalMalSubHeader2Point2")}</h5>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>{t("MedicalMalSubHeader3Point1")}</li>
                <li>{t("MedicalMalSubHeader3Point2")}</li>
              </ul>

              <h5 className="text-lg font-semibold mb-2">{t("MedicalMalSubHeader4")}</h5>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>{t("MedicalMalSubHeader4Point1")}</li>
                <li>{t("MedicalMalSubHeader4Point2")}</li>
                <li>{t("MedicalMalSubHeader4Point3")}</li>
                <li>{t("MedicalMalSubHeader4Point4")}</li>
                <li>{t("MedicalMalSubHeader4Point5")}</li>
                <li>{t("MedicalMalSubHeader4Point6")}</li>
              </ul>

              <h5 className="text-lg font-semibold mb-2">{t("MedicalMalSubHeader5")}</h5>
              <ul className="list-disc list-inside space-y-1 mb-4">
                <li>{t("MedicalMalSubHeader5Point1")}</li>
                <li>{t("MedicalMalSubHeader5Point2")}</li>
                <li>{t("MedicalMalSubHeader5Point3")}</li>
                <li>{t("MedicalMalSubHeader5Point4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalMalpractisePlan;
