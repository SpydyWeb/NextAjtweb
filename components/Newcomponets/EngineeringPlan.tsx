'use client';
import React from "react";
import { useTranslation } from "react-i18next";

const EngineeringPlanCorporate = () => {
    const { t } = useTranslation();

    return (
        <div className="w-[95%] mx-auto mt-10">
            <div className="mt-10 mb-12">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <h3 className="text-[#00A5DF] text-[30px] uppercase">
                        <a href="#" className="text-[#10426c] hover:text-[#00A5DF] underline hover:underline">
                            {t("CORPORATEHeader")}
                        </a>{" "}
                        | {t("EngineeringHeader")}
                    </h3>
                    <div className="text-right mt-4 md:mt-0">
                        <button
                            type="button"
                            className="w-[200px] bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                        >
                            {t("MotorPlanBye")}
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-[95%] max-w-[1000px] mx-auto mt-5 mb-12 bg-white rounded-[10px] border border-[#10426c] text-[#10426c] p-4">
                <div className="w-[95%] max-w-[950px] mx-auto py-5">
                    <div className="accordion" id="accordionExample">
                        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                            <div className="accordion-item" key={num}>
                                <h2 className="accordion-header" id={`heading${num}`}>
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${num}`}
                                        aria-expanded="false"
                                        aria-controls={`collapse${num}`}
                                    >
                                        <b>{t(`EngineeringSubHeader${num}`)}</b>
                                    </button>
                                </h2>
                                <div
                                    id={`collapse${num}`}
                                    className="accordion-collapse collapse"
                                    aria-labelledby={`heading${num}`}
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <p>{t(`EngineeringSubHeader${num}Desc1`)}</p>

                                        {[1, 2].map((pt) =>
                                            t(`EngineeringSubHeader${num}Point${pt}`) ? (
                                                <div key={pt}>
                                                    <p className="font-bold">{t(`EngineeringSubHeader${num}Point${pt}`)}</p>
                                                    <ul className="list-disc pl-6">
                                                        {[1, 2, 3, 4, 5]
                                                            .filter((i) =>
                                                                t(`EngineeringSubHeader${num}Point${pt}Item${i}`))
                                                            .map((i) => (
                                                                <li key={i}>
                                                                    {t(`EngineeringSubHeader${num}Point${pt}Item${i}B`) && (
                                                                        <b>{t(`EngineeringSubHeader${num}Point${pt}Item${i}B`)}</b>
                                                                    )}{" "}
                                                                    {t(`EngineeringSubHeader${num}Point${pt}Item${i}`)}
                                                                </li>
                                                            ))}
                                                    </ul>
                                                </div>
                                            ) : null
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EngineeringPlanCorporate;
