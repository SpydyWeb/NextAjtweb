import React from "react";
import { useTranslation } from "react-i18next";
const Medicaldomestictable: React.FC = () => {
  const { t } = useTranslation("medicaldomestichelperplan");
  return (
    <div className="w-full mx-auto px-2 sm:px-6 lg:px-16 xl:px-28 py-6">
      <div className="overflow-x-auto">
        <table aria-hidden="true" className="w-full table-auto border-collapse text-xs sm:text-sm md:text-base lg:text-lg ">
          <tbody>
            <tr>
              <td className="relative text-left px-2 sm:px-4 py-2 align-middle w-1/3 sm:w-1/4 md:w-1/5">
                <div className="leading-snug whitespace-nowrap font-semibold text-[#184A7C] pb-2 sm:pb-3 text-xs sm:text-sm md:text-base lg:text-lg border-b border-solid border-gray-500">
                  {t("Policycoveragelimit")}
                </div>
                <div className="absolute top-0 bottom-0 right-0 w-px bg-sky-500 rtl:right-auto rtl:left-0"></div>
              </td>
              <td className="text-left sm:text-center px-2 sm:px-6 py-2 w-2/3 sm:w-3/4 md:w-4/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] pb-2 sm:pb-3 text-xs sm:text-sm md:text-base lg:text-lg border-b border-dashed border-sky-500 max-w-full">
                  {t("Policycoveragelimitvalue")}
                </div>
              </td>
            </tr>

            <tr>
              <td className="relative text-left px-2 sm:px-4 py-2 align-top w-1/3 sm:w-1/4 md:w-1/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b pb-2 sm:pb-3 border-solid border-gray-500">
                  {t("Emergencycasestreatment")}
                </div>
                <div className="absolute top-0 bottom-0 right-0 w-px bg-sky-500 rtl:right-auto rtl:left-0"></div>
              </td>
              <td className="text-left sm:text-center px-2 sm:px-6 py-2 w-2/3 sm:w-3/4 md:w-4/5 mt-2">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg  pb-2 sm:pb-3 border-b border-dashed border-sky-500 max-w-full mt-6">
                 {t("Emergencycasestreatmentvalue")}
                </div>
              </td>
            </tr>

            <tr>
              <td className="relative text-left px-2 sm:px-4 py-2 align-middle w-1/3 sm:w-1/4 md:w-1/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-solid border-gray-500 pb-6 sm:pb-10 mt-[3em] rtl:mt-[1.5em] pb-2 sm:pb-3">
                  {t("Hospitaladmissionexpenses")}
                </div>
                <div className="absolute top-0 bottom-0 right-0 w-px bg-sky-500 rtl:right-auto rtl:left-0"></div>
              </td>
              <td className="text-left sm:text-center px-2 sm:px-6 py-2 w-2/3 sm:w-3/4 md:w-4/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base pb-2 sm:pb-3 lg:text-lg border-b border-dashed border-sky-500 max-w-full pb-2 sm:pb-3">
                {t("Hospitaladmissionexpensesvalue")}
                </div>
              </td>
            </tr>
             <tr>
              <td className="relative text-left px-2 sm:px-4 py-2 align-top w-1/3 sm:w-1/4 md:w-1/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-solid border-gray-500 rtl:mt-[1.6em] pb-2 sm:pb-3">
                  {t("Ambulancetransportationexpenses")}
                </div>
                <div className="absolute top-0 bottom-0 right-0 w-px bg-sky-500 rtl:right-auto rtl:left-0"></div>
              </td>
              <td className="text-left sm:text-center px-2 sm:px-6 py-2 w-2/3 sm:w-3/4 md:w-4/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-dashed border-sky-500 max-w-full mt-[1.6em] pb-2 sm:pb-3">
                {t("Ambulancetransportationexpensesvalue")}
                </div>
              </td>
            </tr>
             <tr>
              <td className="relative text-left px-2 sm:px-4 py-2 align-top w-1/3 sm:w-1/4 md:w-1/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-solid border-gray-500  pb-2 sm:pb-3 ">
                  {t("Outpatienttreatmentexpenses")}
                </div>
                <div className="absolute top-0 bottom-0 right-0 w-px bg-sky-500 rtl:right-auto rtl:left-0"></div>
              </td>
              <td className="text-left sm:text-center px-2 sm:px-6 py-2 w-2/3 sm:w-3/4 md:w-4/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-dashed border-sky-500 max-w-full  pb-2 sm:pb-3">
                {t("Outpatienttreatmentexpensesvalue")}
                </div>
              </td>
            </tr>
     <tr>
              <td className="relative text-left px-2 sm:px-4 py-2 align-top w-1/3 sm:w-1/4 md:w-1/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-solid border-gray-500 rtl:mt-[2rem]  pb-2 sm:pb-3">
                  {t("Vaccinationsandexaminations")}
                </div>
                <div className="absolute top-0 bottom-0 right-0 w-px bg-sky-500 rtl:right-auto rtl:left-0"></div>
              </td>
              <td className="text-left sm:text-center px-2 sm:px-6 py-2 w-2/3 sm:w-3/4 md:w-4/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-dashed border-sky-500 max-w-full mt-[1.5em]  pb-2 sm:pb-3">
                {t("Vaccinationsandexaminationsvalue")}
                </div>
              </td>
            </tr>
           <tr>
              <td className="relative text-left px-2 sm:px-4 py-2 align-top w-1/3 sm:w-1/4 md:w-1/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-solid border-gray-500 pb-2 sm:pb-3 ">
                  {t("Dentaltreatmentexpenses")}
                </div>
                <div className="absolute top-0 bottom-0 right-0 w-px bg-sky-500 rtl:right-auto rtl:left-0"></div>
              </td>
              <td className="text-left sm:text-center px-2 sm:px-6 py-2 w-2/3 sm:w-3/4 md:w-4/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-dashed border-sky-500 max-w-full  pb-2 sm:pb-3">
                {t("Dentaltreatmentexpensesvalue")}
                </div>
              </td>
            </tr>
              <tr>
              <td className="relative text-left px-2 sm:px-4 py-2 align-top w-1/3 sm:w-1/4 md:w-1/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-solid border-gray-500  pb-2 sm:pb-3">
                  {t("Eyeglassexpenses")}
                </div>
                <div className="absolute top-0 bottom-0 right-0 w-px bg-sky-500 rtl:right-auto rtl:left-0"></div>
              </td>
              <td className="text-left sm:text-center px-2 sm:px-6 py-2 w-2/3 sm:w-3/4 md:w-4/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-dashed border-sky-500 max-w-full pb-2 sm:pb-3">
                {t("Eyeglassexpensesvalue")}
                </div>
              </td>
            </tr>
 
 <tr>
              <td className="relative text-left px-2 sm:px-4 py-2 align-top w-1/3 sm:w-1/4 md:w-1/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-solid border-gray-500 rtl:mt-[2rem] pb-2 sm:pb-3 ">
                  {t("Pregnancyandchildbirthexpenses")}
                </div>
                <div className="absolute top-0 bottom-0 right-0 w-px bg-sky-500 rtl:right-auto rtl:left-0"></div>
              </td>
              <td className="text-left sm:text-center px-2 sm:px-6 py-2 w-2/3 sm:w-3/4 md:w-4/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-dashed border-sky-500 max-w-full mt-[1.5em] pb-2 sm:pb-3">
                {t("Pregnancyandchildbirthexpensesvalue")}
                </div>
              </td>
            </tr>
            <tr>
              <td className="relative text-left px-2 sm:px-4 py-2 align-top w-1/3 sm:w-1/4 md:w-1/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-solid border-gray-500 pb-2 sm:pb-3 ">
                  {t("Injuriesresultingfromtrafficaccidents")}
                </div>
                <div className="absolute top-0 bottom-0 right-0 w-px bg-sky-500 rtl:right-auto rtl:left-0"></div>
              </td>
              <td className="text-left sm:text-center px-2 sm:px-6 py-2 w-2/3 sm:w-3/4 md:w-4/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-dashed border-sky-500 max-w-full mt-[1.5em]  pb-2 sm:pb-3">
                {t("Injuriesresultingfromtrafficaccidentsvalue")}
                </div>
              </td>
            </tr>
            <tr>
              <td className="relative text-left px-2 sm:px-4 py-2 align-top w-1/3 sm:w-1/4 md:w-1/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-solid border-gray-500 pb-2 sm:pb-3 ">
                  {t("Emergencydialysisexpenses")}
                </div>
                <div className="absolute top-0 bottom-0 right-0 w-px bg-sky-500 rtl:right-auto rtl:left-0"></div>
              </td>
              <td className="text-left sm:text-center px-2 sm:px-6 py-2 w-2/3 sm:w-3/4 md:w-4/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-dashed border-sky-500 max-w-full  pb-2 sm:pb-3">
                {t("Emergencydialysisexpensesvalue")}
                </div>
              </td>
            </tr>
            <tr>
              <td className="relative text-left px-2 sm:px-4 py-2 align-top w-1/3 sm:w-1/4 md:w-1/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-solid border-gray-500  pb-2 sm:pb-3">
                  {t("Medicationcosts")}
                </div>
                <div className="absolute top-0 bottom-0 right-0 w-px bg-sky-500 rtl:right-auto rtl:left-0"></div>
              </td>
              <td className="text-left sm:text-center px-2 sm:px-6 py-2 w-2/3 sm:w-3/4 md:w-4/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-dashed border-sky-500 max-w-full  pb-2 sm:pb-3">
                {t("Medicationcostsvalue")}
                </div>
              </td>
            </tr>
            <tr>
              <td className="relative text-left px-2 sm:px-4 py-2 align-top w-1/3 sm:w-1/4 md:w-1/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-solid border-gray-500 rtl:mt-[1.6em]  pb-2 sm:pb-3 ">
                  {t("Costsofreturning")}
                </div>
                <div className="absolute top-0 bottom-0 right-0 w-px bg-sky-500 rtl:right-auto rtl:left-0"></div>
              </td>
              <td className="text-left sm:text-center px-2 sm:px-6 py-2 w-2/3 sm:w-3/4 md:w-4/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg border-b border-dashed border-sky-500 max-w-full mt-[3em]  pb-2 sm:pb-3">
                {t("Costsofreturningvalue")}
                </div>
              </td>
            </tr>
            <tr>
              <td className="relative text-left px-2 sm:px-4 py-2 align-top w-1/3 sm:w-1/4 md:w-1/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg  pb-2 sm:pb-3 ">
                  {t("RangeoftheCoverage")}
                </div>
                <div className="absolute top-0 bottom-0 right-0 w-px bg-sky-500 rtl:right-auto rtl:left-0"></div>
              </td>
              <td className="text-left sm:text-center px-2 sm:px-6 py-2 w-2/3 sm:w-3/4 md:w-4/5">
                <div className="leading-snug break-words font-semibold text-[#184A7C] text-xs sm:text-sm md:text-base lg:text-lg  max-w-full  pb-2 sm:pb-3">
                {t("RangeoftheCoveragevalue")}
                </div>
              </td>
            </tr>

          

            {/* Add more <tr> as needed for the rest */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Medicaldomestictable;
