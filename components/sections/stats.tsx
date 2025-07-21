import Image from 'next/image';
import globelogImg from '../../assets/Images/globelogoImg.png';
import Ourclients from '../layout/Ourclients';

export function Stats() {
  return (
    <>
      <section className="relative text-center py-10 px-4">
        {/* Globe Background Image */}
        <div className="relative z-10 w-full max-w-2xl aspect-square mx-auto flex flex-col justify-center items-center p-6 sm:p-8 overflow-hidden">
          <Image
            src={globelogImg}
            alt="Globe Background"
            fill
            className="object-contain object-center z-0"
            priority
          />

          {/* Foreground Content */}
          <div className="relative z-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-[#10426C]">
              More Than <span className="text-blue-500">25 Years</span><br />
              of Insurance Services
            </h2>
            <p className="text-base sm:text-lg text-gray-800 leading-relaxed max-w-xl mx-auto">
              We aim to be the leading company in the field of Islamic Sharia-compliant insurance in the Kingdom of Saudi Arabia and the Middle East region by providing innovative, high-quality insurance solutions in a way that achieves the maximum benefit for our customers, shareholders and employees.
            </p>
            <button className="mt-6 px-6 py-2 border border-[#123766] text-[#10426C] rounded-full text-sm sm:text-base font-medium bg-transparent hover:bg-[#10426C] hover:text-white transition-colors duration-200">
              About Aljazira Takaful
            </button>
          </div>
        </div>
      </section>
      <Ourclients />
    </>
  );
}
