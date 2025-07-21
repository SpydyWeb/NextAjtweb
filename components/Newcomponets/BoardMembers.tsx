import React from "react";
import Image1 from '../../assets/Images/Commite/01-Abdulmajeed.jpg'
import Image2 from '../../assets/Images/Commite/02-NAIF-AL-ABDULKAREEM.jpg'
import Image3 from '../../assets/Images/Commite/03-Khalid-alothman.jpg'
import Image4 from '../../assets/Images/Commite/04-Ashraf-Bseisu.jpg'
import Image5 from '../../assets/Images/Commite/05-naif-almsnd.jpg'
import Image6 from '../../assets/Images/Commite/06-ibrahim-alharabi.jpg'
import Image7 from '../../assets/Images/Commite/07-Abdulkarim-Al-Nujaidi.jpg'
import Image8 from '../../assets/Images/Commite/08-Yahya-Al-Mansour.jpg'
import Image9 from '../../assets/Images/Commite/09-SAGR.jpg'
import WitnessIcon from '../../assets/Images/witness.png'
import Image from 'next/image'
const BoardMembers = () => {
  const boardMembers = [
    { name: "Eng. Abdul Majeed Al Sultan", role: "Chairman", image:Image1 },
    { name: "Mr. Naif A. Al Abdulkareem", role: "Deputy Chairman", image: Image2 },
    { name: "Mr. Khaled Al Othman", role: "Board Member", image: Image3 },
    { name: "Mr. Ashraf Bseisu", role: "Board Member", image: Image4 },
    { name: "Mr. Naif Al Mesned", role: "Board Member", image:Image5 },
    { name: "Mr. Ibrahim Al Hurabi", role: "Board Member", image: Image6 },
    { name: "Dr. Abdulkarim Al Nujaidi", role: "Board Member", image: Image7 },
    { name: "Mr. Yahya Al Mansour", role: "Board Member", image: Image8 },
    { name: "Mr. Sager Nadershah", role: "Managing Director", image:Image9 },
  ];

  return (
    <>
    <div className="px-6 md:px-20 xl:px-[20rem] py-12">

      {/* Vision Section */}
      <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
        <Image
          src={WitnessIcon}
          alt="Witness Icon"
          className="w-[100px] h-[100px] filter invert-[32%] sepia-[91%] saturate-[742%] hue-rotate-[166deg] brightness-[93%] contrast-[101%]"
        />
        <div className="max-w-xl text-center">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">
            Our <span className="text-[#002c60]">Vision</span>
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            We will be the market leader Sharia Compliant Insurance Operator in the Mid-East & North Africa region, offering innovative insurance solutions to maximize the value added for our customers, shareholders and employees.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#1e3a8a]">
          Our Core <span className="text-[#002c60]">Values</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          <h4 className="text-[#002c60] text-lg font-semibold mb-3">Values Towards Our Customers</h4>
          <ul className="list-disc pl-5 text-sm space-y-2 marker:text-[#069edb] text-gray-700">
            <li>We understand our customers’ needs and aspirations by developing innovative Insurance products that exceed the expectations of the target segments.</li>
            <li>We communicate with our customers with high professionalism and transparency</li>
            <li>We value our customers loyalty.</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          <h4 className="text-[#002c60] text-lg font-semibold mb-3">Values Towards Our Employees</h4>
          <ul className="list-disc pl-5 text-sm space-y-2 marker:text-[#069edb] text-gray-700">
            <li>We attract, invest and motivate high quality talents.</li>
            <li>We believed in rewarding quality performance.</li>
            <li>We communicate with our employees with utmost transparency.</li>
            <li>We value our employees loyalty.</li>
          </ul>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
          <h4 className="text-[#002c60] text-lg font-semibold mb-3">Values Towards Our Organization</h4>
          <ul className="list-disc pl-5 text-sm space-y-2 marker:text-[#069edb] text-gray-700">
            <li>We are committed to applying the provisions of Islamic law in all our transactions.</li>
            <li>We perform our business properly from the first time</li>
            <li>We promote teamwork</li>
            <li>We take into account the application of risk management concepts to ensure the benefit for everyone</li>
            <li>We are aware of our social responsibility and believe in the importance of preserving the environment.</li>
          </ul>
        </div>
      </div>

      {/* Board Members */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#1e3a8a]">
          Board <span className="text-[#002c60]">Members</span>
        </h2>
      </div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 justify-items-center">
  {boardMembers.map((member, index) => (
    <div key={index} className="flex flex-col items-center text-center">
      
      {/* Gray halo + blue ring */}
      <div className="relative w-[250px] h-[250px] flex items-center justify-center">
        <div className="w-[240px] h-[240px] rounded-full border-[6px] border-[#002c60] overflow-hidden bg-white shadow-[0_0_25px_8px_rgba(0,0,0,0.15)]">
          <Image
            src={member.image}
            alt={member.name}
            width={240}
            height={240}
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>

      <div className="mt-4">
        <span className="block font-bold text-base text-[#10426C]">{member.name}</span>
        <span className="block text-sm text-gray-600">{member.role}</span>
      </div>
    </div>
  ))}
</div>





    </div>
    </>
  );
};

export default BoardMembers;
