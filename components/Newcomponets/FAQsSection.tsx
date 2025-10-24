"use client";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Appstore from '../../public/assets/Images/ImagesIcons/Appstore.png';
import Playstore from '../../public/assets/Images/ImagesIcons/playstore.webp';


type TabKey = "motor" | "visitvisa" | "medical" | "protection" | "contacts";

export type QAItem = {
  question: string;
  answer: string;
  ansdesc2?: { answer2: string }[];
  ansdesc?: { answer1: string }[];
  listItems?: { item: string }[];
  multipleItems?: { item: string }[];
};

export type FAQDataType = {
  motor: QAItem[];
  visitvisa: QAItem[];
  medical: QAItem[];
  protection: QAItem[];
  contacts: QAItem[];
};

const TABS: { key: TabKey; label: string }[] = [
  { key: "motor", label: "motor" },
  { key: "visitvisa", label: "vsitVisa" },
  { key: "medical", label: "Medical" },
  { key: "protection", label: "protSavings" },
  { key: "contacts", label: "CONTACTDETAILS" },
];

export  const FAQ_DATA:FAQDataType= {
    motor: [
      {
        question: "howToIssueVehicleInsPol",
        answer: "yourThirdPartyVehicleInsPolCanBeIssuedInVerySimplifiedWayAllWhatYouNeedToDoIsToFollowTheSimpleStepsOnMotorSectionToGetYourPolAndYouCanIssueCompInsPolByVisitingOneOfOurBranches",
      },
      {
        question: "whatAreTheDocRequiredToIssueVehicleInsPol",
        answer: "itsVeryEasyToIssueThirdPartyVehicleInsWithoutTheNeedOfAnyDocOnMotorSectionForCompVehicleInsItRequiresVehicleInspectionOnly",
      },
      {
        question: "isTheNajmDisAppliedIfThereIsPastRecordOfNoAccidents",
        answer: "yesTheNajmDiscountIsAppliedIfThereIsPastRecordOfNoAccidentsAndYouCanFindOutTheDiscountForYourDocumentsThroughTheNajmWebsite",
      },
      {
        question: "canVehicleInsurancePolBePrinted",
        answer: "youCanPrintCopyOfTheInsPolicyThroughTheElectronicServices",
      },
        {
        question: "whatAreTheDocRequiredToSubClaim",
        answer: "TheDocRequiredPoint1",
         listItems: [
        { item: "TheDocRequiredPoint2" },
        { item: "TheDocRequiredPoint3" },
        { item: "TheDocRequiredPoint4" },
        { item: "TheDocRequiredPoint5" },
        { item: "TheDocRequiredPoint6" },
        { item: "TheDocRequiredPoint7" },
      ],
      },
       {
        question: "inTheEventOfAnAccidentIsTheVehicleCompensatedOrRepaired",
        answer: "yesIfTheInsIsAgainstThirdPartiesTheThirdPartyWillBeCompensatedIfTheInsuranceIsComprehensiveTheInsured’sVehicleWillBeRepairedAndTheThirdPartyWillBeCompensatedIfThereIsThirdParty",
      },
       {
        question: "canTheAmountOfTheClaimOrCancellationBeDeliveredByCheque",
        answer: "noAmountCanBeDeliveredByChequeButByBankTransfer",
      },
       {
        question: "whatIsTheProcessingTimeForClaim",
        answer: "theStatutoryPeriodForProcessingTheClaimIsDaysFromTheDateOfReceivingCompleteClaimDoc",
      },
       {
        question: "canTheStatusOfTheClaimBeFollowed",
        answer: "youCanContactUsByCallingTheTollFreeNumberAndInquireAboutYourClaim",
      },
       {
        question: "inTheEventOfAnAccidentAndTheInsuredDrivingLicenseIsExpiredIsTheAccidentCovered",
        answer: "toCoverTheAccidentTheLicenseMustBeRenewedWithin50WorkingDaysFromTheDateOfTheAccidentInOrderToCompensateTheInjuredPerson",
        
      },
      {
        question: "isItPossibleToBenefitFromTheVehicleInsIfTheVehicleRegistrationHasExpired",
        answer: "yesYouCanBenefitFromVehicleInsAndYouCanAlsoRegisterForVehicleInsAndRenewYourVehicleRegistrationLater",
      },
      {
        question: "whatAreTheDocRequiredToCancelTheInsInTheEventOfTransferringTheOwnershipOfTheVehicleToAnotherOwner",
        answer: "CanceltheinsurancePoint1",
        ansdesc:[
          { answer1:"CanceltheinsurancePoint6", },
        ],
         
        listItems: [
        { item: "CanceltheinsurancePoint2" },
        { item: "CanceltheinsurancePoint3" },
        { item: "CanceltheinsurancePoint4" }, 
        { item: "CanceltheinsurancePoint5" }, 
          ],
         
      },
      {
        question: "whatAreTheDocRequiredToCancelVehicleInsInCaseOfChangingTheInsPol",
        answer: "RequiredToCancelVehiclePoint1",
           ansdesc:[
          { answer1:"RequiredToCancelVehiclePoint4", },
        ],
         
        listItems: [
        { item: "RequiredToCancelVehiclePoint2" },
        { item: "RequiredToCancelVehiclePoint3" }, 
          ],
      
      },
      {
        question: "whenWillTheAmountBeRefundedAfterCancelingTheInsPol",
        answer: "inTheEventThatCancellationReqIsSubTheRefundedAmountWillBeTransferredToYourAccountWithin3WorkingDaysFromTheDateOfCancellation",
      },
      {
        question: "canInsBeTransferred",
        answer: "theInsCantBeTransferredButItCanBeCanceledAndRefundedAccordingToTheTermsAndConditionsOfThePol",
      },
      {
        question: "doesTheVehicleInsPolCoverAccidentsOutsideTheKingdomOfSaudiArabia",
        answer: "theThirdPartyInsPolDoesNotCoverAccidentsOutsideTheKingdomOfSaudiArabia",
      },
    ],
    visitvisa: [
      {
        question: "howCanIIssueVisitVisaMedicalInsPol",
        answer: "youCanIssueVisitorVisaMedicalInsPolicyThroughTheEnjazWebsite",
      },
      {
        question: "howCanIExtendMyVisitVisaMedicalInsPol",
        answer: "youCanExtendTheVisitVisaMedicalInsPolicyThroughTheWebsiteOfUnderInsureNowSectionVisitVisa",
      },
      {
        question: "howCanICancelTheVisitorVisaMedicalInsPol",
        answer: "VisitorVisaMedicalPoint1",
           ansdesc2:[
          { answer2:"VisitorVisaMedicalPoint2", },
        ],
         listItems: [
        { item: "VisitorVisaMedicalPoint3" },
        { item: "VisitorVisaMedicalPoint4" },
        { item: "VisitorVisaMedicalPoint5" },
        { item: "VisitorVisaMedicalPoint6" },
      ],
    },
  ],
    medical: [
      {
        question: "howCanIApplyMedicalIns",
        answer: "yourMedInsPolCanBeIssuedInAVerySimplifiedWayAllWhatYouNeedToDoIsToRegisterYourReqInTheMedSectionOrByCallingOurTollFreeNo",
      },
      {
        question: "whatAreTheMinimumRequirementsForAcquiringSMEHealthInsQuot",
        answer: "EquirementsForAcquiringPoint1",
          listItems: [  
          {item:"EquirementsForAcquiringPoint2"},
          {item:"EquirementsForAcquiringPoint3"},
          ]
      },
       {
        question: "whatHospAreCoveredByMyMedIns",
        answer: "HospAreCoveredPoint1",
         multipleItems: [  
          {item:"HospAreCoveredPoint2"},
          {item:"HospAreCoveredPoint3"},

          ]

      },
      {
        question: "howCanIRenewMyInsPol",
        answer: "weMadeYourPolRenewalSoEasyAllWhatYouNeedToDoIsToFillTheReferralFormInThisWebsiteOrCallOurTollFreeNumberWhereYouWillHaveASpecializedRelationManagerToServeYou",
      },
       {
        question: "canIDoMyAltRemotelyWithoutVisitingTheBranch",
        answer: "weSimplifiedTheProcessOfAlterAndMadeItSoEasyForYouToDoAllRequiredAltWhileSittingInTheOfficeWithVeryEasyAndSecureWay",
      },
      {
        question: "doYouHaveIndAndFamilyMedIns",
        answer: "weOnlyOfferMedInsForBusinesses",
      },
      
    ],
    protection: [
      {
        question: "howCanIContactTheCompany",
        answer: "yesContractHolderHasTheRightToChangeToAnyOtherInvestmentStrategyProvidedByTheCompany",
      },
    {
        question: "whatHappensIfPolHolderWishesToCancelPol",
        answer: "thisWillResultInFullEncashmentOfInvestmentAmountBeforeExpiryDateOfPolAfterDeductionOfCancellationFeesAndOtherFeesAsStipulatedInContractSchedule",
      },
     {
        question: "whatAreTheFactorsUsedToDecideSumCover",
        answer: "sumCoverDpendsOnAgeAnnualIncomeAndHealthCondition",
      },
     {
        question: "canPolHolderWithdrawFromInvestmentAmountDuringPolicyTerm",
        answer: "yesAfterTwoYearsOfPolEffDateThroughServiceCalledPartialWithdrawalAndSubjectToTermsAndCond",
      },
    {
        question: "isPossibleToPayAdvancedPayments",
        answer: "yesAdvancedPaymentsPossibleWithLimitOf12InstallmentsInAdvanceSubjectToCompanyApprovalSuchAmountWillBeAddedToInvestmentAmounts",
      },{
        question: "canPolHolderChangeBeneficiariesDuringPolTerm",
        answer: "yesBeforeOccurrenceOfCoveredEventConsentOfExistingBeneficiaryNotNeeded",
      },
    {
        question: "whenThePolIsEffAndBenefitsCanBeUsed",
        answer: "effDateStartsOnTheDateTheCompanyAcceptsTheRiskOfCoveredEventEffDateIsStipulatedOnContractSchedule",
      },{
        question: "howToPayOutstandingPremiums",
        answer: "outstandingPremCanBePaidThroughBankTransferMADAOrThroughOneOfAljaziraBranches",
      },
    {
        question: "howToPayPremiums",
        answer: "directDebitMandateOrStandingOrder",
      },
    ],
    contacts: [
      {
        question: "howCanIContactTheCompany",
        answer: "ContactTheCompanyAdd1",
        listItems: [
        { item: "ContactTheCompanyAdd2" },
        { item: "ContactTheCompanyAdd3" },
        { item: "ContactTheCompanyAdd4" },
        { item: "ContactTheCompanyAdd5" },
      ],
      },
      {
        question: "whereAreAljTakafulBranchesLocated",
        answer: "youCanFindOutAboutAlJazeeraTakafulBranchesAndAgentsThroughTheWebsite",
      },
      {
        question: "whatIsTheWayToApplyForJobInAljTakafulCompany",
        answer: "youCanApplyForJobViaEmail",
      },
      {
        question: "whatIsTheMethodOfFilingComplaint",
        answer: "youCanSubmitComplaintThroughTheFollowingMeans",
        listItems:[
          { item: "MethodOfFilingComplaintAdd2" },
          { item: "MethodOfFilingComplaintAdd3" },
          { item: "MethodOfFilingComplaintAdd4" },
          { item: "MethodOfFilingComplaintAdd5" }
        ]
      },
    ],
  };

