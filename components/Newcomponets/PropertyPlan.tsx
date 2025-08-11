'use client';
import React from "react";
import { useTranslation } from "react-i18next";

const PropertyPlanCorporate = () => {
    const { t } = useTranslation();
    return (
        <div className="w-[95%] max-w-[1000px] mx-auto mt-10 mb-[50px] text-[#10426c]">
            <div className="w-[95%] mx-auto mt-10">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-full md:w-2/3">
                        <h3 className="text-[#00A5DF] text-[30px]">
                            <a className="uppercase text-[#10426c] hover:underline hover:text-[#00A5DF]">
                                {t("CORPORATEHeader")}
                            </a> | {t("PropertyHeader")}
                        </h3>
                    </div>
                    <div className="w-full md:w-1/3 flex justify-end">
                        <button
                            type="button"
                            className="w-[200px] text-white bg-[#10426c] hover:bg-[#00A5DF] px-4 py-2 rounded">
                            {t("MotorPlanBye")}
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-[95%] max-w-[950px] mx-auto mt-5 bg-white border border-[#10426c] rounded-lg py-5 px-4">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item border border-gray-200 rounded mb-4">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed w-full text-left font-bold px-4 py-3 text-[#10426c] bg-gray-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                {t("PropertySubHeader1")}
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body px-4 py-3 text-sm">
                                <p>{t("PropertySubHeader1Desc1")}</p>
                                <p className="font-bold mt-3">{t("PropertySubHeader1MainCov")}</p>
                                <ol className="list-decimal ml-6 mt-2 space-y-1">
                                    <li>{t("PropertySubHeader1MainCovPoint1")}</li>
                                    <li>{t("PropertySubHeader1MainCovPoint2")}</li>
                                    <li>{t("PropertySubHeader1MainCovPoint3")}</li>
                                    <li>{t("PropertySubHeader1MainCovPoint4")}</li>
                                    <li>{t("PropertySubHeader1MainCovPoint5")}</li>
                                    <li>{t("PropertySubHeader1MainCovPoint6")}</li>
                                    <li>{t("PropertySubHeader1MainCovPoint7")}</li>
                                    <li>{t("PropertySubHeader1MainCovPoint8")}</li>
                                </ol>
                                <p className="font-bold mt-4">{t("PropertySubHeader1Advantages")}</p>
                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>{t("PropertySubHeader1AdvantagesPoint1")}</li>
                                    <li>{t("PropertySubHeader1AdvantagesPoint2")}</li>
                                    <li>{t("PropertySubHeader1AdvantagesPoint3")}</li>
                                    <li>{t("PropertySubHeader1AdvantagesPoint4")}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item border border-gray-200 rounded">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed w-full text-left font-bold px-4 py-3 text-[#10426c] bg-gray-100" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                {t("PropertySubHeader2")}
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body px-4 py-3 text-sm">
                                <p>{t("PropertySubHeader2Desc1")}</p>
                                <p className="font-bold mt-3">{t("PropertySubHeader2AddCov")}</p>
                                <ol className="list-decimal ml-6 mt-2 space-y-1">
                                    <li>{t("PropertySubHeader2AddCovPoint1")}</li>
                                    <li>{t("PropertySubHeader2AddCovPoint2")}</li>
                                    <li>{t("PropertySubHeader2AddCovPoint3")}</li>
                                    <li>{t("PropertySubHeader2AddCovPoint4")}</li>
                                    <li>{t("PropertySubHeader2AddCovPoint5")}</li>
                                </ol>
                                <p className="font-bold mt-4">{t("PropertySubHeader2Advantages")}</p>
                                <ul className="list-disc ml-6 mt-2 space-y-1">
                                    <li>{t("PropertySubHeader2AdvPoint1")}</li>
                                    <li>{t("PropertySubHeader2AdvPoint2")}</li>
                                    <li>{t("PropertySubHeader2AdvPoint3")}</li>
                                    <li>{t("PropertySubHeader2AdvPoint4")}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyPlanCorporate;
