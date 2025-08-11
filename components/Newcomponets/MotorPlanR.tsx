'use client';

import React from "react";
import { useTranslation } from "react-i18next";

const MotorPlan = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="text-[#10426c]">
                <div className="w-[95%] mx-auto mt-10">
                    <div className="flex flex-col md:flex-row justify-between items-start">
                        <div className="md:w-2/3">
                            <h3 className="text-[30px] text-[#00A5DF] uppercase">
                                <a
                                    className="no-underline text-[#10426c] hover:underline hover:text-[#00A5DF] uppercase"
                                >
                                    {t("IPHeader")}
                                </a>{" "}
                                | {t("motor")}
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

                    <div className="w-[95%] max-w-[1000px] mx-auto mt-5 mb-[50px] bg-white border border-[#10426c] rounded-[10px] text-[#10426c]">
                        <div className="w-[95%] max-w-[950px] mx-auto py-5">
                            <p>{t("motorDesc1")}</p>

                            <h5 className="mt-4 font-semibold">{t("motorHead1")}</h5>
                            <p>{t("motorDesc2")}</p>
                            <ul className="list-disc list-inside">
                                <li>{t("motorul1li1")}</li>
                                <li>{t("motorul1li2")}</li>
                                <li>{t("motorul1li3")}</li>
                                <li>{t("motorul1li4")}</li>
                                <li>{t("motorul1li5")}</li>
                                <li>{t("motorul1li6")}</li>
                                <li>{t("motorul1li7")}</li>
                            </ul>

                            <h5 className="mt-4 font-semibold">{t("motorHead2")}</h5>
                            <ul className="list-disc list-inside">
                                <li>{t("motorul2li1")}</li>
                                <li>{t("motorul2li2")}</li>
                                <li>{t("motorul2li3")}</li>
                            </ul>

                            <h5 className="mt-4 font-semibold">{t("motorHead3")}</h5>
                            <p>{t("motorDesc3")}</p>
                            <ul className="list-disc list-inside">
                                <li>{t("motorul3li1")}</li>
                                <li>{t("motorul3li2")}</li>
                            </ul>

                            <p className="mt-4">{t("motorDesc4")}</p>

                            <h5 className="mt-4 font-semibold">{t("motorHead4")}</h5>
                            <ul className="list-disc list-inside">
                                <li>{t("motorul4li1")}</li>
                                <li>{t("motorul4li2")}</li>
                                <li>{t("motorul4li3")}</li>
                                <li>{t("motorul4li4")}</li>
                                <li>{t("motorul4li5")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MotorPlan;
