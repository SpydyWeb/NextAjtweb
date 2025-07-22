import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import landingPageEN from './constants/translation/landingpage/en.json';
import landingPageAR from './constants/translation/landingpage/ar.json';
import motorPlanEN from './constants/translation/individualproducts/motorplan/en.json';
import motorPlanAR from './constants/translation/individualproducts/motorplan/ar.json';
import travelPlanEN from './constants/translation/individualproducts/travelplan/en.json';
import travelPlanAR from './constants/translation/individualproducts/travelplan/ar.json';
import visitVisaPlanEN from './constants/translation/individualproducts/visitvisaplan/en.json';
import visitVisaPlanAR from './constants/translation/individualproducts/visitvisaplan/ar.json';
import houseHolderPlanAR from './constants/translation/individualproducts/householder/ar.json';
import houseHolderPlanEN from './constants/translation/individualproducts/householder/en.json';
import aboutUsEN from './constants/translation/aboutus/en.json';
import aboutUsAR from './constants/translation/aboutus/ar.json';
import pnsAR from './constants/translation/pns/ar.json';
import pnsEN from './constants/translation/pns/en.json';
import consentFormEN from './constants/translation/ConsentForm/En.json';
import consentFormAR from './constants/translation/ConsentForm/En.json';
import contactEN from './constants/translation//Contact/En.json';
import contactAR from './constants/translation/Contact/Ar.json';
import privacyPolicyEN from './constants/translation/Privacypolicy/En.json';
import privacyPolicyAR from './constants/translation/Privacypolicy/Ar.json';
import shareHolderEN from './constants/translation/ShareHolder/En.json';
import shareHolderAR from './constants/translation/ShareHolder/Ar.json';
import PNSFlowEN from './constants/translation/PNSFlow/en.json';
import PNSFlowAR from './constants/translation/PNSFlow/ar.json';
import EServiceEN from './constants/translation/EServices/En.json';
import EServiceAR from './constants/translation/EServices/Ar.json';
import DownlaodEN from './constants/translation/Download/En.json';
import DownlaodAR from './constants/translation/Download/Ar.json';
import CrafstmanEn from './constants/translation/individualproducts/Crafstman/en.json';
import CrafstmanAr from './constants/translation/individualproducts/Crafstman/ar.json';
import FraudEN from './constants/translation/fraud/en.json';
import FraudAR from './constants/translation/fraud/ar.json';
import footerEN from "./constants/translation/FooterLong/en.json";
import footerAR from "./constants/translation/FooterLong/ar.json";
import FAQsEN from "./constants/translation/FAQs/En.json";
import FAQsAR from "./constants/translation/FAQs/Ar.json";
import EnquiryEN from "./constants/translation/Enquiry/En.json";
import EnquiryAR from "./constants/translation/Enquiry/Ar.json";
import MotorSearchEn from './constants/translation/PrintPolicy/En.json'
import MotorSearchAr from './constants/translation/PrintPolicy/Ar.json'
import MedicalMalpractisePlanEn from './constants/translation/individualproducts/MedicalMalpractisePlan/En.json';
import MedicalMalpractisePlanAr from './constants/translation/individualproducts/MedicalMalpractisePlan/Ar.json';
import MedicalDomesticHelperEn from './constants/translation/individualproducts/MedicalDomesticHelper/En.json';
import MedicalDomesticHelperAr from './constants/translation/individualproducts/MedicalDomesticHelper/Ar.json';
import MedicalAR from "./constants/translation/corporateproducts/medical/ar.json";
import MedicalEN from "./constants/translation/corporateproducts/medical/en.json";
import MarineEN from "./constants/translation/corporateproducts/marine/en.json";
import MarineAR from "./constants/translation/corporateproducts/marine/ar.json";
import AccidentAR from "./constants/translation/corporateproducts/accident/ar.json";
import AccidentEN from "./constants/translation/corporateproducts/accident/en.json";
import PropertyPlanEn from './constants/translation/corporateproduct/PropertyPlan/En.json'
import PropertyPlanAr from './constants/translation/corporateproduct/PropertyPlan/Ar.json'
import CorporatePnSEn from './constants/translation/corporateproduct/PandS/En.json'
import CorporatePnSAr from './constants/translation/corporateproduct/PandS/Ar.json'
import AviationEn from './constants/translation/corporateproduct/Aviation/En.json'
import AviationAr from './constants/translation/corporateproduct/Aviation/Ar.json'
import engineeringEn from './constants/translation/corporateproduct/engineering/En.json'
import engineeringAr from './constants/translation/corporateproduct/engineering/Ar.json'
import PSClaimInstructionEn from './constants/translation/EServices/PSClaimInstruction/En.json'
import PSClaimInstructionAr from './constants/translation/EServices/PSClaimInstruction/Ar.json'
import MotorClaimInsEn from './constants/translation/EServices/MotorClaiminstruction/En.json'
import MotorClaimInsAr from './constants/translation/EServices/MotorClaiminstruction/Ar.json'
import MMPClaimEn from  './constants/translation/EServices/MMPClaimInstruction/En.json'
import MMPClaimAr from  './constants/translation/EServices/MMPClaimInstruction/Ar.json'
import TravelClaimInstructionEn from './constants/translation/EServices/TravelClaimInstruction/En.json'
import TravelClaimInstructionAr from './constants/translation/EServices/TravelClaimInstruction/Ar.json'
import ServiceRequestEn from './constants/translation/ServiceRequests/En.json'
import ServiceRequestAr from './constants/translation/ServiceRequests/Ar.json'

