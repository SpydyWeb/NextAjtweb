'use client';

import React from "react";
import { useTranslation } from "react-i18next";

const AviationPlanCorporate = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="w-full px-4">
                <div className="w-[95%] mx-auto mt-10">
                    <div className="flex flex-col md:flex-row justify-between items-start">
                        <div className="md:w-2/3">
                            <h3 className="text-[30px] text-[#00A5DF] font-normal uppercase">
                                <a
                                    className="text-[#10426c] no-underline uppercase hover:underline hover:text-[#00A5DF]"
                                >
                                    {t("CORPORATEHeader")}
                                </a>{" "}
                                | {t("AviationHeader")}
                            </h3>
                        </div>
                        <div className="md:w-1/3 flex justify-end">
                            <div className="mb-3 flex justify-end">
                                <button
                                    type="button"
                                    className="w-[200px] bg-[#10426c] text-white px-4 py-2 rounded hover:bg-[#00A5DF] transition-colors"
                                >
                                    {t("MotorPlanBye")}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[95%] max-w-[1000px] mx-auto mt-5 mb-[50px] bg-white border border-[#10426c] rounded-[10px] text-[#10426c]">
                    <div className="w-[95%] max-w-[950px] mx-auto py-5">
                        <p className="font-bold">{t("AviationSubHeader1")}</p>
                        <p>{t("AviationSubHeader1Desc1")}</p>

                        <p className="font-bold mt-4">{t("AviationSubHeader2")}</p>
                        <ol className="list-decimal list-inside">
                            <li>{t("AviationSubHeader2Type1")}</li>
                            <li>{t("AviationSubHeader2Type2")}</li>
                            <li>{t("AviationSubHeader2Type3")}</li>
                            <li>{t("AviationSubHeader2Type4")}</li>
                            <li>{t("AviationSubHeader2Type5")}</li>
                        </ol>

                        <p className="font-bold mt-4">{t("AviationSubHeader3")}</p>
                        <ul className="list-disc list-inside">
                            <li>{t("AviationSubHeader3Type1")}</li>
                            <li>{t("AviationSubHeader3Type2")}</li>
                            <li>{t("AviationSubHeader3Type3")}</li>
                            <li>{t("AviationSubHeader3Type4")}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AviationPlanCorporate;
