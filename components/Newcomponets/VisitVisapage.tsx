import React from "react";
import { FaCheck } from "react-icons/fa";

const VisitVisapage: React.FC = () => {
  return (
    <div className="px-6 sm:px-8 lg:px-[20rem] py-10">
      <div className="rounded-lg border shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-[#184A7C] text-white px-6 py-4 text-lg font-semibold">
          The benefits and limit of coverage
        </div>

        {/* Body */}
        <div className="p-6 text-gray-700 text-sm leading-relaxed space-y-6">
          {/* Item 1 */}
          <div className="flex items-start gap-3">
            <FaCheck className="text-[#2C9CD4] text-sm mt-1" />
            <div>
              <p className="text-[#2C9CD4] font-semibold">SR 100,000</p>
              <p className="text-gray-600 mt-1">
                The maximum benefits limit for each person for the duration of
                the policy and that includes lower limits specified in this
                policy
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3">
            <FaCheck className="text-[#2C9CD4] text-sm mt-1" />
            <div>
              <p className="text-[#2C9CD4] font-semibold">
                Up to the policy limit
              </p>
              <p className="text-gray-600 mt-1">
                The expenses of examination and treatment of emergency cases
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitVisapage;
