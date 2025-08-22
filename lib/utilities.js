import MotorImg from "../public/assets/Images/cardsimages/Motor-Insurance.png";
import Image1 from "../public/assets/Images/Boardmembers/Abdulmajeed.png";
import Image2 from "../public/assets/Images/Boardmembers/ABDULKAREEM.png";
import Image3 from "../public/assets/Images/Boardmembers/Khalid-alothman.png";
import Image4 from "../public/assets/Images/Boardmembers/Ashraf-Bseisu.png";
import Image5 from "../public/assets/Images/Boardmembers/naif-almsnd.png";
import Image6 from "../public/assets/Images/Boardmembers/ibrahim-alharabi.png";
import Image7 from "../public/assets/Images/Boardmembers/Abdulkarim-Al-Nujaidi.png";
import Image8 from "../public/assets/Images/Boardmembers/Yahya-Al-Mansour.png";
import Image9 from "../public/assets/Images/Boardmembers/SAGR-Nedarshah.png";

import Medical from "../public/assets/Images/ImagesIcons/Medical.png";
import Motor from "../public/assets/Images/ImagesIcons/Motor.png";
import Marine from "../public/assets/Images/ImagesIcons/Marine.png";
import Accidentliability from "../public/assets/Images/ImagesIcons/Accidentliability.png";
import Engineering from "../public/assets/Images/ImagesIcons/Engineering.png";
import Aviation from "../public/assets/Images/ImagesIcons/Aviation.png";
import Property from "../public/assets/Images/ImagesIcons/Property.png";
import Protectionsavings from "../public/assets/Images/ImagesIcons/ProtectionSavings.png";
//
import Travel from "../public/assets/Images/ImagesIcons/Travel.png";
import Householder from "../public/assets/Images/ImagesIcons/Householder.png";
import Visitvisa from "../public/assets/Images/ImagesIcons/visitvisa.png";
//
import Map from "../public/assets/Images/ImagesIcons/mapicon.png";
import Emailbox from "../public/assets/Images/ImagesIcons/emailimg.png";
import Mobhile from "../public/assets/Images/ImagesIcons/mobileicon.png";
import step1 from "../public/assets/Images/steps/step1.png";
import step2 from "../public/assets/Images/steps/step2.png";
import connetion1 from "../public/assets/Images/steps/connection1.png";
import connetion2 from "../public/assets/Images/steps/connection2.png";
import connetion3 from "../public/assets/Images/steps/connection3.png";
import connetion4 from "../public/assets/Images/steps/connection4.png";

export const utilitiesData = {
  individualProducts: {
    title: "OurProducts",
    path: "",
    links: [
      { label: "CorporateProduct", path: "/corporateproducts" },
      { label: "RatailProduct", path: "/individualproducts" },
      // { "label": "visitVisaExtension", "path": "/IndividualProducts/VisitVisa" },
      // { "label": "HouseHolderheader", "path": "/IndividualProducts/Householder" },
      // { "label": "protectionSavings", "path": "/IndividualProducts/ProtectionSaving" },
      // { "label": "medicalDomesticHelperInsurance", "path": "/IndividualProducts/DomesticHelper" },
      // { "label": "travelInsurance", "path": "/IndividualProducts/Travel" },
      // { "label": "craftsmenInsurance", "path": "/IndividualProducts/Craftsmen" }
    ],
  },
  corporateProducts: {
    title: "CustomerCare",
    path: "",
    links: [
      // { "label": "medical", "path": "/CorporateProducts/Medical" },
      // { "label": "motor", "path": "/CorporateProducts/Motor" },
      // { "label": "marine", "path": "/CorporateProducts/Marine" },
      // { "label": "accidentAndLiabilityInsurance", "path": "/CorporateProducts/Accident" },
      // { "label": "property", "path": "/CorporateProducts/Property" },
      // { "label": "engineering", "path": "/CorporateProducts/Engineering" },
      // { "label": "aviation", "path": "/Aviation" },
      // { "label": "protectionSavings", "path": "/IndividualProducts/ProtectionSaving" }
    ],
  },
  customerCare: {
    title: "AboutUs",
    path: "/aboutus",
    links: [
      // { "label": "enquiry", "path": "/AboutUs" },
      // { "label": "fraud", "path": "/Corporateproducts" },
      // { "label": "faqs", "path": "/FAQs" },
      // { "label": "downloadCenter", "path": "/DownloadCenter" }
    ],
  },
  companyProfile: {
    title: "Carrer",
    path: "",
    links: [
      // { "label": "AboutUsHeader", "path": "/Aboutus" },
      // { "label": "footerLink5", "path": "/ContactUs" }
    ],
  },
  eServices: {
    title: "Contact",
    path: "",
    links: [
      // { "label": "printCertificate", "path": "/EServicesPrint" },
      // { "label": "claimStatus", "path": "/EServicesClaimStatus" },
      // { "label": "claimSubmission", "path": "/EServicesClaimSubmission" },
      // { "label": "najamStatus", "path": "/EServicesNajamStatus" },
      // { "label": "cchi", "path": "/EServicesCCHIStatus" },
      // { "label": "locateMedicalProviders", "path": "/EServiceMedicalProviders" },
      // { "label": "serviceRequest", "path": "/ServiceRequest" }
    ],
  },
};

