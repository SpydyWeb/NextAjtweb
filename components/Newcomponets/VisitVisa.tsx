"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const VisitVisaPlan = () => {
  const { t } = useTranslation();

  return (
    <div className="text-[#10426c]">
      <div className="w-[95%] mx-auto mt-10">
        {/* Header Section */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="w-full md:w-2/3">
            <h3 className="text-3xl text-[#00A5DF] text-center uppercase">
              <span className="hover:underline hover:text-[#00A5DF]">
                {t("IPHeader")}
              </span>{" "}
              | {t("VisitVisaHeader")}
            </h3>
          </div>
          <div className="w-full md:w-1/3 flex justify-end">
            <button
              type="button"
              className="w-[200px] bg-transparent border border-[#10426c] text-[#10426c] font-semibold py-2 px-4 rounded hover:bg-[#10426c] hover:text-white transition"
            >
              {t("MotorPlanBye")}
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className="w-[95%] max-w-[1000px] mx-auto mt-5 bg-white rounded-lg border border-[#10426c] text-[#10426c] mb-12 p-6">
          <div className="space-y-6">
            <div>
              <h5 className="text-lg font-semibold mb-2">
                {t("VisitVisaSubHeader1")}
              </h5>
              <p>{t("VisitVisaSubHeader1Desc1")}</p>
              <p>{t("VisitVisaSubHeader1Desc2")}</p>
              <p>{t("VisitVisaSubHeader1Desc3")}</p>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-2">
                {t("VisitVisaSubHeader2")}
              </h5>
              <ul className="list-disc list-inside space-y-1">
                <li>{t("VisitVisaSubHeaderDesc2Point1")}</li>
                <li>{t("VisitVisaSubHeaderDesc2Point2")}</li>
                <li>{t("VisitVisaSubHeaderDesc2Point3")}</li>
                <li>{t("VisitVisaSubHeaderDesc2Point4")}</li>
                <li>{t("VisitVisaSubHeaderDesc2Point5")}</li>
                <li>{t("VisitVisaSubHeaderDesc2Point6")}</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-4">
                {t("VisitVisaSubHeader3")}
              </h5>

              {/* Table 1 */}
              <table className="w-full border border-white mb-6 text-center">
                <thead className="bg-[#00A5DF] text-white">
                  <tr>
                    <th className="p-2 border border-[#10426c]">
                      {t("VisitVisaSubHeader3CovHeader")}
                    </th>
                    <th className="p-2 border border-[#10426c]">
                      {t("VisitVisaSubHeader3LimitHeader")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-[#10426c]">
                      {t("VisitVisaSubHeader3CovItem1")}
                    </td>
                    <td className="p-2 border border-[#10426c]">
                      {t("VisitVisaSubHeader3LimitItem1")}
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-[#10426c]">
                      {t("VisitVisaSubHeader3CovItem2")}
                    </td>
                    <td className="p-2 border border-[#10426c]">
                      {t("VisitVisaSubHeader3LimitItem2")}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Table 2 */}
              <table className="w-full border border-white text-center">
                <thead>
                  <tr>
                    <th
                      colSpan={2}
                      className="bg-[#10426c] text-white text-center p-2 border border-[#10426c]"
                    >
                      {t("VisitVisaSubHeader3HosExpHeader")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 13 }, (_, i) => (
                    <tr key={i}>
                      <td className="p-2 border border-[#10426c]">
                        {t(`VisitVisaSubHeader3HosExpItem${i + 1}`)}
                      </td>
                      <td className="p-2 border border-[#10426c]">
                        {t(`VisitVisaSubHeader3HosExpValue${i + 1}`)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitVisaPlan;
