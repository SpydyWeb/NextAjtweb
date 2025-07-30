import { BiSolidMap } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';

import MotorImg from '../assets/Images/cardsimages/Motor-Insurance.png';
import MedicalImg from '../assets/Images/cardsimages/Medical Domestic Helper_outlined.png';
import MedicaldomesticImg from '../assets/Images/cardsimages/Medical Domestic Helper_outlined.png';
import CraftsmanImg from '../assets/Images/cardsimages/Craftsman_outlined.png';

import Image1 from '../assets/Images/Boardmembers/Abdulmajeed.png';
import Image2 from '../assets/Images/Boardmembers/ABDULKAREEM.png';
import Image3 from '../assets/Images/Boardmembers/Khalid-alothman.png';
import Image4 from '../assets/Images/Boardmembers/Ashraf-Bseisu.png';
import Image5 from '../assets/Images/Boardmembers/naif-almsnd.png';
import Image6 from '../assets/Images/Boardmembers/ibrahim-alharabi.png';
import Image7 from '../assets/Images/Boardmembers/Abdulkarim-Al-Nujaidi.png';
import Image8 from '../assets/Images/Boardmembers/Yahya-Al-Mansour.png';
import Image9 from '../assets/Images/Boardmembers/SAGR-Nedarshah.png';

import Medical from '../assets/Images/ImagesIcons/Medical.png';
import Motor from '../assets/Images/ImagesIcons/Motor.png';
import Marine from '../assets/Images/ImagesIcons/Marine.png';
import Accidentliability from '../assets/Images/ImagesIcons/Accidentliability.png';
import Engineering from '../assets/Images/ImagesIcons/Engineering.png';
import Aviation from '../assets/Images/ImagesIcons/Aviation.png';
import Property from '../assets/Images/ImagesIcons/Property.png';
import Protectionsavings from '../assets/Images/ImagesIcons/ProtectionSavings.png';
// 
import Travel from '../assets/Images/ImagesIcons/Travel.png';
import Householder from '../assets/Images/ImagesIcons/Householder.png';
import Visitvisa from '../assets/Images/ImagesIcons/visitvisa.png';
// 
import Map from '../assets/Images/ImagesIcons/mapicon.png';
import Emailbox from '../assets/Images/ImagesIcons/emailimg.png';
import Mobhile from '../assets/Images/ImagesIcons/mobileicon.png'
import step1 from '../assets/Images/steps/step1.png';
import step2 from '../assets/Images/steps/step2.png';
import connetion1 from '../assets/Images/steps/connection1.png';
import connetion2 from '../assets/Images/steps/connection2.png';
import connetion3 from '../assets/Images/steps/connection3.png';
import connetion4 from '../assets/Images/steps/connection4.png';

export const utilitiesData={
  "individualProducts": {
    "title": "OurProducts",
    "path": "",
    "links": [
      { "label": "CorporateProduct", "path": "/corporateproducts" },
      { "label": "RatailProduct", "path": "/individualproducts" },
      // { "label": "visitVisaExtension", "path": "/IndividualProducts/VisitVisa" },
      // { "label": "HouseHolderheader", "path": "/IndividualProducts/Householder" },
      // { "label": "protectionSavings", "path": "/IndividualProducts/ProtectionSaving" },
      // { "label": "medicalDomesticHelperInsurance", "path": "/IndividualProducts/DomesticHelper" },
      // { "label": "travelInsurance", "path": "/IndividualProducts/Travel" },
      // { "label": "craftsmenInsurance", "path": "/IndividualProducts/Craftsmen" }
     
    ]
  },
  "corporateProducts": {
    "title": "CustomerCare",
    "path":"",
    "links": [
      // { "label": "medical", "path": "/CorporateProducts/Medical" },
      // { "label": "motor", "path": "/CorporateProducts/Motor" },
      // { "label": "marine", "path": "/CorporateProducts/Marine" },
      // { "label": "accidentAndLiabilityInsurance", "path": "/CorporateProducts/Accident" },
      // { "label": "property", "path": "/CorporateProducts/Property" },
      // { "label": "engineering", "path": "/CorporateProducts/Engineering" },
      // { "label": "aviation", "path": "/Aviation" },
      // { "label": "protectionSavings", "path": "/IndividualProducts/ProtectionSaving" }
    ]
  },
  "customerCare": {
    "title": "AboutUs",
     "path":"/aboutuspage",
    "links": [
      // { "label": "enquiry", "path": "/AboutUs" },
      // { "label": "fraud", "path": "/Corporateproducts" },
      // { "label": "faqs", "path": "/FAQs" },
      // { "label": "downloadCenter", "path": "/DownloadCenter" }
    ]
  },
  "companyProfile": {
    "title":"Carrer",
     "path":"",
    "links": [
      // { "label": "AboutUsHeader", "path": "/Aboutus" },
      // { "label": "footerLink5", "path": "/ContactUs" }
    ]
  },
  "eServices": {
    "title": "Contact",
     "path":"",
    "links": [
      // { "label": "printCertificate", "path": "/EServicesPrint" },
      // { "label": "claimStatus", "path": "/EServicesClaimStatus" },
      // { "label": "claimSubmission", "path": "/EServicesClaimSubmission" },
      // { "label": "najamStatus", "path": "/EServicesNajamStatus" },
      // { "label": "cchi", "path": "/EServicesCCHIStatus" },
      // { "label": "locateMedicalProviders", "path": "/EServiceMedicalProviders" },
      // { "label": "serviceRequest", "path": "/ServiceRequest" }
    ]
  }
}

