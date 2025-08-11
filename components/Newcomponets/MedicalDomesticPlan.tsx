'use client'
import React from "react";
import { useTranslation } from "react-i18next";

const MedicalDomesticHelperPlan = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="text-[#10426c]">
                <div className="w-[95%] mx-auto mt-10">
                    <div className="w-[95%] mx-auto mt-10">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                            <h3 className="text-[30px] text-[#00A5DF] uppercase font-normal">
                                <a className="hover:underline text-[#10426c] uppercase">{t("IPHeader")}</a> | {t("MedicalDomesticHelperHeader")}
                            </h3>
                            <div className="mt-4 md:mt-0">
                                <button
                                    type="button"
                                    className="w-[200px] bg-[#00A5DF] text-white py-2 px-4 rounded hover:bg-[#007ca7] transition"
                                >
                                    {t("MotorPlanBye")}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-[95%] max-w-[1000px] mx-auto mt-5 mb-[50px] bg-white rounded-[10px] border border-[#10426c] text-[#10426c]">
                        <div className="w-[95%] max-w-[950px] mx-auto py-5">
                            <table className="w-full border border-white text-center">
                                <thead className="bg-[#10426c] text-white">
                                    <tr>
                                        <th className="border border-[#10426c] px-4 py-2">{t("MedicalDomesticHelperClass")}</th>
                                        <th className="border border-[#10426c] px-4 py-2">{t("MedicalDomesticHelperC")}</th>
                                        <th className="border border-[#10426c] px-4 py-2">{t("MedicalDomesticHelperBronze")}</th>
                                    </tr>
                                    <tr>
                                        <th className="border border-[#10426c] px-4 py-2">{t("MedicalDomesticHelperNetwork")}</th>
                                        <th className="border border-[#10426c] px-4 py-2">{t("MedicalDomesticHelperC03")}</th>
                                        <th className="border border-[#10426c] px-4 py-2">{t("MedicalDomesticHelperBronze")}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.from({ length: 14 }).map((_, index) => (
                                        <tr key={index}>
                                            <td className="border border-[#10426c] px-4 py-2">{t(`MedicalDomesticHelperHDesc${index + 1}`)}</td>
                                            <td colSpan={2} className="border border-[#10426c] px-4 py-2">{t(`MedicalDomesticHelperHValue${index + 1}`)}</td>
                                        </tr>
                                    ))}

                                    <tr>
                                        <td colSpan={3} className="bg-[#00A5DF] text-white font-bold px-4 py-2">
                                            {t("MedicalDomesticHelperCopayment")}
                                        </td>
                                    </tr>

                                    {Array.from({ length: 3 }).map((_, index) => (
                                        <tr key={`co-${index}`}>
                                            <td className="border border-[#10426c] px-4 py-2">{t(`MedicalDomesticHelperCoDesc${index + 1}`)}</td>
                                            <td colSpan={2} className="border border-[#10426c] px-4 py-2">{t(`MedicalDomesticHelperCoValue${index + 1}`)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MedicalDomesticHelperPlan;
