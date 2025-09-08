"use client";
import React from "react";
import { FaCheck, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsTwitterX, BsGlobe } from "react-icons/bs";
import ComplaintDuties from "@/components/Newcomponets/ComplaintDuties";
import { useTranslation } from "react-i18next";
const CustomerRights: React.FC = () => {
  const { t } = useTranslation("customerrights");
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-[#1D3557] mb-4">
          {t("CustomerRights")}
        </h2>
        <p className="text-center  max-w-3xl mx-auto mb-8 text-sm sm:text-base leading-6">
          {t("CustomerRightsDescription")}
        </p>
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 space-y-6">
          <div className="space-y-5">
            <div>
              <h4 className="text-sky-600 font-semibold text-sm sm:text-base mb-1">
                <FaCheck className="inline-block text-sm text-sky-600 mr-1" />
                {t("insurancepolicy")}
              </h4>
              <p className="text-gray-600 text-sm leading-6">
                {t("insurancepolicydescription")}
              </p>
            </div>

            <div>
              <h4 className="text-sky-600 font-semibold text-sm sm:text-base mb-1">
                <FaCheck className="inline-block text-sm text-sky-600 mr-1" />
                {t("transparency")}
              </h4>
              <p className="text-gray-600 text-sm leading-6">
                {t("transparencydescription")}
              </p>
            </div>

            <div>
              <h4 className="text-sky-600 font-semibold text-sm sm:text-base mb-1">
                <FaCheck className="inline-block text-sm text-sky-600 mr-1" />
                {t("grievance")}
              </h4>
              <p className="text-gray-600 text-sm leading-6">
                {t("grievancedescription")}
              </p>
              <p className="text-gray-600 text-sm leading-6"></p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 text-sm">
            <div className="flex items-start gap-3">
              <FaPhone className="text-sky-600 text-lg mt-0.5" />
              <div>
                <div className="text-sky-600 font-medium">
                  {t("callcenter")}
                </div>
                <div className="text-gray-700">{t("callcenternumber")}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MdEmail className="text-sky-600 text-lg mt-0.5" />
              <div>
                <div className="text-sky-600 font-medium">
                  {t("complaintsemail")}
                </div>
                <div className="text-gray-700">
                  {t("complaintsemailaddress")}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <BsTwitterX className="text-sky-600 text-lg mt-0.5" />
              <div>
                <div className="text-sky-600 font-medium">
                  {t("socialmedia")}
                </div>
                <div className="text-gray-700">{t("socialmedianame")}</div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <BsGlobe className="text-sky-600 text-lg mt-0.5" />
              <div>
                <div className="text-sky-600 font-medium">{t("website")}</div>
                <div className="text-gray-700">{t("websiteurl")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ComplaintDuties />
    </section>
  );
};

export default CustomerRights;
