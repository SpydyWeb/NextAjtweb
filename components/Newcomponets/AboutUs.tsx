'use client'
import React from 'react';
import VisionImg from '../../assets/Images/vision2030.jpg';
import Image from 'next/image';
import { Steps } from '@/lib/utilities';
import BoardMembers from '../Newcomponets/BoardMembers'
const AboutUs = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen font-sans text-[#1c1c1c] bg-white mt-4">
      {/* About Us Section */}
      <section className="px-6 md:px-20 xl:px-[20rem] py-12">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold mb-2 text-[#10426C]">About Us</h1>
          <p className="text-base text-gray-600">
            Al-Jazira Takaful Taawuni Company is a Saudi joint stock company regulated and supervised by Insurance Authority.
          </p>
        </div>

        {/* Who We Are Section */}
        <div className="grid md:grid-cols-2 items-center gap-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#002c60]">
              Who <span className="text-[#1e3a8a]">We Are?</span>
            </h3>
            <p className="leading-relaxed text-[#10426C]">
              At Aljazira Takaful, we are a Shariah-compliant insurance company committed to serving society with integrity and purpose. Guided by the principles of Vision 2030, we play an active role in supporting Saudi Arabia’s economic transformation by enhancing protection for individuals and businesses alike.<br /><br />
              We contribute to the growth of the national economy by enabling businesses to thrive with confidence and helping individuals secure their futures through increased savings and financial planning. Our mission goes beyond insurance — we are dedicated to social responsibility, community service, and empowering people and enterprises to build a more secure, prosperous tomorrow.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={VisionImg}
              alt="Vision 2030"
              className="w-full md:max-w-lg object-contain"
            />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-white px-4 md:px-24 py-16 relative overflow-visible">
        <h2 className="text-3xl font-bold text-center text-[#1e3a8a] mb-20">
          Our <span className="text-[#002c60]">Story</span>
        </h2>

        <svg
          className="absolute top-[150px] left-0 w-full h-[220px] z-0 hidden md:block"
          viewBox="0 0 1200 220"
          preserveAspectRatio="none"
        >
          <path
            d="M 180 110 C 300 30, 400 30, 520 110 S 760 190, 880 110 S 1040 30, 1120 110"
            stroke="#00a6e0"
            strokeWidth="4"
            fill="none"
            strokeDasharray="6,6"
          />
        </svg>

        <div className="relative z-10 flex flex-wrap justify-between gap-y-32 md:gap-y-0">
        {Steps.map((step, index) => (
            <div
            key={step.id}
            className={`flex flex-col items-center w-full md:w-1/4 px-4 ${
                index % 2 === 1 ? 'mt-32' : ''
            }`}
            >
            <div className="w-24 h-24 bg-white border-[6px] border-[#00a6e0] text-[#002c60] rounded-full flex items-center justify-center text-xl font-bold shadow-md z-20">
                {step.id}
            </div>
            <h3 className="text-lg font-bold text-[#002c60] mt-12 mb-2 text-center">
                {step.title}
            </h3>
            <p className="text-sm text-gray-700 max-w-[250px] text-center">
                {step.text}
            </p>
            </div>
        ))}
        </div>
      </section>
    </div>
    <BoardMembers />
    </>
  );
};

export default AboutUs;