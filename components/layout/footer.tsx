import Link from 'next/link';
import { Code2, Github, Twitter, Linkedin,Instagram,Facebook } from 'lucide-react';
import FooterCard from './footercard';
import { BsSearch } from 'react-icons/bs';
import { BiSolidMap } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMail } from 'react-icons/io5';
import Image from 'next/image';
import logo from '../../assets/Images/logo.png';
import Appstore from '../../assets/Images/app store.png';
import Playstore from '../../assets/Images/google play.png';
import facebook from '../../assets/Images/facebook.png';
import instagram from '../../assets/Images/instagram.png';
import twiter from '../../assets/Images/twiter.png';
export function Footer() {
  
  const footerLinks = {
    company: [
      { name: 'About', href: '/aboutuspage' },
      { name: 'E-Service', href: '/E-Service' },
      { name: 'FAQs', href: '/FAQs' },
      { name: 'Download Center', href: '/DownloadCenter' },
      { name: 'Career', href: '/Career' },
    ],
    resources: [
        { name: 'Hira Street, Al Salamah, Jeddah, U-Zone Building', href: '#', icon: <BiSolidMap className="w-[2rem] h-[2rem] text-[#009ee2]" /> },
        { name: 'Al Salama, 4516-23324, Kingdom of Saudi Arabia', href: '#', icon: <BiSolidMap className="w-[2rem] h-[2rem] text-[#009ee2]" /> },
        { name: '8003040400 | +966 12 6688877', href: '#', icon: <BsFillTelephoneFill className="w-[1.5rem] h-[1.5rem] text-[#009ee2]" /> },
        { name: 'info@ajt.com.sa', href: '#', icon: <IoMail className="w-[1.5rem] h-[1.5rem] text-[#009ee2]" /> },
      ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

 const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/AljaziraTakafulofficial/', icon: facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/aljaziratakafulco/', icon: instagram },
  { name: 'Twitter', href: 'https://x.com/AljaziraTakaful', icon: twiter },
  { name: 'AppStore-iOS', href: 'https://apps.apple.com/us/app/mynextcare/id1039800748', icon: Appstore },
  { name: 'AppStore-Android', href: 'https://play.google.com/store/apps/details?id=com.nextcare.app&hl=en', icon: Playstore }
];


  return (
     <>
      <hr />
      <footer className="bg-white text-[#10426c]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {/* Logo + Description */}
            <div className="lg:col-span-2 space-y-4">
              <Link href="/" className="inline-block">
                <Image
                  src={logo}
                  alt="Company Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </Link>
              <p className="text-sm max-w-md">
                We aim to be the leading company in the field of Islamic
                Sharia-compliant insurance in the Kingdom of Saudi Arabia and
                the Middle East region by providing innovative, high-quality
                insurance solutions in a way that achieves the maximum benefit
                for our customers, shareholders and employees.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-start gap-2 text-sm hover:text-sky-600"
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="hover:text-sky-600">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & App Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us Now</h3>
              <div className="flex items-center gap-4 mb-6">
                {socialLinks.slice(0, 3).map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-6 h-6"
                  >
                    <Image
                      src={social.icon}
                      alt={social.name}
                      className="w-full h-full object-contain filter invert sepia saturate-500 hue-rotate-[175deg] brightness-110"
                    />
                  </Link>
                ))}
              </div>
              <p className="text-sm font-medium mb-3 leading-tight">
                Download Medical <br />
                Insurance NextCare <br />
                Application
              </p>
              <div className="space-y-3">
                {socialLinks.slice(3).map((store) => (
                  <Link
                    key={store.name}
                    href={store.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={store.icon}
                      alt={store.name}
                      className="w-[140px] h-auto"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
      <FooterCard />
    </>
  );
}