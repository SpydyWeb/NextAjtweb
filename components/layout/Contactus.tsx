import React from 'react';

const Contactus = () => {
  return (
    <section className="py-12 px-4 text-center bg-white">
      <h3 className="text-2xl sm:text-3xl font-semibold text-[#1e3a8a] mb-1">
        Contact Us & Get
      </h3>
      <h3 className="text-2xl sm:text-3xl font-bold text-[#1e3a8a] mb-4">
        Your <span className="text-sky-400">Insurance Today!</span>
      </h3>

      {/* Description */}
      <p className="max-w-2xl mx-auto text-base sm:text-lg leading-7 text-gray-600 mb-8">
        Whether you’re looking for the best insurance plan or need assistance with an existing policy,
        our friendly team is just a message or call away. We make it simple, fast, and stress-free.
      </p>

      {/* Email Form */}
      <div className="flex flex-col sm:flex-row justify-center max-w-xl mx-auto overflow-hidden rounded-full border border-[#1e3a8a] shadow-sm">
        <input
          type="email"
          placeholder="ENTER YOUR EMAIL"
          className="flex-1 px-4 py-3 text-sm text-gray-800 outline-none border-none"
        />
        <button className="bg-[#1e3a8a] text-white px-6 py-3 text-sm font-semibold w-full sm:w-auto">
          CONTACT US
        </button>
      </div>
    </section>
  );
};

export default Contactus;