export const logos = [
  { src: MotorImg, name: "logoipsum" },
  { src: MotorImg, name: "logoipsum" },
  { src: MotorImg, name: "logoipsum" },
  { src: MotorImg, name: "logoipsum" },
  { src: MotorImg, name: "logoipsum6" },
  // { src: MotorImg, name: 'logoipsum6' },
  // { src: MotorImg, name: 'logoipsum7' },
  // { src: MotorImg, name: 'logoipsum8' },
];

export const newsData = [
  { id: "01", title: "desc1", date: "23 Jan 2025" },
  { id: "02", title: "desc2", date: "23 Jan 2025" },
  { id: "03", title: "desc3", date: "23 Jan 2025" },
];

export const Steps = [
  {
    id: "01",
    title: "CompanyProfilHeader2",
    text: "CompanyProfilDesc2",
    BgImage: step1,
    stepconnection: connetion1,
  },
  {
    id: "02",
    title: "CompanyProfilHeader3",
    text: "CompanyProfilDesc3",
    BgImage: step1,
    stepconnection: connetion2,
  },
  {
    id: "03",
    title: "CompanyProfilHeader4",
    text: "CompanyProfilDesc4",
    BgImage: step2,
    stepconnection: connetion3,
  },
  {
    id: "04",
    title: "CompanyProfilHeader5",
    text: "CompanyProfilDesc5",
    BgImage: step2,
    stepconnection: connetion4,
  },
];

export const corporateproducts = [
  {
    title: "Medical",
    description: "MedicalDescription",
    icon: Medical,
    url: "/medicalinsuranceplan",
  },
  {
    title: "Motor",
    description: "MotorDescription",
    icon: Motor,
    url: "/motorplan",
  },
  {
    title: "Marine",
    description: "MarineDescription",
    icon: Marine,
    url: "/marineplan",
  },
  {
    title: "AccidentAndLiability",
    description: "AccidentAndLiabilityDescription",
    icon: Accidentliability,
    url: "/accidentplan",
  },
  {
    title: "Property",
    description: "PropertyDescription",
    icon: Property,
    url: "/propertyplan",
  },
  {
    title: "Engineering",
    description: "EngineeringDescription",
    icon: Engineering,
    url: "/engineeringplan",
  },
  {
    title: "Aviation",
    description: "AviationDescription",
    icon: Aviation,
    url: "/aviationplan",
  },
  {
    title: "ProtectionAndSavings",
    description: "ProtectionAndSavingsDescription",
    icon: Protectionsavings,
    url: "/protectionplan",
  },
];

export const individualproducts = [
  {
    title: "Travel",
    icon: Travel,
    description: "TravelDescription",
    url: "/travelpages",
  },
  {
    title: "VisitVisaExtension",
    icon: Visitvisa,
    description: "VisitVisaExtensionDescription",
    featured: true,
    url: "/visitvisaplan",
  },
  {
    title: "Motor1",
    icon: Motor,
    description: "MotorDescription1",
    url: "/motorinsuranceplan",
  },
  {
    title: "HouseHolder",
    icon: Householder,
    description: "HouseHolderDescription",
    url: "/householderplans",
  },
  {
    title: "MedicalDomesticHelper",
    icon: Medical,
    description: "MedicalDomesticHelperDescription",
    url: "/medicalinsuranceplan",
  },
  {
    title: "MedicalMalpractice",
    icon: Medical,
    description: "MedicalMalpracticeDescription",
    url: "/medicalmalpracticeplan",
  },
  {
    title: "Craftsmen",
    icon: "",
    description: "CraftsmenDescription",
    url: "/craftmenplan",
  },
  {
    title: "ProtectionAndSavings1",
    icon: Protectionsavings,
    description: "ProtectionAndSavingsDescription1",
    url: "/protectionplanr",
  },
];

export const footerLinks = {
  company: [
    { name: "footerLink1", href: "/aboutuspage" },
    { name: "footerLink2", href: "/E-Service" },
    { name: "footerLink3", href: "/FAQs" },
    { name: "footerLink4", href: "/DownloadCenter" },
    { name: "footerLink5", href: "/Career" },
  ],
  resources: [
    {
      name: "footerAddress1",
      href: "#",
      icon: Map,
    },
    {
      name: "footerAddress2",
      href: "#",
      icon: Map,
    },
    {
      name: "8003040400 | +966 12 6688877",
      href: "#",
      icon: Mobhile,
    },
    {
      name: "footerAddress4",
      href: "#",
      icon: Emailbox,
    },
  ],
  legal: [
    { name: "footerPdf1", href: "#" },
    { name: "footerPdf2", href: "#" },
    { name: "footerPdf3", href: "#" },
  ],
};
export const footernewLinks={
    AboutUs: [
    { name: "AboutUs", href: "/aboutus" },
    { name: "Takaful", href: "/E-Service" },
    { name: "ShariahInsuranceAuthority", href: "/FAQs" },
    { name: "PrivacyPolicy", href: "/DownloadCenter" },
    { name: "InvestorRelations", href: "/Career" },
    { name: "MediaCenter", href: "/DownloadCenter" },
    { name: "Careers", href: "/Career" },
  ],
    MyPolicies: [
    { name: "MyPolicies", href: "/aboutuspage" },
    { name: "FAQs", href: "/E-Service" },
    { name: "ALjaziraakafulCenter", href: "/FAQs" },
    { name: "OnlineInsuranceRegulations", href: "/DownloadCenter" },
  ],
    OurServices: [
    { name: "OurService", href: "/aboutuspage" },
    { name: "NajmStatus", href: "/E-Service" },
    { name: "PrintInsuranceCertificates", href: "/FAQs" },
    { name: "CHIStatus", href: "/DownloadCenter" },
    { name: "MoreOnlineServices", href: "/Career" },
    { name: "SurplusDistributionRegistration", href: "/Career" },
  ],
    UsefulLinks: [
    { name: "UsefulLinks", href: "/aboutuspage" },
    { name: "HealthServiceProviderNetwork", href: "/E-Service" },
    { name: "ConsumerProtectionPrinciples", href: "/FAQs" },
    { name: "InsuranceMarketCodeOfConduct", href: "/DownloadCenter" },
    { name: "CommitteeForInsurance", href: "/Career" },
    {name:"OurPartners", href: "/OurPartners" },
  ],
};
export const boardMembers = [
  {
    name: "CompanyProfilSubHeaderName1",
    role: "CompanyProfilSubHeaderDesig1",
    image: Image1,
  },
  {
    name: "CompanyProfilSubHeaderName2",
    role: "CompanyProfilSubHeaderDesig2",
    image: Image2,
  },
  {
    name: "CompanyProfilSubHeaderName3",
    role: "CompanyProfilSubHeaderDesig3",
    image: Image3,
  },
  {
    name: "CompanyProfilSubHeaderName4",
    role: "CompanyProfilSubHeaderDesig4",
    image: Image4,
  },
  {
    name: "CompanyProfilSubHeaderName5",
    role: "CompanyProfilSubHeaderDesig5",
    image: Image5,
  },
  {
    name: "CompanyProfilSubHeaderName6",
    role: "CompanyProfilSubHeaderDesig6",
    image: Image6,
  },
  {
    name: "CompanyProfilSubHeaderName7",
    role: "CompanyProfilSubHeaderDesig7",
    image: Image7,
  },
  {
    name: "CompanyProfilSubHeaderName8",
    role: "CompanyProfilSubHeaderDesig8",
    image: Image8,
  },
  {
    name: "CompanyProfilSubHeaderName9",
    role: "CompanyProfilSubHeaderDesig9",
    image: Image9,
  },
];

export const HeroSection = {
  Carousel: ["MotorImg", "MotorImg", "MotorImg", "MotorImg"],
};
export const HeroSectionData = [
  {
    titleKey: "motorinsurancetitle",
    subtitleKey: "YouDriveWeInsure",
    buttonKey: "InsureNowbtn",
    imageSrcKey: "MotorImg",
  },
  {
    titleKey: "ProtectionSavings",
    subtitleKey: "YouDriveWeInsure",
    buttonKey: "InsureNowbtn",
    imageSrcKey: "MotorImg2",
  },
  {
    titleKey: "AccidentLiability",
    subtitleKey: "YouDriveWeInsure",
    buttonKey: "InsureNowbtn",
    imageSrcKey: "MotorImg3",
  },
  {
    titleKey: "VisitVisaExtension",
    subtitleKey: "YouDriveWeInsure",
    buttonKey: "InsureNowbtn",
    imageSrcKey: "MotorImg4",
  },
];
 export const Benefit = [
  {
    name: "Emergencymedical",
    values: "37,500 ﷼"
  },
  {
    name: "Medicalreferrals",
    values:"2,000 ﷼"
  },
  {
    name: "Dentalcareemergency",
    values: "1,000 ﷼"
  },
  {
    name: "Repatriationoffamily",
    values: "10,000 ﷼",
  },
  {
    name: "Mortalitycosts",
    values: "10,000 ﷼",
  },
  {
    name: "Emergencyrepatriation",
    values: "Economic Ticket",
  },
  {
    name: "Escortchild",
    values: "5,000 ﷼",
  },
   {
    name: "Flightcancellation",
    values: "3,750 ﷼",
  },
   {
    name: "Delayeddeparture",
    values: "3,750 ﷼",
  },
  {
    name: "Delayedluggage",
    values: "3,750 ﷼",
  },
    {
    name: "Personalbelongings",
    values:"3,750 ﷼",
  },
   {
    name: "Lossofpassport",
    values:"1,875 ﷼",
  },
    {
    name: "Personalaccidents",
    values: "37,500 ﷼",
  },
];
export const plans = [
  { key: "basic", label: "Basic", bgColor: "#1DA1F2", borderColor: "#1DA1F2", textColor: "#fff" },
  { key: "silver", label: "Silver", bgColor: "#E6E9EC", borderColor: "#E6E9EC", textColor: "#333" },
  { key: "gold", label: "Gold", bgColor: "#E7C94B", borderColor: "#E7C94B", textColor: "#333" },
  { key: "platinum", label: "Platinum", bgColor: "#9E9E9E", borderColor: "#9E9E9E", textColor: "#fff" },
  { key: "schengen", label: "Schengen", bgColor: "#7AA0D0", borderColor: "#7AA0D0", textColor: "#fff" },
];

export const Advantagess = [
  { text: "Advantages_I1" },
  { text: "Advantages_I2" },
  { text: "Advantages_I3" },
  { text: "Advantages_I4" },
];

export const faqData = [
  {
    question: "Lorem",
    answer:
      "LoremAns",
  },
  {
    question: "Lorem",
    answer:
      "LoremAns",
  },
  {
    question: "Lorem",
    answer:
      "LoremAns",
  },
  {
    question: "Lorem",
    answer:
      "LoremAns",
  },
];
export const benefits = [
  { name: "Emergencymedical", values: { basic: "37,500 ﷼",silver: "37,50520 ﷼",gold: "37,50055 ﷼",platinum: "35557,500 ﷼", schengen: "37,50550 ﷼",} },
  { name: "Medicalreferrals", values: { basic: "2,000 ﷼",silver: "37,50520 ﷼",gold: "37,50055 ﷼",platinum: "35557,500 ﷼", schengen: "37,50550 ﷼",} },
  { name: "Dentalcareemergency", values: { basic: "1,000 ﷼",silver: "37,50520 ﷼",gold: "37,50055 ﷼",platinum: "35557,500 ﷼", schengen: "37,50550 ﷼",} },
  { name: "Repatriationoffamily", values: { basic: "10,000 ﷼",silver: "37,50520 ﷼",gold: "37,50055 ﷼",platinum: "35557,500 ﷼", schengen: "37,50550 ﷼",} },
  { name: "Mortalitycosts", values: { basic: "10,000 ﷼",silver: "37,50520 ﷼",gold: "37,50055 ﷼",platinum: "35557,500 ﷼", schengen: "37,50550 ﷼",} },
  { name: "Emergencyrepatriation", values: { basic: "Economic Ticket",silver: "37,50520 ﷼",gold: "37,50055 ﷼",platinum: "35557,500 ﷼", schengen: "37,50550 ﷼",} },
  { name: "Escortchild", values: { basic: "5,000 ﷼",silver: "37,50520 ﷼",gold: "37,50055 ﷼",platinum: "35557,500 ﷼", schengen: "37,50550 ﷼",} },
  { name: "Flightcancellation", values: { basic: "3,750 ﷼",silver: "37,5052058 ﷼",gold: "37,50055 ﷼",platinum: "35557,500 ﷼", schengen: "37,50550 ﷼",} },
  { name: "Delayeddeparture", values: { basic: "3,750 ﷼",silver: "37,50520 ﷼",gold: "37,50055 ﷼",platinum: "35557,500 ﷼", schengen: "37,50550 ﷼",} },
  { name: "Delayedluggage", values: { basic: "3,750﷼",silver: "37,50520 ﷼",gold: "37,50055 ﷼",platinum: "35557,500 ﷼", schengen: "37,50550 ﷼",} },
  { name: "Personalbelongings", values: { basic: "3,750 ﷼",silver: "37,50520 ﷼",gold: "37,50055 ﷼",platinum: "35557,500 ﷼", schengen: "37,50550 ﷼",} },
  { name: "Lossofpassport", values: { basic: "1,875 ﷼",silver: "37,50520 ﷼",gold: "37,50055 ﷼",platinum: "35557,500 ﷼", schengen: "37,50550 ﷼",} },
  { name: "Personalaccidents", values: { basic: "37,500 ﷼",silver: "37,50520 ﷼",gold: "37,50055 ﷼",platinum: "35557,500 ﷼", schengen: "37,50550 ﷼",} },
];

export const motorcomprehensive = [
   {
    name: "AccidentalDamage",
  },
   {
    name: "Collision",
  },
   {
    name: "Overturn",
  },
   {
    name: "FireandTheft",
  },
   {
    name: "NaturalHazard",
  },
   {
    name: "ThirdPartyLiability",
  },
   {
    name: "MaliciousAct",
  },
  ]

export const motorliability = [
  {
    name: "Thedeath",
  },
  {
    name: "Materiallosses",
  },
];
export  const Hospitalizationbenefits = [
    { name: "ExcessPercentage", value: "NoContribution" },
    { name: "Hospitalization", value: "Uptothepolicylimit" },
    { name: "Accommodationanddailysubsistencelimit", value: "sharedroom1" },
    { name: "Accommodationlimitforpatientescort", value: "sharedroom2" },
    { name: "emergencymaternity", value: "emergencylimit1" },
    { name: "emergencytravel", value: "emergencylimit2" },
    { name: "emergencydental", value: "emergencylimit3" },
    { name: "emergencybirth", value: "Uptothepolicylimit" },
    { name: "emergencyroadtraffic", value: "Uptothepolicylimit" },
    { name: "emergencykidneydialysis", value: "Uptothepolicylimit" },
    { name: "emergencyevacuation", value: "Uptothepolicylimit" },
    { name: "repatriation", value: "emergencylimit4" },
    { name: "scopeofcoverage", value: "kingdomofsaudiarabia" },
  ];
             