const Faqs: React.FC = () => {
  const { t } = useTranslation("frequentlyaskedquestions");
  const [activeTab, setActiveTab] = useState<TabKey>("motor");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
                {t(tab.label)}
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
     {qa.ansdesc2 && qa.ansdesc2.length > 0 && (
      <div className="mt-2 text-gray-600 leading-7 text-sm sm:text-base">
        {qa.ansdesc2.map((descItem) => (
          <div key={descItem.answer2} className="">
            {t(descItem.answer2)}
          </div>
        ))}
      </div>
    )}
 {qa.multipleItems && qa.multipleItems.length > 0 && (
  <div className="mt-2 text-gray-600 leading-7 text-sm sm:text-base">
    {qa.multipleItems.map((item) => (
      <div key={item.item} className="">
        {t(item.item)}
      </div>
    ))}
    <div className="flex items-center gap-4 mt-4 pl-10">
      <a
        href="https://apps.apple.com/us/app/mynextcare/id1039800748"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="footer-stores w-32 h-auto"
          src={Appstore} 
          alt="App Store"
          width={50}
          height={50}
        />
      </a>

      <a
        href="https://play.google.com/store/apps/details?id=com.nextcare.app&hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          className="footer-stores w-32 h-auto"
          src={Playstore} 
          alt="Google Play"
           width={50}
          height={50}
        />
      </a>
    </div>
  </div>
)}
    {qa.listItems && qa.listItems.length > 0 && (
      <div className="mt-2 text-gray-600 leading-7 text-sm sm:text-base">
        {qa.listItems.map((listItem) => (
          <div key={listItem.item} className="pl-10">
            {t(listItem.item)}
          </div>
        ))}
      </div>
    )}
     {qa.ansdesc && qa.ansdesc.length > 0 && (
      <div className="mt-2 text-gray-600 leading-7 text-sm sm:text-base">
        {qa.ansdesc.map((descItem) => (
          <div key={descItem.answer1} className="">
            {t(descItem.answer1)}
          </div>
        ))}
      </div>
    )}
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
