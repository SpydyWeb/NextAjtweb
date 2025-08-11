'use client';
import React, { useState } from "react";
import { useTranslation } from "react-i18next";



const ProtectionNSavings = () => {
  const { t } = useTranslation();
//   const navigate = useNavigate();

//   const onClickBuyNow = () => {
//     navigate("/IndividualProducts/ProtectionSaving/Form");
//   };

  return (
     <>
      <div className="w-full px-4">
        <div className="w-[95%] mx-auto mt-10">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="md:w-2/3">
              <h3 className="text-[30px] text-[#00A5DF] font-normal uppercase">
                <a className="text-[#10426c] no-underline uppercase hover:underline hover:text-[#00A5DF]">
                  {t("IPHeader")}
                </a>{" "}
                | {t("protectionSavingsCaps")}
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
        </div>

        <div className="w-[95%] max-w-[1000px] mx-auto mt-5 mb-[50px] bg-white border border-[#10426c] rounded-[10px] text-[#10426c]">
          <div className="w-[95%] max-w-[950px] mx-auto py-5">
            <div className="space-y-4" id="accordionExample">
              {/* You can map these accordion items dynamically too */}
              {[
                {
                  id: "One",
                  title: t("PnSSakhaaheader"),
                  body: (
                    <>
                      <p className="font-bold">{t("PnSSakhaaSubheader1")}</p>
                      <p>{t("PnSSakhaaheaderDesc1")}</p>
                      <p>{t("PnSSakhaaheaderDesc2")}</p>
                      <p className="font-bold">{t("PnSSakhaaSubheader2")}</p>
                      <ul className="list-disc list-inside">
                        {[
                          "Item1",
                          "Item2",
                          "Item3",
                          "Item4",
                          // "Item5",
                          "Item6",
                          "Item7",
                          "Item8",
                          "Item9",
                          "Item10",
                          "Item11",
                          "Item12",
                          "Item13",
                        ].map((itemKey) => (
                          <li key={itemKey}>{t(`PnSSakhaaSubheader2${itemKey}`)}</li>
                        ))}
                      </ul>
                      <p className="font-bold mt-4">{t("PnSSakhaaSubheader3")}</p>
                      <ul className="list-disc list-inside">
                        {["Item1", "Item2", "Item3", "Item4"].map((itemKey) => (
                          <li key={itemKey}>{t(`PnSSakhaaSubheader3${itemKey}`)}</li>
                        ))}
                      </ul>
                      <p className="mt-2">
                        <b>*</b> {t("PnSSakhaaTerms1")}
                        <br />
                        <b>**</b> {t("PnSSakhaaTerms2")}
                      </p>
                    </>
                  ),
                },
                {
                  id: "Three",
                  title: t("PnSAbnaaheader"),
                  body: (
                    <>
                      <p className="font-bold">{t("PnSAbnaaSubheader1")}</p>
                      <p>{t("PnSAbnaaheaderDesc1")}</p>
                      <p className="font-bold">{t("PnSAbnaaSubheader2")}</p>
                      <ul className="list-disc list-inside">
                        {/* {[...Array(9).keys()].map((i) => (
                          <li key={i}>{t(`PnSAbnaaSubheader2Item${i + 1}`)}</li>
                        ))} */}
                      </ul>
                      <p className="mt-2">
                        <b>*</b> {t("PnSAbnaaTerms1")}
                      </p>
                    </>
                  ),
                },
                // Repeat above structure for Aman, Sunbula, Hemaya, Dera, Atta
              ].map((item) => (
                <div key={item.id} className="border border-gray-300 rounded">
                  <h2 className="p-4 bg-[#f5f5f5] cursor-pointer font-bold">
                    {item.title}
                  </h2>
                  <div className="p-4">{item.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProtectionNSavings;
