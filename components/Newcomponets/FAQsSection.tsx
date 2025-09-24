"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import { FAQ_DATA } from "@/lib/utilities";
type TabKey = "motor" | "visitvisa" | "medical" | "protection" | "contacts";

const TABS: { key: TabKey; label: string }[] = [
  { key: "motor", label: "Motor" },
  { key: "visitvisa", label: "Visit Visa" },
  { key: "medical", label: "Medical" },
  { key: "protection", label: "Protection & Savings" },
  { key: "contacts", label: "Contacts" },
];

const Faqs: React.FC = () => {
  const { t } = useTranslation("FAQs");

  const [activeTab, setActiveTab] = useState<TabKey>("motor");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const accordionData = [
    {
      question: t("howToIssueVehicleInsPol"),
      answer: t(
        "yourThirdPartyVehicleInsPolCanBeIssuedInVerySimplifiedWayAllWhatYouNeedToDoIsToFollowTheSimpleStepsOnMotorSectionToGetYourPolAndYouCanIssueCompInsPolByVisitingOneOfOurBranches"
      ),
    },
    {
      question: t("whatAreTheDocRequiredToIssueVehicleInsPol"),
      answer: t(
        "itsVeryEasyToIssueThirdPartyVehicleInsWithoutTheNeedOfAnyDocOnMotorSectionForCompVehicleInsItRequiresVehicleInspectionOnly"
      ),
    },
    {
      question: t("isTheNajmDisAppliedIfThereIsPastRecordOfNoAccidents"),
      answer: t(
        "yesTheNajmDiscountIsAppliedIfThereIsPastRecordOfNoAccidentsAndYouCanFindOutTheDiscountForYourDocumentsThroughTheNajmWebsite"
      ),
    },
    {
      question: t("canVehicleInsurancePolBePrinted"),
      answer: t("youCanPrintCopyOfTheInsPolicyThroughTheElectronicServices"),
    },
    {
      question: t("whatAreTheDocRequiredToSubClaim"),
      answer: (
        <div>
          <p>{t("TheDocRequiredPoint1")}</p>
          {/* <ul> */}
          <ul>
            <li>{t("TheDocRequiredPoint2")}</li>
            <li>{t("TheDocRequiredPoint3")}</li>
            <li>{t("TheDocRequiredPoint4")}</li>
            <li>{t("TheDocRequiredPoint5")}</li>
            <li>{t("TheDocRequiredPoint6")}</li>
            <li>{t("TheDocRequiredPoint7")}</li>
          </ul>{" "}
        </div>
      ),
    },
    {
      question: t("inTheEventOfAnAccidentIsTheVehicleCompensatedOrRepaired"),
      answer: t(
        "yesIfTheInsIsAgainstThirdPartiesTheThirdPartyWillBeCompensatedIfTheInsuranceIsComprehensiveTheInsured’sVehicleWillBeRepairedAndTheThirdPartyWillBeCompensatedIfThereIsThirdParty"
      ),
    },
    {
      question: t("canTheAmountOfTheClaimOrCancellationBeDeliveredByCheque"),
      answer: t("noAmountCanBeDeliveredByChequeButByBankTransfer"),
    },
    {
      question: t("whatIsTheProcessingTimeForClaim"),
      answer: t(
        "theStatutoryPeriodForProcessingTheClaimIsDaysFromTheDateOfReceivingCompleteClaimDoc"
      ),
    },
    {
      question: t("canTheStatusOfTheClaimBeFollowed"),
      answer: t(
        "youCanContactUsByCallingTheTollFreeNumberAndInquireAboutYourClaim"
      ),
    },
    {
      question: t(
        "inTheEventOfAnAccidentAndTheInsuredDrivingLicenseIsExpiredIsTheAccidentCovered"
      ),
      answer: t(
        "toCoverTheAccidentTheLicenseMustBeRenewedWithin50WorkingDaysFromTheDateOfTheAccidentInOrderToCompensateTheInjuredPerson"
      ),
    },
    {
      question: t(
        "isItPossibleToBenefitFromTheVehicleInsIfTheVehicleRegistrationHasExpired"
      ),
      answer: t(
        "yesYouCanBenefitFromVehicleInsAndYouCanAlsoRegisterForVehicleInsAndRenewYourVehicleRegistrationLater"
      ),
    },
    {
      question: t(
        "whatAreTheDocRequiredToCancelTheInsInTheEventOfTransferringTheOwnershipOfTheVehicleToAnotherOwner"
      ),
      answer: (
        <div>
          <p>{t("CanceltheinsurancePoint1")}</p>
          <ul>
            <li>{t("CanceltheinsurancePoint2")}</li>
            <li>{t("CanceltheinsurancePoint3")}</li>
            <li>{t("CanceltheinsurancePoint4")}</li>
            <li>{t("CanceltheinsurancePoint5")}</li>
          </ul>
          <p>{t("CanceltheinsurancePoint6")}</p>
        </div>
      ),
    },
    {
      question: t(
        "whatAreTheDocRequiredToCancelVehicleInsInCaseOfChangingTheInsPol"
      ),
      answer: (
        <div>
          <p>{t("RequiredToCancelVehiclePoint1")}</p>
          <ul>
            <li>{t("RequiredToCancelVehiclePoint2")}</li>
            <li>{t("RequiredToCancelVehiclePoint3")}</li>
          </ul>{" "}
          <p>{t("RequiredToCancelVehiclePoint4")}</p>{" "}
        </div>
      ),
    },
    {
      question: t("whenWillTheAmountBeRefundedAfterCancelingTheInsPol"),
      answer: t(
        "inTheEventThatCancellationReqIsSubTheRefundedAmountWillBeTransferredToYourAccountWithin3WorkingDaysFromTheDateOfCancellation"
      ),
    },
    {
      question: t("canInsBeTransferred"),
      answer: t(
        "theInsCantBeTransferredButItCanBeCanceledAndRefundedAccordingToTheTermsAndConditionsOfThePol"
      ),
    },
    {
      question: t(
        "doesTheVehicleInsPolCoverAccidentsOutsideTheKingdomOfSaudiArabia"
      ),
      answer: t(
        "theThirdPartyInsPolDoesNotCoverAccidentsOutsideTheKingdomOfSaudiArabia"
      ),
    },
  ];

  const items = FAQ_DATA[activeTab];

  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-[#1D3557] uppercase">
            {t("faqs")}
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-base ">
            {t("faqsdesc")}
          </p>
        </div>
        <div
          className="flex flex-wrap items-center gap-3 justify-center mb-8"
          role="tablist"
        >
          {TABS.map((tab) => {
            const active = tab.key === activeTab;
            return (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  setOpenIndex(0);
                }}
                aria-current={active ? "page" : undefined}
                className={[
                  "w-32 h-12 sm:w-36 sm:h-12 md:w-40 md:h-12 lg:w-48 lg:h-12",
                  "flex items-center justify-center px-4 rounded-md text-sm sm:text-base font-medium transition-colors border",
                  "whitespace-wrap",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400",
                  active
                    ? "bg-sky-500 border-sky-500 text-white"
                    : "bg-gray-100 border-gray-200 text-gray-700",
                ].join(" ")}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {items.map((qa, idx) => {
            const open = idx === openIndex;
            return (
              <div
                key={`${activeTab}-${idx}`}
                className="rounded-lg border border-gray-200 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between text-left px-4 sm:px-6 py-4 bg-gray-100"
                >
                  <span className="font-semibold text-base sm:text-lg text-[#1D3557]">
                    {t(qa.question)}
                  </span>
                  <FiChevronDown
                    className={`text-gray-600 text-xl transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open && (
                  <div className="bg-white px-4 sm:px-6 py-4 border-t border-gray-200">
                    <div className="text-gray-600 leading-7 text-sm sm:text-base">
                      {t(qa.answer)}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
