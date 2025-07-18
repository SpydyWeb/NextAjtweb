import Ourclients from "../layout/Ourclients";

export function Stats() {
  const stats = [
    { value: '10,000+', label: 'Active Users' },
    { value: '99.9%', label: 'Uptime' },
    { value: '50+', label: 'Countries' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <>
    <section className="relative text-center py-6 px-2 sm:py-6">
  {/* Background circle */}
  <div className="
    absolute top-0 left-1/2 transform -translate-x-1/2
    w-64 h-64 sm:w-96 sm:h-96 xl:w-[400px] xl:h-[400px]
    opacity-10 z-0
    bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Blue_circle.svg/1024px-Blue_circle.svg.png')]
    bg-no-repeat bg-center bg-contain
  " />

  {/* Globe Image Background Box */}
  <div
    className="
      relative z-10
      w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl
      aspect-square
      bg-no-repeat bg-center bg-contain
      mx-auto flex flex-col justify-center items-center p-6 sm:p-8
    "
    style={{ backgroundImage: `url(${''})` }}
  >
    <div className="max-w-lg mx-auto px-0">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
        More Than <span className="text-blue-500">25 Years</span><br />
        of Insurance Services
      </h2>
      <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
        We aim to be the leading company in the field of Islamic Sharia-compliant insurance in the Kingdom of Saudi Arabia and the Middle East region by providing innovative, high-quality insurance solutions in a way that achieves the maximum benefit for our  customers, shareholders and employees.
      </p>
      <button className="
        mt-6 px-6 py-2 border border-[#123766] text-[#10426C] rounded-full text-sm sm:text-base font-medium bg-transparent hover:bg-[#10426C] hover:text-white transition-colors duration-200 ">
        About Aljazira
      </button>
    </div>
  </div>
</section>
<Ourclients/>
</>
  );
}