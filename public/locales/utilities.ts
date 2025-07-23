import motorInsurance from "../assets/Motor-Insurance.png";
import visitVisaImg from "../assets/Visit-Visa-Extension-1.png";
import travelInsuImg from "../assets/Travel-Insurance.png";
import householderImg from "../assets/House holder_outlined.png";
import medicalDomesticHelperImg from "../assets/Medical Domestic Helper_outlined.png";
import craftsmanImg from "../assets/Craftsman_outlined.png";
import protectioImg from "../assets/Protection-Savings.png";
import medicalMalpractiseImg from "../assets/Medical Malpractice_outlined.png";
import marineInsuImg from "../assets/Marine-Insurance.png";
// const travelInsuImg = require('../assets/Travel-Insurance.png');

const aviationInsuranceImg = require("../assets/Aviation.png");
const accidentsAndLiabilityInsuranceImg = require("../assets/Accidents&Liability.png");
const propertyInsuranceImg = require("../assets/Property.png");
const engineerInsuranceImg = require("../assets/Engineering.png");
const MotorCarousal = require("../assets/43023.jpg");
const PNSCarousal = require("../assets/4412.jpg");
const TravelCarousal = require("../assets/7506769.jpg");
const MedicalCarousal = require("../assets/4587.jpg");
interface FeatureProduct {
  name: string;
  imgUrl: any;
  URL: string;
  BackgroundImg: any;
  point1: string;
  point2: string;
  point3: string;
  point4: string;
}
interface FeatureProductCorporate {
  name: string;
  imgUrl: any;
  URL: string;
  BackgroundImg: string;
}
const startYear = 1980;
const endYear = new Date().getFullYear();

export const FeaturesProducts: FeatureProduct[] = [
  {
    name: "motorInsurance",
    imgUrl: motorInsurance,
    URL: "/IndividualProducts/Motor",
    BackgroundImg: MotorCarousal,
    point1: "Pay up-to 6 installments",
    point2: "Cash Back With Drive App",
    point3: "Insure Online in Seconds",
    point4: "Motor coverage options",
  },
  {
    name: "visitVisaExtension",
    imgUrl: visitVisaImg,
    URL: "/IndividualProducts/VisitVisa",
    BackgroundImg: PNSCarousal,
    point1: "",
    point2: "",
    point3: "",
    point4: "",
  },
  {
    name: "travelInsurance",
    imgUrl: travelInsuImg,
    URL: "/IndividualProducts/Travel",
    BackgroundImg: PNSCarousal,
    point1: "",
    point2: "",
    point3: "",
    point4: "",
  },
  {
    name: "householderInsurance",
    imgUrl: householderImg,
    URL: "/IndividualProducts/Householder",
    BackgroundImg: PNSCarousal,
    point1: "",
    point2: "",
    point3: "",
    point4: "",
  },
  {
    name: "medicalMalpractice",
    imgUrl: medicalMalpractiseImg,
    URL: "/IndividualProducts/Malpractise",
    BackgroundImg: MedicalCarousal,
    point1: "",
    point2: "",
    point3: "",
    point4: "",
  },
  {
    name: "protectionSavings",
    imgUrl: protectioImg,
    URL: "/IndividualProducts/ProtectionSaving",
    BackgroundImg: PNSCarousal,
    point1: "",
    point2: "",
    point3: "",
    point4: "",
  },
  {
    name: "craftsmenInsurance",
    imgUrl: craftsmanImg,
    URL: "/IndividualProducts/Craftsmen",
    BackgroundImg: PNSCarousal,
    point1: "",
    point2: "",
    point3: "",
    point4: "",
  },
  {
    name: "medicalDomesticHelperInsurance",
    imgUrl: medicalDomesticHelperImg,
    URL: "/IndividualProducts/DomesticHelper",
    BackgroundImg: MedicalCarousal,
    point1: "",
    point2: "",
    point3: "",
    point4: "",
  },
];

export const FeatureProductCorporate: FeatureProductCorporate[] = [
  //Mahesh
  {
    name: "motorInsurance",
    imgUrl: motorInsurance,
    URL: "/CorporateProducts/Motor",
    BackgroundImg: MotorCarousal,
  },
  {
    name: "medicalInsurance",
    imgUrl: visitVisaImg,
    URL: "/CorporateProducts/Medical",
    BackgroundImg: MedicalCarousal,
  },
  {
    name: "marineInsurance",
    imgUrl: marineInsuImg,
    URL: "/CorporateProducts/Marine",
    BackgroundImg: PNSCarousal,
  },
  {
    name: "accidentAndLiabilityInsurance",
    imgUrl: accidentsAndLiabilityInsuranceImg,
    URL: "/CorporateProducts/Accident",
    BackgroundImg: MedicalCarousal,
  },
  {
    name: "propertyInsurance",
    imgUrl: propertyInsuranceImg,
    URL: "/CorporateProducts/Property",
    BackgroundImg: PNSCarousal,
  },
  {
    name: "protectionSavings",
    imgUrl: protectioImg,
    URL: "/CorporateProducts/ProtectionSavingCorporate",
    BackgroundImg: PNSCarousal,
  },
  {
    name: "engineeringInsurance",
    imgUrl: engineerInsuranceImg,
    URL: "/CorporateProducts/Engineering",
    BackgroundImg: PNSCarousal,
  },

  {
    name: "aviationInsurance",
    imgUrl: aviationInsuranceImg,
    URL: "/CorporateProducts/Aviation",
    BackgroundImg: MedicalCarousal,
  },
];

export const dateList = [
  { value: "1", label: "01" },
  { value: "2", label: "02" },
  { value: "3", label: "03" },
  { value: "4", label: "04" },
  { value: "5", label: "05" },
  { value: "6", label: "06" },
  { value: "7", label: "07" },
  { value: "8", label: "08" },
  { value: "9", label: "09" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
  { value: "14", label: "14" },
  { value: "15", label: "15" },
  { value: "16", label: "16" },
  { value: "17", label: "17" },
  { value: "18", label: "18" },
  { value: "19", label: "19" },
  { value: "20", label: "20" },
  { value: "21", label: "21" },
  { value: "22", label: "22" },
  { value: "23", label: "23" },
  { value: "24", label: "24" },
  { value: "25", label: "25" },
  { value: "26", label: "26" },
  { value: "27", label: "27" },
  { value: "28", label: "28" },
  { value: "29", label: "29" },
  { value: "30", label: "30" },
  { value: "31", label: "31" },
];

export const yearList = Array.from(
  { length: endYear - startYear + 1 },
  (_, i) => {
    const year = startYear + i;
    return {
      value: year.toString(),
      label: year.toString(),
    };
  }
);
