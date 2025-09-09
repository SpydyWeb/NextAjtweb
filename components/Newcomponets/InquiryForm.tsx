'use client';
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Inquiry from "@/components/Newcomponets/Inquiry";
import Complaints from "@/components/Newcomponets/Complaints";

const InquiryForm = () => {
  const [activeTab, setActiveTab] = useState("inquiry");
  const { t } = useTranslation("inquiryform");

  // step states
  const [inquiryStep, setInquiryStep] = useState(1);
  const [complaintStep, setComplaintStep] = useState(1);

  const nextStep = () => {
    if (activeTab === "inquiry" && inquiryStep < 3) {
      setInquiryStep((prev) => prev + 1);
    }
    if (activeTab === "complaint" && complaintStep < 2) {
      setComplaintStep((prev) => prev + 1);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#1D3557]">
          {t("Inquiryheader")}
        </h2>
        <p className="mt-2 max-w-2xl mx-auto">{t("Inquiryheaderdesc")}</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-10">
        <button
          onClick={() => setActiveTab("inquiry")}
          className={`w-full sm:w-auto px-6 sm:px-10 py-2 rounded-md font-semibold transition ${
            activeTab === "inquiry"
              ? "bg-[#1D3557] text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {t("InquiryBtn")}
        </button>
        <button
          onClick={() => setActiveTab("complaint")}
          className={`w-full sm:w-auto px-6 sm:px-10 py-2 rounded-md font-semibold transition ${
            activeTab === "complaint"
              ? "bg-[#1D3557] text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {t("ComplaintBtn")}
        </button>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {activeTab === "inquiry" && (
          <Inquiry
            inquiryStep={inquiryStep}
            setInquiryStep={setInquiryStep}
            nextStep={nextStep}
          />
        )}

        {activeTab === "complaint" && (
          <Complaints
            complaintStep={complaintStep}
            setComplaintStep={setComplaintStep}
            nextStep={nextStep}
          />
        )}
      </div>
    </div>
  );
};

export default InquiryForm;
