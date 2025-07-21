import React from 'react';

const CreateAccounts = () => {
  return (
  <div className="min-h-screen flex flex-col bg-[#f9fafb] pt-8">
  {/* Page Title + Subtitle */}
  <section className="text-center px-4 mt-4 md:mt-6">
    <h2 className="text-3xl md:text-4xl font-bold text-[#10426C] mb-2">
      Create Account
    </h2>
    <p className="text-gray-500 text-sm md:text-base">
      Start your journey
    </p>
  </section>

      {/* Form Card */}
       <main className="flex-grow flex items-start justify-center px-2 pt-4 md:pt-6">
    <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
        <form className="space-y-6">
            {/* ID Number */}
            <div>
              <label
                htmlFor="idNumber"
                className="block text-sm font-medium text-[#10426C] mb-1"
              >
                ID Number
              </label>
              <input
                id="idNumber"
                type="text"
                placeholder="National ID"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-[#10426C] mb-1"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#10426C] mb-1"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Please enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-[#10426C] mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Please enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#10426C] text-white font-semibold py-3 rounded-lg hover:bg-[#0c3557] transition duration-200"
            >
              Create Account
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateAccounts;
