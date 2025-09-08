"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { customerrights } from "@/lib/utilities";
import { FaCheck } from "react-icons/fa6";
const ComplaintDuties: React.FC = () => {
  const { t } = useTranslation("customerrights");
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-[#1D3557] text-sm sm:text-base leading-6 mb-6">
          {t("complaintProcessDescription")}
        </p>
        <div className="space-y-2 mb-8 text-sm sm:text-base">
          <p>
            <span className="font-medium text-sky-400">{t("cchi")}:</span>{" "}
            <span className="text-gray-700">{t("cchiNumber")}</span>
          </p>
          <p>
            <span className="font-medium text-sky-400">
              {t("insuranceAuthority")}:
            </span>{" "}
            <a
              href="https://care.ia.gov.sa"
              className="text-sky-600 hover:underline"
            >
              <span className="text-gray-700">
                {t("insuranceAuthorityUrl")}
              </span>
            </a>
          </p>
          <p>
            <span className="font-medium text-sky-400">
              {t("insuranceDisputesCommittee")}:
            </span>{" "}
            <a
              href="https://www.idc.gov.sa"
              className="text-sky-600 hover:underline"
            >
              <span className="text-gray-700">
                {t("insuranceDisputesCommitteeUrl")}
              </span>
            </a>
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 space-y-5">
          {customerrights.map((item, idx) => (
            <div key={item.title}>
              <h4 className="text-sky-600 font-semibold text-sm sm:text-base mb-1">
                <FaCheck className="inline-block text-sm text-sky-600 mr-1" />
                {t(item.title)}
              </h4>
              <p className="text-gray-600 text-sm leading-6">{t(item.text)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplaintDuties;
