"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import landingPageEN from "@/public/locales/translation/landingpage/en.json";
import landingPageAR from "@/public/locales/translation/landingpage/ar.json";
import motorPlanEN from "@/public/locales/translation/individualproducts/motorplan/en.json";
import motorPlanAR from "@/public/locales/translation/individualproducts/motorplan/ar.json";
import travelPlanEN from "@/public/locales/translation/individualproducts/travelplan/en.json";
import travelPlanAR from "@/public/locales/translation/individualproducts/travelplan/ar.json";
import visitVisaPlanEN from "@/public/locales/translation/individualproducts/visitvisaplan/en.json";
import visitVisaPlanAR from "@/public/locales/translation/individualproducts/visitvisaplan/ar.json";
import houseHolderPlanAR from "@/public/locales/translation/individualproducts/householder/ar.json";
import houseHolderPlanEN from "@/public/locales/translation/individualproducts/householder/en.json";
import aboutUsEN from "@/public/locales/translation/aboutus/en.json";
import aboutUsAR from "@/public/locales/translation/aboutus/ar.json";
import pnsAR from "@/public/locales/translation/pns/ar.json";
import pnsEN from "@/public/locales/translation/pns/en.json";
import consentFormEN from "@/public/locales/translation/ConsentForm/En.json";
import consentFormAR from "@/public/locales/translation/ConsentForm/En.json";
import contactEN from "@/public/locales/translation//Contact/En.json";
import contactAR from "@/public/locales/translation/Contact/Ar.json";
import privacyPolicyEN from "@/public/locales/translation/Privacypolicy/En.json";
import privacyPolicyAR from "@/public/locales/translation/Privacypolicy/Ar.json";
import shareHolderEN from "@/public/locales/translation/ShareHolder/En.json";
import shareHolderAR from "@/public/locales/translation/ShareHolder/Ar.json";
import PNSFlowEN from "@/public/locales/translation/PNSFlow/en.json";
import PNSFlowAR from "@/public/locales/translation/PNSFlow/ar.json";
import EServiceEN from "@/public/locales/translation/EServices/En.json";
import EServiceAR from "@/public/locales/translation/EServices/Ar.json";
import DownlaodEN from "@/public/locales/translation/Download/En.json";
import DownlaodAR from "@/public/locales/translation/Download/Ar.json";
import CrafstmanEn from "@/public/locales/translation/individualproducts/Crafstman/en.json";
import CrafstmanAr from "@/public/locales/translation/individualproducts/Crafstman/ar.json";
import FraudEN from "@/public/locales/translation/fraud/en.json";
import FraudAR from "@/public/locales/translation/fraud/ar.json";
import footerEN from "@/public/locales/translation/FooterLong/en.json";
import footerAR from "@/public/locales/translation/FooterLong/ar.json";
import FAQsEN from "@/public/locales/translation/FAQs/En.json";
import FAQsAR from "@/public/locales/translation/FAQs/Ar.json";
import EnquiryEN from "@/public/locales/translation/Enquiry/En.json";
import EnquiryAR from "@/public/locales/translation/Enquiry/Ar.json";
import MotorSearchEn from "@/public/locales/translation/PrintPolicy/En.json";
import MotorSearchAr from "@/public/locales/translation/PrintPolicy/Ar.json";
import MedicalMalpractisePlanEn from "@/public/locales/translation/individualproducts/MedicalMalpractisePlan/En.json";
import MedicalMalpractisePlanAr from "@/public/locales/translation/individualproducts/MedicalMalpractisePlan/Ar.json";
import MedicalDomesticHelperEn from "@/public/locales/translation/individualproducts/MedicalDomesticHelper/En.json";
import MedicalDomesticHelperAr from "@/public/locales/translation/individualproducts/MedicalDomesticHelper/Ar.json";
import MedicalAR from "@/public/locales/translation/corporateproducts/medical/ar.json";
import MedicalEN from "@/public/locales/translation/corporateproducts/medical/en.json";
import MarineEN from "@/public/locales/translation/corporateproducts/marine/en.json";
import MarineAR from "@/public/locales/translation/corporateproducts/marine/ar.json";
import AccidentAR from "@/public/locales/translation/corporateproducts/accident/ar.json";
import AccidentEN from "@/public/locales/translation/corporateproducts/accident/en.json";
import PropertyPlanEn from "@/public/locales/translation/corporateproduct/PropertyPlan/En.json";
import PropertyPlanAr from "@/public/locales/translation/corporateproduct/PropertyPlan/Ar.json";
import CorporatePnSEn from "@/public/locales/translation/corporateproduct/PandS/En.json";
import CorporatePnSAr from "@/public/locales/translation/corporateproduct/PandS/Ar.json";
import AviationEn from "@/public/locales/translation/corporateproduct/Aviation/En.json";
import AviationAr from "@/public/locales/translation/corporateproduct/Aviation/Ar.json";
import engineeringEn from "@/public/locales/translation/corporateproduct/engineering/En.json";
import engineeringAr from "@/public/locales/translation/corporateproduct/engineering/Ar.json";
import PSClaimInstructionEn from "@/public/locales/translation/EServices/PSClaimInstruction/En.json";
import PSClaimInstructionAr from "@/public/locales/translation/EServices/PSClaimInstruction/Ar.json";
import MotorClaimInsEn from "@/public/locales/translation/EServices/MotorClaiminstruction/En.json";
import MotorClaimInsAr from "@/public/locales/translation/EServices/MotorClaiminstruction/Ar.json";
import MMPClaimEn from "@/public/locales/translation/EServices/MMPClaimInstruction/En.json";
import MMPClaimAr from "@/public/locales/translation/EServices/MMPClaimInstruction/Ar.json";
import TravelClaimInstructionEn from "@/public/locales/translation/EServices/TravelClaimInstruction/En.json";
import TravelClaimInstructionAr from "@/public/locales/translation/EServices/TravelClaimInstruction/Ar.json";
import ServiceRequestEn from "@/public/locales/translation/ServiceRequests/En.json";
import ServiceRequestAr from "@/public/locales/translation/ServiceRequests/Ar.json";
import MotorflowEn from "@/public/locales/translation/MotorFlow/En.json";
import MotorflowAr from "@/public/locales/translation/MotorFlow/Ar.json";
import heroEn from "@/public/locales/translation/hero/en.json";
import heroAr from "@/public/locales/translation/hero/ar.json";
import FeaturesEn from "@/public/locales/translation/features/en.json";
import FeaturesAr from "@/public/locales/translation/features/ar.json";
import statsEn from "@/public/locales/translation/stats/en.json";
import statsAr from "@/public/locales/translation/stats/ar.json";
import ourclinetsEn from "@/public/locales/translation/ourclients/en.json";
import ourclinetsAr from "@/public/locales/translation/ourclients/ar.json";
import latestnewsEn from "@/public/locales/translation/latestnews/en.json";
import latestnewsAr from "@/public/locales/translation/latestnews/ar.json";
import contactusEn from "@/public/locales/translation/contactus/en.json";
import contactusAr from "@/public/locales/translation/contactus/ar.json"; 
import footerEn from "@/public/locales/translation/footer/en.json";
import footerAr from "@/public/locales/translation/footer/ar.json"; 
const resources = {
  en: {
    translation: {
      ...landingPageEN,
      ...motorPlanEN,
      ...travelPlanEN,
      ...visitVisaPlanEN,
      ...houseHolderPlanEN,
      ...aboutUsEN,
      ...pnsEN,
      ...consentFormEN,
      ...contactEN,
      ...privacyPolicyEN,
      ...shareHolderEN,
      ...PNSFlowEN,
      ...CrafstmanEn,
      ...FraudEN,
      ...EServiceEN,
      ...DownlaodEN,
      ...footerEN,
      ...FAQsEN,
      ...EnquiryEN,
      ...MotorSearchEn,
      ...MedicalMalpractisePlanEn,
      ...MedicalDomesticHelperEn,
      ...PropertyPlanEn,
      ...CorporatePnSEn,
      ...AviationEn,
      ...engineeringEn,
      ...PSClaimInstructionEn,
      ...MotorClaimInsEn,
      ...MMPClaimEn,
      ...TravelClaimInstructionEn,
      ...ServiceRequestEn,
      ...AccidentEN,
      ...MarineEN,
      ...MedicalEN,
      ...MotorflowEn,


      ...heroEn,
      ...FeaturesEn,
      ...statsEn,
      ...ourclinetsEn,
      ...latestnewsEn,
      ...contactusEn,
      ...footerEn
    },
  },
  ar: {
    translation: {
      ...landingPageAR,
      ...motorPlanAR,
      ...travelPlanAR,
      ...visitVisaPlanAR,
      ...houseHolderPlanAR,
      ...aboutUsAR,
      ...pnsAR,
      ...consentFormAR,
      ...contactAR,
      ...privacyPolicyAR,
      ...shareHolderAR,
      ...PNSFlowAR,
      ...CrafstmanAr,
      ...FraudAR,
      ...EServiceAR,
      ...DownlaodAR,
      ...footerAR,
      ...FAQsAR,
      ...EnquiryAR,
      ...MotorSearchAr,
      ...MedicalMalpractisePlanAr,
      ...MedicalDomesticHelperAr,
      ...PropertyPlanAr,
      ...CorporatePnSAr,
      ...AviationAr,
      ...engineeringAr,
      ...PSClaimInstructionAr,
      ...MotorClaimInsAr,
      ...MMPClaimAr,
      ...TravelClaimInstructionAr,
      ...ServiceRequestAr,
      ...AccidentAR,
      ...MarineAR,
      ...MedicalAR,
      ...MotorflowAr,


      ...heroAr,
      ...FeaturesAr,
      ...statsAr,
      ...ourclinetsAr,
      ...latestnewsAr,
      ...contactusAr,
      ...footerAr
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
