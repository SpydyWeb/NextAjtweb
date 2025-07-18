import Link from 'next/link';
import { Code2, Github, Twitter, Linkedin,Instagram,Facebook } from 'lucide-react';
import FooterCard from './footercard';
export function Footer() {
  const footerLinks = {
    company: [
      { name: 'About', href: '/about' },
      { name: 'E-Service', href: '/E-Service' },
      { name: 'FAQs', href: '/FAQs' },
      { name: 'Download Center', href: '/DownloadCenter' },
      { name: 'Career', href: '/Career' },
    ],
    resources: [
      { name: 'Hira Street, Al Salamah, Jeddah,U-Zone Building', href: '#' },
      { name: 'Al Salama, 4516-23324, Kingdom of Saudi Arabia', href: '#' },
      { name: '8003040400 | +966 12 6688877', href: '#' },
      { name: 'info@ajt.com.sa', href: '#' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  };

  const socialLinks = [
    // { name: 'GitHub', href: '#', icon: Github },
    { name: 'Twitter', href: 'https://x.com/AljaziraTakaful', icon: Twitter },
    // { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: 'https://www.instagram.com/aljaziratakafulco/', icon: Instagram },
    { name: 'Facebook', href: 'https://www.facebook.com/AljaziraTakafulofficial/', icon: Facebook },
    
  ];

  return (
    <>
    <hr/>
    <footer className="bg-[#ffffff] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Code2 className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-[#10426c]">NextApp</span>
            </Link>
            <p className="mb-6 max-w-md text-[#10426c]">
            We aim to be the leading company in the field of Islamic Sharia-compliant insurance in the Kingdom of Saudi Arabia and the
             Middle East region by providing innovative, high-quality 
            insurance solutions in a way that achieves the maximum benefit for our customers, shareholders and employees.
            </p>
            {/* <div className="flex space-x-4 ">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div> */}
          </div>
  <div>
            <h3 className=" text-xl font-semibold mb-4 text-[#10426c]">Contact US</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#10426c] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-xl text-[#10426c]">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#10426c] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        <div>
  <h3 className="font-semibold mb-4 text-xl text-[#10426c]">Follow Us Now</h3>
  <div className="flex space-x-4">
    {socialLinks.map((social) => (
      <a
        key={social.name}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
        aria-label={social.name}
      >
        <social.icon className="w-5 h-5 text-white" />
      </a>
    ))}
  </div>
</div>

        </div>

        {/* <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 NextApp. All rights reserved.</p>
        </div> */}
      </div>
    </footer>
   <FooterCard/>
    </>
  );
}