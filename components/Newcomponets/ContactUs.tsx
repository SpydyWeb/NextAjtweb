"use client";
import React, { useState } from "react";
import { branches } from "@/lib/utilities";
import { useTranslation } from "react-i18next";
import { FaPhone, FaClock } from "react-icons/fa6";
import { PiMapPinFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
const ContactUs: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { t } = useTranslation("contactUss");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit", form);
  };

  return (
    <section className="w-full bg-white py-12 px-4 justify-center">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-2xl sm:text-3xl font-semibold text-[#1D3557] mb-8">
          {t("ContactUs")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2  gap-12 items-start sm:ml-0 md:ml-0 lg:ml-[250px]">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
            <h3 className="text-[#1D3557] text-lg sm:text-xl font-semibold mb-4">
              {t("GetInTouch")}
            </h3> 

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-md text-[#1D3557] mb-1">
                  {t("FullName")}
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter Your name"
                  className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <div>
                <label className="block text-md text-[#1D3557] mb-1">
                  {t("Email")}
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter Your E-mail"
                  className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <div>
                <label className="block text-md text-[#1D3557] mb-1">
                  {t("Message")}
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="write here ..."
                  className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#1D3557] hover:bg-[#16324c] text-white px-6 py-2 rounded-md text-sm font-medium shadow-sm"
                >
                  {t("Send")}
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-[#1D3557] text-lg sm:text-xl font-semibold">
              {t("ContactDetails")}
            </h3>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <span className="text-sky-600 mt-1">
                  <MdEmail />
                </span>
                <div>
                  <div className="text-sm text-sky-600 font-medium">
                    {t("EmailAddress")}
                  </div>
                  <div className="text-gray-600">{t("EmailValue")}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-sky-600 mt-1">
                  <FaPhone />
                </span>
                <div>
                  <div className="text-sm text-sky-600 font-medium">
                    {t("Phone")}
                  </div>
                  <div className="text-gray-600">{t("PhoneValue")}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-sky-600 mt-1">
                  <FaPhone />
                </span>
                <div>
                  <div className="text-sm text-sky-600 font-medium">
                    {t("FreeToll")}
                  </div>
                  <div className="text-gray-600">{t("FreeTollValue")}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-sky-600 mt-1">
                  <FaClock />
                </span>
                <div>
                  <div className="text-sm text-sky-600 font-medium">
                    {t("WorkingHours")}
                  </div>
                  <div className="text-gray-600">
                    {t("WorkingHoursValue")}
                    <span className="block">{t("WorkingHoursTime")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h4 className="text-[#1D3557] text-lg font-semibold mb-6">
            {t("Branches")}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((b, i) => (
              <div key={b.title} className="space-y-2">
                <div className="text-sky-700 font-semibold">{t(b.title)}</div>
                {b.subtitle && (
                  <div className="text-gray-700 font-medium">
                    {t(b.subtitle)}
                  </div>
                )}
                <div className="text-gray-600 text-sm leading-6">
                  {b.address.map((line, idx) => (
                    <div key={line} className="flex items-start gap-2">
                      <span className="text-sky-500 mt-1">
                        <PiMapPinFill />
                      </span>
                      <span>{t(line)}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-2 text-gray-700 text-sm flex items-center gap-2">
                  <span className="text-sky-500">
                    <FaPhone />
                  </span>
                  <span>{t(b.phone)}</span>
                </div>

                <div>
                  <a
                    href={t(b.locateUrl)}
                    className="text-sky-600 text-sm font-medium inline-block mt-2"
                  >
                    {t("LocateUs")}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
