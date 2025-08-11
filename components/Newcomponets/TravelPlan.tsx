'use client';

import React from "react";
import { useTranslation } from "react-i18next";

const TravelPlan = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="text-[#10426c]">
                <div className="w-[95%] mx-auto mt-10">
                    <div className="flex flex-col md:flex-row justify-between items-start">
                        <div className="md:w-2/3">
                            <h3 className="text-[30px] text-[#00A5DF] font-normal uppercase">
                                <a
                                    className="text-[#10426c] no-underline uppercase hover:underline hover:text-[#00A5DF]"
                                >
                                    {t("IPHeader")}
                                </a>{" "}
                                | {t("travel")}
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
                            <p className="font-bold">{t("TravelSubheader1")}</p>
                            <p>{t("TravelSubDesc1")}</p>

                            <div className="overflow-auto my-5">
                                <table className="w-full text-center border border-white">
                                    <thead className="bg-[#10426c] text-white">
                                        <tr>
                                            <th rowSpan={2} className="p-2 border border-[#10426c]">
                                                <h3>{t("TravelTbHeader1")}</h3>
                                            </th>
                                            <th colSpan={5} className="p-2 border border-[#10426c]">
                                                <h3>{t("TravelTbHeader2")}</h3>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="p-2 border border-[#10426c]">{t("TravelTbHeader3")}</th>
                                            <th className="p-2 border border-[#10426c]">{t("TravelTbHeader4")}</th>
                                            <th className="p-2 border border-[#10426c]">{t("TravelTbHeader5")}</th>
                                            <th className="p-2 border border-[#10426c]">{t("TravelTbHeader6")}</th>
                                            <th className="p-2 border border-[#10426c]">{t("TravelTbHeader7")}</th>
                                        </tr>
                                    </thead>
                                 <tbody>
                                    {[
                                        ["TravelTbRow1", ["37,500", "70,000", "150,000", "650,000", "187,500"]],
                                        ["TravelTbRow2", ["2,000", "2,000", "2,000", "2,000", t("NotCovered")]],
                                        ["TravelTbRow3", ["1,000", "2,000", "2,000", "2,500", "1,500"]],
                                        ["TravelTbRow4", ["10,000", "10,000", "10,000", "10,000", "10,000"]],
                                        ["TravelTbRow5", ["10,000", "10,000", "10,000", "10,000", "10,000"]],
                                        ["TravelTbRow6", [t("EconomicTicket"), t("EconomicTicket"), t("EconomicTicket"), t("EconomicTicket"), t("NotCovered")]],
                                        ["TravelTbRow7", ["5,000", "5,000", "5,000", "5,000", t("NotCovered")]],
                                        ["TravelTbRow8", ["3,750", "3,750", "3,750", "3,750", t("NotCovered")]],
                                        ["TravelTbRow9", ["3,750", "3,750", "3,750", "3,750", t("NotCovered")]],
                                        ["TravelTbRow10", ["3,750", "3,750", "3,750", "3,750", t("NotCovered")]],
                                        ["TravelTbRow11", ["3,750", "3,750", "3,750", "3,750", t("NotCovered")]],
                                        ["TravelTbRow12", ["1,875", "1,875", "1,875", "1,875", t("NotCovered")]],
                                        ["TravelTbRow13", ["37,500", "37,500", "37,500", "37,500", t("NotCovered")]],
                                        ["TravelTbRow14", ["250,000", "250,000", "500,000", "1,000,000", "500,000"]],
                                    ].map(([label, values], i) => (
                                        <tr key={i}>
                                        <td className="p-2 border border-[#10426c]">{t(label as string)}</td>
                                        {(values as string[]).map((val, idx) => (
                                            <td key={idx} className="p-2 border border-[#10426c]">{val}</td>
                                        ))}
                                        </tr>
                                    ))}
                                    </tbody>


                                </table>
                            </div>

                            <p className="font-bold mt-5">{t("TravelSubheader2")}</p>
                            <ul className="list-disc list-inside my-2">
                                <li>{t("TravelSubDesc2_1")}</li>
                                <li>{t("TravelSubDesc2_2")}</li>
                            </ul>

                            <p className="font-bold mt-5">{t("TravelSubheader3")}</p>
                            <p>{t("TravelSubheader4")}</p>

                            <p className="font-bold mt-5">{t("TravelSubheader5")}</p>
                            <ul className="list-disc list-inside">
                                <li>{t("TravelSubheader5_I1")}</li>
                                <li>{t("TravelSubheader5_I2")}</li>
                                <li>{t("TravelSubheader5_I3")}</li>
                                <li>{t("TravelSubheader5_I4")}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TravelPlan;
