"use client";

import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/Images/logo.png';
// import Appstore from '../../public/assets/Images/app store.png';
// import Playstore from '../../public/assets/Images/google play.png';
import Appstore from '../../public/assets/Images/ImagesIcons/Appstore.png';
import Playstore from '../../public/assets/Images/ImagesIcons/playstore.webp'

import facebook from '../../public/assets/Images/ImagesIcons/facebook.png';
import instagram from '../../public/assets/Images/ImagesIcons/instagram.png';
import twitter from '../../public/assets/Images/ImagesIcons/twitter.png';

import { footerLinks } from '@/lib/utilities';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/AljaziraTakafulofficial/",
      icon: facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/aljaziratakafulco/",
      icon: instagram,
    },
    {
      name: "Twitter",
      href: "https://x.com/AljaziraTakaful",
      icon: twitter,
    },
  ];

  const appStoreLinks = [
    {
      name: "AppStore-iOS",
      href: "https://apps.apple.com/us/app/mynextcare/id1039800748",
      icon: Appstore,
    },
    {
      name: "AppStore-Android",
      href: "https://play.google.com/store/apps/details?id=com.nextcare.app&hl=en",
      icon: Playstore,
    },
  ];

  return (
     <>
    {/* <hr className="h-[2px] mt-0 sm:block hidden mx-24" /> */}
    <hr className="h-[2px] bg-[#0000008f] mt-0 w-[95%] mx-auto" />
   <footer className="bg-white text-[#10426c] text-sm ">
  {/* <div className="max-w-[1250px] mx-auto px-4 lg:px-8 py-12"> */}
  <div className="mx-auto px-4 lg:px-8 py-12 max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1800px]">
    <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[4fr_4fr_3fr_3fr]">
          {/* Logo and About */}
          <div className="space-y-4 text-wrap: wrap ">
            <Link href="/" className="inline-block">
              <Image
                src={logo}
                alt="Aljazira Takaful"
                width={250}
                height={250}
                className="object-contain"
              />
            </Link>
            <p className="leading-relaxed max-w-sm text-lg">
            {t("footerText")}
            </p>
          </div>

          {/* Contact Us */}
          <div className="text-wrap: wrap">
            <h3 className="text-base font-bold text-xl mb-4">{t("Contactus")}</h3>
            <ul className="space-y-4 text-lg">
              {footerLinks.resources.map((link, idx) => (
                <li key={idx} className="flex items-start gap-3 ">
                  <Image src={link.icon} alt="icon" width={20} height={20} className="lg:mb-3" />
                  <span className="leading-snug">{t(link.name)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-wrap: wrap lg:ml-[100px]">
            <h3 className="text-base text-xl font-bold mb-4">{t("Quicklinks")}</h3>
            <ul className="space-y-4 text-lg">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-sky-600 transition-colors"
                  >
                    {t(link.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social and App Links */}
          <div className="text-wrap: wrap lg:ml-20">
              <h3 className="text-base text-xl font-bold mb-4">
                {t("Followus")}
              </h3>
              <div className="flex items-center gap-4 mb-6 text-lg">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-6 h-6 flex items-center justify-center"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      className="w-6 h-6 object-contain"
                    />
                  </Link>
                ))}
              </div>

              <p className="text-[#1ca4e9] font-semibold  text-xl leading-snug mb-4">
                {t("DownloadMedical")}
                <br />
                {t("InsuranceNextCare")}
                <br />
                {t("Application")}
              </p>
              <div className="space-y-3">
                {appStoreLinks.map((store) => (
                  <Link
                    key={store.name}
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={store.icon}
                      alt={store.name}
                      width={140}
                      height={40}
                      className="object-contain"
                    />
                  </Link>
                ))}
              </div>
                </div>
        </div>
        </div>
      </footer>
    </>
  );
}