export const logos = [
  { src: MotorImg, name: 'logoipsum' },
  { src: MotorImg, name: 'logoipsum' },
  { src: MotorImg, name: 'logoipsum' },
  { src: MotorImg, name: 'logoipsum' },
  { src: MotorImg, name: 'LOGIOPSUM' },
  // { src: MotorImg, name: 'logoipsum6' },
  // { src: MotorImg, name: 'logoipsum7' },
  // { src: MotorImg, name: 'logoipsum8' },
];


export const newsData = [
  { id: "01", title: "desc1", date: "23 Jan 2025"},
  { id: "02", title: "desc2", date: "23 Jan 2025" },
  { id: "03", title: "desc3", date: "23 Jan 2025" },
];


export const Steps= [
            {
              id: '01',
              title: 'CompanyProfilHeader2',
              text: 'CompanyProfilDesc2',
              BgImage:step1,
              stepconnection:connetion1

            },
            {
              id: '02',
              title: 'CompanyProfilHeader3',
              text:'CompanyProfilDesc3',
              BgImage:step1,
              stepconnection:connetion2
                
            },
            {
              id: '03',
              title: 'CompanyProfilHeader4',
              text: 'CompanyProfilDesc4',
              BgImage:step2,
              stepconnection:connetion3
            },
            {
              id: '04',
              title: 'CompanyProfilHeader5',
              text: 'CompanyProfilDesc5',
              BgImage:step2,
              stepconnection:connetion4
              
            }
          ];


export const corporateproducts = [
  {
    title: "Medical",
    description: "MedicalDescription",
    icon: Medical,
  },
  {
    title: "Motor",
    description: "MotorDescription",
    icon: Motor,
  },
  {
    title: "Marine",
    description: "MarineDescription",
    icon: Marine,
  },
  {
    title: "AccidentAndLiability",
    description: "AccidentAndLiabilityDescription",
    icon: Accidentliability,
  },
  {
    title: "Property",
    description: "PropertyDescription",
    icon: Property,
  },
  {
    title: "Engineering",
    description: "EngineeringDescription",
    icon: Engineering,
  },
  {
    title: "Aviation",
    description: "AviationDescription",
    icon: Aviation,
  },
  {
    title: "ProtectionAndSavings",
    description: "ProtectionAndSavingsDescription",
    icon: Protectionsavings,
  },
];

export const individualproducts = [
  {
    title: "Travel",
    icon: Travel,
    description: "TravelDescription",
    url:"/individualproducts"
  },
  {
    title: "VisitVisaExtension",
    icon: Visitvisa,
    description: "VisitVisaExtensionDescription",
    featured: true,
      url:"/individualproducts"
  },
  {
    title: "Motor1",
    icon: Motor,
    description: "MotorDescription1",
      url:"/individualproducts"
  },
  {
    title: "HouseHolder",
    icon: Householder,
    description: "HouseHolderDescription",
      url:"/individualproducts"
  },
  {
    title: "MedicalDomesticHelper",
    icon: Medical,
    description: "MedicalDomesticHelperDescription",
      url:"/individualproducts"
  },
  {
    title: "MedicalMalpractice",
    icon: Medical,
    description: "MedicalMalpracticeDescription",
    url:"/individualproducts"
  },
  {
    title: "Craftsmen",
    icon: "",
    description: "CraftsmenDescription",
    url:"/individualproducts"
  },
   {
    title: "ProtectionAndSavings1",
    icon: Protectionsavings,
    description: "ProtectionAndSavingsDescription1",
    url:"/individualproducts"
  },
];

export const footerLinks = {
  company: [
    { name: 'footerLink1', href: '/aboutuspage' },
    { name: 'footerLink2', href: '/E-Service' },
    { name: 'footerLink3', href: '/FAQs' },
    { name: 'footerLink4', href: '/DownloadCenter' },
    { name: 'footerLink5', href: '/Career' },
  ],
  resources: [
    {
      name: 'footerAddress1',
      href: '#',
      icon: Map,
    },
    {
      name: 'footerAddress2',
      href: '#',
      icon:Map
    },
    {
      name: '8003040400 | +966 12 6688877',
      href: '#',
      icon:Mobhile
    },
    {
      name: 'footerAddress4',
      href: '#',
      icon: Emailbox
    },
  ],
  legal: [
    { name: 'footerPdf1', href: '#' },
    { name: 'footerPdf2', href: '#' },
    { name: 'footerPdf3', href: '#' },
  ],
};

 export const boardMembers = [
    { name:"CompanyProfilSubHeaderName1", role: "CompanyProfilSubHeaderDesig1", image:Image1 },
    { name: "CompanyProfilSubHeaderName2", role: "CompanyProfilSubHeaderDesig2", image: Image2 },
    { name: "CompanyProfilSubHeaderName3", role: "CompanyProfilSubHeaderDesig3", image: Image3 },
    { name: "CompanyProfilSubHeaderName4", role: "CompanyProfilSubHeaderDesig4", image: Image4 },
    { name: "CompanyProfilSubHeaderName5", role: "CompanyProfilSubHeaderDesig5", image: Image5 },
    { name: "CompanyProfilSubHeaderName6", role: "CompanyProfilSubHeaderDesig6", image: Image6 },
    { name: "CompanyProfilSubHeaderName7", role: "CompanyProfilSubHeaderDesig7", image: Image7 },
    { name: "CompanyProfilSubHeaderName8", role: "CompanyProfilSubHeaderDesig8", image: Image8 },
    { name: "CompanyProfilSubHeaderName9", role: "CompanyProfilSubHeaderDesig9", image: Image9 },
  ];
          