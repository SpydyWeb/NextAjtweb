"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const MotorPlanCorporate = () => {
  const { t } = useTranslation();

  return (
    <div className="text-[#10426c]">
      <div className="w-[95%] mx-auto mt-10">
        <div>
          <h3 className="text-[30px] text-[#00A5DF] uppercase text-center">
            <a
              href="#"
              className="no-underline text-[#10426c] uppercase hover:underline hover:text-[#00A5DF]"
            >
              {t("CPHeader")}
            </a>{" "}
            | {t("motor")}
          </h3>
        </div>
      </div>

      <div className="w-[95%] max-w-[1000px] mx-auto mt-5 mb-12 bg-white rounded-[10px] border border-[#10426c] text-[#10426c]">
        <div className="w-[95%] max-w-[950px] mx-auto py-5 text-[#10426c]">
          <p>{t("motorDesc1")}</p>

          <h5 className="font-semibold mt-4 mb-2">{t("motorHead1")}</h5>
          <p>{t("motorDesc2")}</p>

          <ul className="list-disc list-inside pl-4">
            <li>{t("motorul1li1")}</li>
            <li>{t("motorul1li2")}</li>
            <li>{t("motorul1li3")}</li>
            <li>{t("motorul1li4")}</li>
            <li>{t("motorul1li5")}</li>
            <li>{t("motorul1li6")}</li>
            <li>{t("motorul1li7")}</li>
          </ul>

          <h5 className="font-semibold mt-4 mb-2">{t("motorHead2")}</h5>
          <ul className="list-disc list-inside pl-4">
            <li>{t("motorul2li1")}</li>
            <li>{t("motorul2li2")}</li>
            <li>{t("motorul2li3")}</li>
          </ul>

          <h5 className="font-semibold mt-4 mb-2">{t("motorHead3")}</h5>
          <p>{t("motorDesc3")}</p>
          <ul className="list-disc list-inside pl-4">
            <li>{t("motorul3li1")}</li>
            <li>{t("motorul3li2")}</li>
          </ul>

          <p className="mt-4">{t("motorDesc4")}</p>

          <h5 className="font-semibold mt-4 mb-2">{t("motorHead4")}</h5>
          <ul className="list-disc list-inside pl-4">
            <li>{t("motorul4li1")}</li>
            <li>{t("motorul4li2")}</li>
            <li>{t("motorul4li3")}</li>
            <li>{t("motorul4li4")}</li>
            <li>{t("motorul4li5")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MotorPlanCorporate;
