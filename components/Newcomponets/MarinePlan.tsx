'use client'
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const MotorPlanCorporate = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useTranslation();

  const toggleAccordion = (index:any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="text-[#10426c]">
      <div className="w-[95%] mx-auto mt-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <h3 className="text-[30px] text-[#00A5DF]">
            <a className="uppercase no-underline hover:underline hover:text-[#00A5DF] text-[#10426c]">
              {t("CPHeader")}
            </a>{" "}
            | {t("marine")}
          </h3>
          <button className="w-[200px] text-white bg-[#10426c] py-2 px-4 rounded mt-4 md:mt-0">
            {t("MotorPlanBye")}
          </button>
        </div>

        <div className="w-full max-w-[1000px] mx-auto bg-white rounded-lg border border-[#10426c] mb-12">
          <div className="w-[95%] max-w-[950px] mx-auto py-5">
            <div>
              {/* Accordion Item 1 */}
              <div className="mb-4">
                <div
                  className={`flex justify-between items-center cursor-pointer py-3 px-4 border border-[#10426c] rounded ${
                    activeIndex === 0 ? "bg-[#f0f8ff]" : "bg-white"
                  }`}
                  onClick={() => toggleAccordion(0)}
                >
                  <span>{t("marineacc1")}</span>
                  <span>{activeIndex === 0 ? "▲" : "▼"}</span>
                </div>
                {activeIndex === 0 && (
                  <div className="px-4 py-3 border border-t-0 border-[#10426c] rounded-b">
                    <p>{t("marineacc1p1")}</p>
                    <h5 className="mt-4 font-semibold">{t("marineacc1h1")}</h5>
                    <ul className="list-disc ml-6">
                      <li>{t("marineacc1ul1li1")}</li>
                      <li>{t("marineacc1ul1li2")}</li>
                      <li>{t("marineacc1ul1li3")}</li>
                    </ul>

                    <h5 className="mt-4 font-semibold">{t("marineacc1h2")}</h5>
                    <ul className="list-disc ml-6">
                      <li>{t("marineacc1ul2li1")}</li>
                      <li>{t("marineacc1ul2li2")}</li>
                    </ul>

                    <h5 className="mt-4 font-semibold">{t("marineacc1h3")}</h5>
                    <ul className="list-disc ml-6">
                      <li>{t("marineacc2ul2li1")}</li>
                      <li>{t("marineacc2ul2li2")}</li>
                      <li>{t("marineacc2ul2li3")}</li>
                      <li>{t("marineacc2ul2li4")}</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Accordion Item 2 */}
              <div className="mb-4">
                <div
                  className={`flex justify-between items-center cursor-pointer py-3 px-4 border border-[#10426c] rounded ${
                    activeIndex === 1 ? "bg-[#f0f8ff]" : "bg-white"
                  }`}
                  onClick={() => toggleAccordion(1)}
                >
                  <span>{t("marineacc2")}</span>
                  <span>{activeIndex === 1 ? "▲" : "▼"}</span>
                </div>
                {activeIndex === 1 && (
                  <div className="px-4 py-3 border border-t-0 border-[#10426c] rounded-b">
                    <p>{t("marineacc2p1")}</p>
                    <h5 className="mt-4 font-semibold">{t("marineacc2h1")}</h5>
                    <ul className="list-disc ml-6">
                      <li>{t("marineacc2ul1li1")}</li>
                      <li>{t("marineacc2ul1li2")}</li>
                    </ul>

                    <h5 className="mt-4 font-semibold">{t("marineacc2h2")}</h5>
                    <ul className="list-disc ml-6">
                      <li>{t("marineacc2ul2li1")}</li>
                      <li>{t("marineacc2ul2li2")}</li>
                      <li>{t("marineacc2ul2li3")}</li>
                      <li>{t("marineacc2ul2li4")}</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotorPlanCorporate;