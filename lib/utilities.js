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
import CraftsmenImg from "../public/assets/Images/ImagesIcons/Craftsman_outlined.png";
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


import MuhamadImg from "@/public/assets/Images/ImagesIcons/01_Muhammad.jpg";
import YusufImg from "@/public/assets/Images/ImagesIcons/02_Yusuf.jpg";
import AbdullahImg from "@/public/assets/Images/ImagesIcons/03_Abdullah.jpg";

export const utilitiesData = {
  individualProducts: {
    title: "OurProducts",
    path: "",
    links: [
      { label: "RatailProduct", path: "/individualproducts" },
      { label: "CorporateProduct", path: "/corporateproducts" },
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
    path: "/customerrights",
    links: [
        { "label": "ReportaFraud", "path": "/reportafraud" },
      { "label": "FAQs", "path": "/frequentlyaskedquestions" },
      { "label": "CustomerRights", "path": "/customerrights" },
      { "label": "InquiryComplaints", "path": "/inquiryform" },
      { "label": "DownloadCenter", "path": "/downloadcenter" },

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
            { "label": "ShareHolder", "path": "/shareholderrelation" },
            { "label": "ShariaCommittee", "path": "/shariacommitee" },
      
      // { "label": "enquiry", "path": "/AboutUs" },
      // { "label": "fraud", "path": "/Corporateproducts" },
      // { "label": "faqs", "path": "/FAQs" },
      // { "label": "downloadCenter", "path": "/DownloadCenter" }
    ],
  },
  companyProfile: {
    title: "eServices1",
    path: "",
    links: [
     
    ],
  },
  eServices: {
    title: "Contact",
    path: "/contactus",
    links: [
      { "label": "ContactUs", "path": "/contactus" },
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
    url: "/motorinsuranceplan",
  },
  {
    title: "Marine",
    description: "MarineDescription",
    icon: Marine,
    url: "/marineinsuranceplan",
  },
  {
    title: "AccidentAndLiability",
    description: "AccidentAndLiabilityDescription",
    icon: Accidentliability,
    url: "/productliabilityinsuranceplan",
  },
  {
    title: "Property",
    description: "PropertyDescription",
    icon: Property,
    url: "/propertyinsuranceplan",
  },
  {
    title: "Engineering",
    description: "EngineeringDescription",
    icon: Engineering,
    url: "/engineeringinsuranceplan",
  },
  {
    title: "Aviation",
    description: "AviationDescription",
    icon: Aviation,
    url: "/aviationinsuranceplan",
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
    url: "/medicaldomestichelperplan",
  },
  {
    title: "MedicalMalpractice",
    icon: Medical,
    description: "MedicalMalpracticeDescription",
    url: "/medicalmalpracticeinsuranceplan",
  },
  {
    title: "Craftsmen",
    icon: CraftsmenImg,
    description: "CraftsmenDescription",
    url: "/craftsmenInsuranceplan",
  },
  {
    title: "ProtectionAndSavings1",
    icon: Protectionsavings,
    description: "ProtectionAndSavingsDescription1",
    url: "/protectionandsavingsplan",
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
    { name: "Careers", href: "/careerform" },
  ],
    MyPolicies: [
    { name: "MyPolicies", href: "/aboutuspage" },
    { name: "FAQs", href: "/faqs" },
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
      "LoremAns1",
  },
  {
    question: "Lorem",
    answer:
      "LoremAns2",
  },
  {
    question: "Lorem",
    answer:
      "LoremAns3",
  },
  {
    question: "Lorem",
    answer:
      "LoremAns4",
  },
];
export const benefits = [
  { name: "Emergencymedical", values: { basic: "37,500 ﷼",silver: "37,50520 ﷼",gold: "37,50055 ﷼",platinum: "35557,500 ﷼", schengen: "37,50550 ﷼",} },
  { name: "Medicalreferrals", values: { basic: "2,000 ﷼",silver: "37,50520 ﷼",gold: "37,50055 ﷼",platinum: "35557,500 ﷼", schengen: "37,50550 ﷼",} },
  { name: "Dentalcareemergency", values: { basic: "1,000 ﷼",silver: "37,50520 ﷼",gold: "37,50055 ﷼",platinum: "35557,500 ﷼", schengen: "37,50550 ﷼",} },
  { name: "Repatriationoffamily", values: { basic: "10,000 ﷼",silver: "37,50520 ﷼",gold: "37,50055 ﷼",platinum: "35557,500 ﷼", schengen: "37,50550 ﷼",} },
  { name: "Mortalitycosts", values: { basic: "10,000 ﷼",silver: "37,50520 ﷼",gold: "37,50055 ﷼",platinum: "35557,500 ﷼", schengen: "37,50550 ﷼",} },
  { name: "Emergencyrepatriation", values: { basic: "EconomicTicket",silver: "37,50520 ﷼",gold: "37,50055 ﷼",platinum: "35557,500 ﷼", schengen: "37,50550 ﷼",} },
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
export const planContents = {
  travelplan: {
    items: [{ text: "Advantages_I1" }, { text: "Advantages_I2" }, { text: "Advantages_I3" }, { text: "Advantages_I4" }],
    title: "Startyour",
    subtitle: "journey",
    planName: "WhetherTravelinsuranceplan",
    buttonText: "Insurenow",
    namespace: "travelplan",
  },
  motorplan: {
    items: [{ text: "Advantages_I1" }, { text: "Advantages_I2" }, { text: "Advantages_I3" }, { text: "Advantages_I4" }],
    title: "Startyour",
    subtitle: "journey",
    planName: "WhetherMotorinsuranceplan",
    buttonText: "Insurenow",
    namespace: "motorinsuranceplan",
  },
  medicalplan:{
      items: [{ text: "Advantages_I1" }, { text: "Advantages_I2" }, { text: "Advantages_I3" }, { text: "Advantages_I4" },{ text: "Advantages_I5" },{ text: "Advantages_I6" },],
      title: "Startyour",
      subtitle: "journey",
      planName: "Whethermedicalinsuranceplan",
      buttonText: "Insurenow",
      namespace: "medicalinsuranceplan",  
  },
  householderplan: {
    items: [{ text: "Advantages_I1" }, { text: "Advantages_I2" }, { text: "Advantages_I3" }, { text: "Advantages_I4" }],
    title: "Startyour",
    subtitle: "journey",
    planName: "Whetherhouseinsuranceplan",
    buttonText: "Insurenow",
    namespace: "householderplans",
  },
  visitvisaplan:{
    items: [{ text: "Advantages_I1" }, { text: "Advantages_I2" }, { text: "Advantages_I3" }, { text: "Advantages_I4" },{ text: "Advantages_I5" },{ text: "Advantages_I6" },],
    title: "Startyour",
    subtitle: "journey",
    planName: "WhetherVisitinsuranceplan",
    buttonText: "Insurenow",
    namespace: "visitvisaplan",
},
  propertyinsuranceplan:{
    items: [{ text: "Advantages_I1" }, { text: "Advantages_I2" }, { text: "Advantages_I3" }, { text: "Advantages_I4" },],
    title: "Startyour",
    subtitle: "journey",
    planName: "WhetherPropertyinsuranceplan",
    buttonText: "Insurenow",
    namespace: "propertyinsuranceplan",
},
  engineeringinsuranceplan:{
    items: [{ text: "Advantages_I1" }, { text: "Advantages_I2" }, { text: "Advantages_I3" }, { text: "Advantages_I4" },],
    title: "Startyour",
    subtitle: "journey",
    planName: "WhetherEngineeringinsuranceplan",
    buttonText: "Insurenow",
    namespace: "engineeringinsuranceplan",
},
marineinsuranceplan:{
    items: [{ text: "Advantages_I1" }, { text: "Advantages_I2" }, { text: "Advantages_I3" }, { text: "Advantages_I4" },],
    title: "Startyour",
    subtitle: "journey",
    planName: "WhetherMarineinsuranceplan",
    buttonText: "Insurenow",
    namespace: "marineinsuranceplan",
},
productliabilityinsuranceplan:{
    items: [{ text: "Advantages_I1" }, { text: "Advantages_I2" }, { text: "Advantages_I3" }, { text: "Advantages_I4" },],
    title: "Startyour",
    subtitle: "journey",
    planName: "Whetherproductliabilityinsuranceplan",
    buttonText: "Insurenow",
    namespace: "productliabilityinsuranceplan",
},
aviationinsuranceplan:{
    items: [{ text: "Advantages_I1" }, { text: "Advantages_I2" }, { text: "Advantages_I3" }, { text: "Advantages_I4" },],
    title: "Startyour",
    subtitle: "journey",
    planName: "Whetheraviationinsuranceplan",
    buttonText: "Insurenow",
    namespace: "aviationinsuranceplan",
},
craftsmeninsuranceplan:{
    items: [{ text: "Advantages_I1" }, { text: "Advantages_I2" }, { text: "Advantages_I3" }, { text: "Advantages_I4" },],
    title: "Startyour",
    subtitle: "journey",
    planName: "WhetherCraftsmensuranceplan",
    buttonText: "Insurenow",
    namespace: "craftsmenInsuranceplan",
},
medicalmalpracticeinsuranceplan:{
    items: [{ text: "Advantages_I1" }, { text: "Advantages_I2" }, { text: "Advantages_I3" }, { text: "Advantages_I4" },],
    title: "Startyour",
    subtitle: "journey",
    planName: "Whethermalpracticesuranceplan",
    buttonText: "Insurenow",
    namespace: "medicalmalpracticeinsuranceplan",
},
protectionandsavingsplan:{
    items: [{ text: "Advantages_I1" }, { text: "Advantages_I2" }, { text: "Advantages_I3" }, { text: "Advantages_I4" },],
    title: "Startyour",
    subtitle: "journey",
    planName: "Whetherprotectionandsavingsplan",
    buttonText: "Insurenow",
    namespace: "protectionandsavingsplan",
},
medicaldomestichelperplan:{
    items: [{ text: "Advantages_I1" }, { text: "Advantages_I2" }, { text: "Advantages_I3" }, { text: "Advantages_I4" },],
    title: "Startyour",
    subtitle: "journey",
    planName: "Whethermedicaldomestichelperplan",
    buttonText: "Insurenow",
    namespace: "medicaldomestichelperplan",
},
};

 export  const coverages = [
   { name: "fire" },
   { name: "lightening" },
   { name: "explosion" },
   { name: "aircraftDamage" },
   { name: "earthquakeVolcano" },
   { name: "stormFloods" },
   { name: "waterEscape" },
  ];
  export const engineeringcoverages = [
  
  { name: "StorageRisk" },
  { name: "ThirdPartyLiability" },
   { name: "DebrisRemoval" },
   { name: "SurroundingProperties" },
   { name: "ConstructionEquipment" },
  ];
  export const tabs = [
    { key: "contractors", label: "ContractorRisk" },
    { key: "erection", label: "ErectionRisk" },
    { key: "electronic", label: "ElectronicEquipment" },
    { key: "boilers", label: "BoilersPressureVessels" },
    { key: "machinery", label: "MachineryBreakdown" },
    { key: "plant", label: "ContractorsPlantMachinery" },
    { key: "deterioration", label: "DeteriorationofStocks" },
  ];

  export const buttons = [
    { key: "productliability", label: "productliability" },
    { key: "theft", label: "theft" },
    { key: "workerscompensation", label: "workerscompensation" },
    { key: "professionalindemnity", label: "professionalindemnity" },
    { key: "grouptravelrisks", label: "grouptravelrisks" },
    { key: "fidelityguarantee", label: "fidelityguarantee" },
    { key: "money", label: "money" },
    { key: "personalaccidentsant", label: "personalaccidentsant" },
    { key: "publicliability", label: "publicliability" },
  ];
   export  const marineCoverages = [
   { name: "AllRisks"},
   { name: "RestrictedRisks" },
   { name: "RoadRisks" },
  ];
    export  const marineCoveragespolicies = [
   { name: "SingleTransit" },
   { name: "OpenCoverPolicy" },
  ];
  export const productliabilityCoverages=[
    { name: "Legallitigationcost" },
   { name: "Deathbodily" },
   { name: "Propertydamage" },
  ]

    export const aviationCoverages=[
   { name: "GroundServicesLiability" },
   { name: "GeneralAviationLiability" },
   { name: "AirportLiability" },
   { name: "AirportStevedoringLiability" },
   { name: "AircraftMaintenanceLiability" },
  ]

export const companyInformation = [
                  ["EstablishedDate", "EstablishedDateValue"],
                  ["ListedDate", "ListedDateValue"],
                  ["FinancialYearEnd", "FinancialYearEndValue"],
                  ["Auditor", "AuditorFirm"],
                ]

 export const companyProfileSections = [
              "StockOverview",
              "NormalizedFinancials",
              "InvestmentCalculator",
              "Disclosures",
              "News",
              "ExchangeAnnouncement",
              "CorporateAction",
              "FinancialEventsCalendar",
            ]


export const managementBoardMembers =[
                  ["BoardMember1Name", "BoardMember1Role", "BoardMember1Date"],
                  ["BoardMember2Name", "BoardMember2Role", "BoardMember2Date"],
                  ["BoardMember3Name", "BoardMember3Role", "BoardMember3Date"],
                  ["BoardMember4Name", "BoardMember4Role", "BoardMember4Date"],
                  ["BoardMember5Name", "BoardMember5Role", "BoardMember5Date"],
                  ["BoardMember6Name", "BoardMember6Role", "BoardMember6Date"],
                  ["BoardMember7Name", "BoardMember7Role", "BoardMember7Date"],
                ]            

    export const branches= [
  {
    title: "Western_Title",
    subtitle: "Western_Subtitle",
    address: [
      "Western_Address1",
      "Western_Address2",
    ],
    phone: "Western_Phone",
    locateUrl: "#",
  },
  {
    title: "Eastern_Title",
    subtitle: "Eastern_Subtitle",
    address: ["Eastern_Address1"],
    phone: "Eastern_Phone",
    locateUrl: "#",
  },
  {
    title: "Central_Title",
    subtitle: "Central_Subtitle",
    address: ["Central_Address1"],
    phone: "Central_Phone",
    locateUrl: "#",
  },
]; 

export const customerrights =[
            {
              title: "fullDisclosureTitle",
              text: "fullDisclosureDescription",
            },
            {
              title: "accidentReportingTitle",
              text: "accidentReportingDescription",
            },
            {
              title: "complianceTitle",
              text: "complianceDescription",
            },
            {
              title: "cooperationTitle",
              text: "cooperationDescription",
            },
            {
              title: "noMisleadingInfoTitle",
              text: "noMisleadingInfoDescription",
            },
          ]
    // "fleetCompVechThirdPartyOnlyInsuPolc":"Fleet Commercial Vehicle Third Party Only Insurance Policy",
    // "fleetCommercialVechCompInsuPolc":"Fleet Commercial Vehicle Comprehensive Insurance Policy",
    // "motorClaimFormTpl":"Motor Claim Form TPL",
    // "motorVechClaimFormComp":"Motor Vehicle Claim Form Comprehensive",
    // "fleetCommercialVehThirdPartyOnlyInsuPolc":"Fleet Commercial Vehicle Third Party Only Insurance Policy",
    // "motorPolyCancForm":"MOTOR POLICY CANCELLATION FORM",
   export const DATA = {
  motor: [
    { title: "privCarThirdPArtyLiabOnly", href: "#" },
    { title: "privCarCompInsu", href: "#" },
    { title: "pvtVechThirdPartyOnlyInsuPolc", href: "#" },
    { title: "fleetCompPolc", href: "#" },
    {
      title: "fleetCompVechThirdPartyOnlyInsuPolc",
      href: "#",
    },
    {
      title: "fleetCommercialVechCompInsuPolc",
      href: "#",
    },
    { title: "motorClaimFormTpl", href: "#" },
    { title: "motorVechClaimFormComp", href: "#" },
    { title: "fleetCommercialVehThirdPartyOnlyInsuPolc", href: "#" },
  ],
  medical: [
     {title: "medInsuPropForm", href: "#",},
    {title: "medAddtDetectionCorrecForm",href: "#", },
    { title: "unifiedHealtDeclarationForm", href: "#" },
    { title: "reimbursemnetClaimForm", href: "#" },
  ],
   malpractice: [
     {
      title: "medMalpractPractitionersPersForm",
      href: "#",
    },
    {
      title: "medMalpractisePol",
      href: "#",
    },
    { title: "medMalpractiseClaimFormCF022", href: "#" },
  ],
  travel: [
        { title: "BusinesTravelInsuProposalForm", href: "#" },
    { title: "TravelAndMedAssistanceProposalForm", href: "#" },
    { title: "businessTravelPol", href: "#" },
    { title: "travelAndMedAssistanceProposForm", href: "#" },
     { title: "businessTravelClaimForm", href: "#" },
    { title: "travelAndMedAssisClaimFormCF035", href: "#" },
  ],
  visitvisa: [
      { title: "visitorInsuPropoForm", href: "#" },
    { title: "reimbursementClaimForm", href: "#" },
    { title: "visitorVisaMedInsuTermsCondition", href: "#" },
  ],
  marine: [
    { title: "marineCargoInsuOpenCover/PolPropo", href: "#" },
    { title: "marineCargoSinTransitInsuPropoForm", href: "#" },
    { title: "marineHullSmartCrafPropForm", href: "#" },
    { title: "marineAnuualCorgoOpenInsuPol", href: "#" },
    { title: "marineCorgoSingleTransitInsuPol", href: "#" },
    { title: "marineHullSmallCraftInsuPol", href: "#" },
    { title: "marineCargoSinleTransitPolClaimForm", href: "#" },
    { title: "marineHullSmartCrafClaimForm", href: "#" },
    { title: "haulageContractorsTransistLiabClaimForm", href: "#" },
    { title: "cargoInsuClaimForm", href: "#" },
  ],
  protection: [
    {title:"abnnaJuvenilePlanEduc&MarriageAppliForm" , href:"#"},
    { title: "abnnaTermsAndConditions", href: "#" },
    { title: "amanApplicationForm", href: "#" },
    { title: "amanTermsAndConditions", href: "#" },
    { title: "rentalProteAppForm", href: "#" },
    { title: "rentalProtectionTermsAndConditions", href: "#" },
    { title: "retirementCooperativeAppForm", href: "#" },
    { title: "retirementCooperativeTermsAndConditions", href: "#" },
    { title: "sunbulaApplForm", href: "#" },
    { title: "sunbulaTermsAndConditions", href: "#" },
    { title: "termProtectionAppForm", href: "#" },
    { title: "termProtTermsAndConditions", href: "#" },
    { title: "claimFormCL1", href: "#" },
    { title: "claimAppendixFormNo.2DrCertificateDeathCasesCL2", href: "#" },
    { title: "claimAppendixFormNo.3DrCertificateDisabilityCL3", href: "#" },
    { title: "claimAppendixFormNo.4DrCertificateCriticalIllnessCL4", href: "#" },
    { title: "termsAndCondToBuyProteOrProtAndSavingsInsuPoliThroughWebsite", href: "#" },
    { title: "internationalTaxTransparency", href: "#" },
    { title: "fundsPerformanceReport", href: "#" }, 
  ],
};

export  const FAQ_DATA = {
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
      },
      {
        question: "whatAreTheDocRequiredToCancelVehicleInsInCaseOfChangingTheInsPol",
        answer: "RequiredToCancelVehiclePoint1",
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
      },
    ],
    medical: [
      {
        question: "howCanIApplyMedicalIns",
        answer: "yourMedInsPolCanBeIssuedInAVerySimplifiedWayAllWhatYouNeedToDoIsToRegisterYourReqInTheMedSectionOrByCallingOurTollFreeNo",
      },
      {
        question: "whatAreTheMinimumRequirementsForAcquiringSMEHealthInsQuot",
        answer: "idProofMedicalReportsAndFilledApplication",
      },
       {
        question: "whatHospAreCoveredByMyMedIns",
        answer: "medicalInsuranceCanBePurchasedThroughOurWebsiteOrBranches",
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
      },
    ],
  };


  export const members = [
      {
        img: MuhamadImg,
        name: "ShariahSupervisionSubHeaderName1",
        points: [
          "ShariahSupervisionSubHeaderName1Item1",
          "ShariahSupervisionSubHeaderName1Item2",
          "ShariahSupervisionSubHeaderName1Item3",
          "ShariahSupervisionSubHeaderName1Item4",
          "ShariahSupervisionSubHeaderName1Item5",
          "ShariahSupervisionSubHeaderName1Item6",
        ],
      },
      {
        img: YusufImg,
        name: "ShariahSupervisionSubHeaderName2",
        points: [
          "ShariahSupervisionSubHeaderName2Item1",
          "ShariahSupervisionSubHeaderName2Item2",
          "ShariahSupervisionSubHeaderName2Item3",
          "ShariahSupervisionSubHeaderName2Item4",
          "ShariahSupervisionSubHeaderName2Item5",
          "ShariahSupervisionSubHeaderName2Item6",
          "ShariahSupervisionSubHeaderName2Item7",
        ],
      },
      {
        img: AbdullahImg,
        name: "ShariahSupervisionSubHeaderName3",
        points: [
          "ShariahSupervisionSubHeaderName3Item1",
          "ShariahSupervisionSubHeaderName3Item2",
          "ShariahSupervisionSubHeaderName3Item3",
          "ShariahSupervisionSubHeaderName3Item4",
          "ShariahSupervisionSubHeaderName3Item5",
          "ShariahSupervisionSubHeaderName3Item6",
          "ShariahSupervisionSubHeaderName3Item7",
        ],
      },
    ];

export  const inquirysteps= [
               { id: 1, label: "ContactInfoinquiry" },
                { id: 2, label: "ServiceInfo" },
                { id: 3, label: "AdditionalInfo" },
              ]
 export  const complaintssteps= [
                { id: 1, label: "ContactInfo" },
                { id: 2, label: "ComplaintInfo" },
              ]          

export const craftsmen=[
                "buildingMaintenanceWorker",
                "electrician",
                "plumber",
                "carpenter",
                "satelliteTechnician",
                "treeTrimmingLaborer",
              ]   
              
export const craftsmen2=[
                "airConditioningSpecialist",
                "engravingVocation",
                "furnitureCleaner",
                "waterTankCleaner",
                "insectControlSpecialist",
                "sanitationSpecialist",
              ]

export const craftsmen3=
["autoMechanic", "blacksmith", "electronicsTechnician"]

export const professions = [
    "surgeons",
    "doctors",
    "anesthetist",
    "pharmacists",
    "nurses",
    "paramedicsAndTechnicians",
  ];



export const protectionTabs = [
  { title: "Sakhaa", subtitle: "RetirementPlan" },
  { title: "Abnaa", subtitle: "YouthPlans" },
  { title: "Aman", subtitle: "TuitionProtectionPlan" },
  { title: "Sunbula", subtitle: "CharityPlan" },
  { title: "Hemaya", subtitle: "RentProtectionPlan" },
  { title: "Dera", subtitle: "TermProtectionPlan" },
  { title: "Atta", subtitle: "FamilyTrustPlan" }
];

export const medicaldomestichelpertable  =  [
  {
    "name": "Policycoveragelimit",
    "value": "Policycoveragelimitvalue"
  },
  {
    "name": "Emergencycasestreatment",
    "value": "Emergencycasestreatmentvalue"
  },
  {
    "name": "Hospitaladmissionexpenses",
    "value": "Hospitaladmissionexpensesvalue"
  },
  {
    "name": "Ambulancetransportationexpenses",
    "value": "Ambulancetransportationexpensesvalue"
  },
  {
    "name": "Outpatienttreatmentexpenses",
    "value": "Outpatienttreatmentexpensesvalue"
  },
  {
    "name": "Vaccinationsandexaminations",
    "value": "Vaccinationsandexaminationsvalue"
  },
  {
    "name": "Dentaltreatmentexpenses",
    "value": "Dentaltreatmentexpensesvalue"
  },
  {
    "name": "Eyeglassexpenses",
    "value": "Eyeglassexpensesvalue"
  },
  {
    "name": "Pregnancyandchildbirthexpenses",
    "value": "Pregnancyandchildbirthexpensesvalue"
  },
  {
    "name": "Injuriesresultingfromtrafficaccidents",
    "value": "Injuriesresultingfromtrafficaccidentsvalue"
  },
  {
    "name": "Emergencydialysisexpenses",
    "value": "Emergencydialysisexpensesvalue"
  },
  {
    "name": "Medicationcosts",
    "value": "Medicationcostsvalue"
  },
  {
    "name": "Costsofreturning",
    "value": "Costsofreturningvalue"
  },
  {
    "name": "RangeoftheCoverage",
    "value": "RangeoftheCoveragevalue"
  }
]
