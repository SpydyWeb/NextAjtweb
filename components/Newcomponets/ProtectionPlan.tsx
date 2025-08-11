'use client';
import React from 'react';
import { useTranslation } from "react-i18next";

const ProtectionSavingCorporate = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="w-[95%] mx-auto mt-10">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="md:w-2/3">
                        <h3 className="text-[#00A5DF] text-[30px]">
                            <a className="no-underline text-[#10426c] uppercase hover:underline hover:text-[#00A5DF]">
                                {t("CORPORATEHeader")}
                            </a> | {t("PnSHeader")}
                        </h3>
                    </div>
                     <div className="md:w-1/3 flex justify-end">
              <div className="mb-3">
                <button
                  type="button"
                //   onClick={onClickBuyNow}
                  className="w-[200px] bg-[#10426c] text-white px-4 py-2 rounded hover:bg-[#00A5DF] transition"
                >
                  {t("MotorPlanBye")}
                </button>
              </div>
            </div>
                </div>

                <div className="w-[95%] max-w-[1000px] mx-auto mt-5 mb-[50px] bg-white rounded-[10px] border border-[#10426c] text-[#10426c]">
                    <div className="w-[95%] max-w-[950px] mx-auto py-5">
                        <div className="accordion" id="accordionExample">
                            {[1, 2, 3, 4].map((num) => (
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
                                            <b>{t(`PnSSubHeader${num}`)}</b>
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapse${num}`}
                                        className="accordion-collapse collapse"
                                        aria-labelledby={`heading${num}`}
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <p key={`p-${num}-${i}`}><b>{t(`PnSSubHeader${num}Point${i + 1}`)}</b></p>
                                            ))}

                                            {Array.from({ length: 11 }).map((_, i) => (
                                                <ul key={`ul-${num}-${i}`} className="list-disc ml-5">
                                                    <li>{t(`PnSSubHeader${num}Point2Item${i + 1}`)}</li>
                                                </ul>
                                            ))}

                                            {Array.from({ length: 6 }).map((_, i) => (
                                                <ul key={`ul3-${num}-${i}`} className="list-disc ml-5">
                                                    <li>{t(`PnSSubHeader${num}Point3Item${i + 1}`)}</li>
                                                </ul>
                                            ))}

                                            <p>{t(`PnSSubHeader${num}Note1`)}</p>
                                            <p>{t(`PnSSubHeader${num}Note2`)}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProtectionSavingCorporate;