import MotorflowEn from './constants/translation/MotorFlow/En.json'
import MotorflowAr from './constants/translation/MotorFlow/Ar.json'
//mahesh transalations
import FooternewEn from './components/Home/Newcomponenets/ModalPopups.tsx/Footervalues/en.json'
import FooternewAR from './components/Home/Newcomponenets/ModalPopups.tsx/Footervalues/ar.json'
import AboutsValuesEn from './components/Home/Newcomponenets/ModalPopups.tsx/Aboutusvalues/en.json'
import AboutsValuesAR from './components/Home/Newcomponenets/ModalPopups.tsx/Aboutusvalues/ar.json'
import LoginvaluesEn from './components/Home/Newcomponenets/ModalPopups.tsx/Loginvalues/en.json'
import LoginvaluesAR from './components/Home/Newcomponenets/ModalPopups.tsx/Loginvalues/ar.json'
import OtpVerificationEn from './components/Home/Newcomponenets/ModalPopups.tsx/OtpVerification/en.json'
import OtpVerificationAR from './components/Home/Newcomponenets/ModalPopups.tsx/OtpVerification/ar.json'
import VerifyvaluesEn from './components/Home/Newcomponenets/ModalPopups.tsx/Verifyvalues/en.json'
import VerifyvaluesAR from './components/Home/Newcomponenets/ModalPopups.tsx/Verifyvalues/ar.json'
import CreateaccountsEn from './components/Home/Newcomponenets/ModalPopups.tsx/Createaccounts/en.json'
import CreateaccountsAR from './components/Home/Newcomponenets/ModalPopups.tsx/Createaccounts/ar.json'
import CorporateInsuranceEn from './components/Home/Newcomponenets/ModalPopups.tsx/Corporatevalues/en.json'
import CorporateInsuranceAR from './components/Home/Newcomponenets/ModalPopups.tsx/Corporatevalues/ar.json'
import IndividualInsuranceEn from './components/Home/Newcomponenets/ModalPopups.tsx/Individualvalues/en.json'
import IndividualInsuranceAR from './components/Home/Newcomponenets/ModalPopups.tsx/Individualvalues/ar.json'
import FirstPageEn from './components/Home/Newcomponenets/ModalPopups.tsx/Firstpagevalues/en.json'
import FirstPageAR from './components/Home/Newcomponenets/ModalPopups.tsx/Firstpagevalues/ar.json'
import HeadervaluesEn from './components/Home/Newcomponenets/ModalPopups.tsx/Headervalues/en.json'
import HeadervaluesAR from './components/Home/Newcomponenets/ModalPopups.tsx/Headervalues/ar.json'
import MyProfilevaluesEn from './components/Home/Newcomponenets/ModalPopups.tsx/MyProfilevalues/en.json'
import MyProfilevaluesAR from './components/Home/Newcomponenets/ModalPopups.tsx/MyProfilevalues/ar.json'
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
      ...FooternewEn,
      ...AboutsValuesEn,
      ...LoginvaluesEn,
      ...OtpVerificationEn,
      ...VerifyvaluesEn,
      ...CreateaccountsEn,
      ...CorporateInsuranceEn,
      ...IndividualInsuranceEn,
      ...FirstPageEn,
      ...HeadervaluesEn,
      ...MyProfilevaluesEn
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
      ...FooternewAR,
      ...AboutsValuesAR,
      ...LoginvaluesAR,
      ...OtpVerificationAR,
      ...VerifyvaluesAR,
      ...CreateaccountsAR,
      ...CorporateInsuranceAR,
       ...IndividualInsuranceAR,
       ...FirstPageAR,
       ...HeadervaluesAR,
       ...MyProfilevaluesAR
    },
  },
};
i18n
  .use(initReactI18next).init({
    resources,
    lng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;