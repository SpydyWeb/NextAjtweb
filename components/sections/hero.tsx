import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play } from 'lucide-react';
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white">
      <div className="w-full">
      <div className="max-w-screen-xl mx-auto px-6 py-2 flex flex-wrap items-center justify-between gap-6">
        {/* Select Dropdown */}
        <div className="flex-1 min-w-[250px] relative">
          <select
            className="w-full appearance-none bg-slate-100 border border-gray-200 rounded-full py-2 px-4 text-slate-600 text-sm outline-none"
          >
            <option>Choose your product insurance...</option>
            <option>Choose your Motor insurance... Raect js</option>
            <option>Choose your Medical insurance... nextjs</option>
          </select>
          <div className="absolute top-1/2 right-5 transform -translate-y-1/2 pointer-events-none text-slate-500">
            <ChevronDownIcon className="w-3 h-3" />
          </div>
        </div>

        {/* EServices Button */}
        <button
          className="py-2 px-6 border border-[#123766] text-[#10426C] rounded-full font-medium text-sm bg-transparent cursor-pointer whitespace-nowrap"
        >
          E-Services
        </button>
      </div>
    </div>
    <section className="relative flex flex-col md:flex-row justify-between items-center max-w-[1100px] mx-auto px-4 py-8 gap-8">
  {/* Left Text */}
  <div className="flex-1 text-center md:text-left">
    <h1 className="text-3xl md:text-4xl font-bold text-[#1e3a8a]">MOTOR Insurance</h1>
    <p className="text-2xl md:text-4xl mt-2">You Drive & We Insure</p>
    <button className="mt-4 px-6 py-2 border border-[#123766] text-[#10426C] rounded-full font-medium text-sm bg-transparent cursor-pointer whitespace-nowrap">
      InsureNow !
    </button>
  </div>

  {/* Right Image */}
  <div className="flex-shrink-0 mb-6 md:mb-0">
    <div className="w-[240px] h-[220px] sm:w-[280px] sm:h-[250px] md:w-[320px] md:h-[300px] mx-auto md:mx-0">
      <img
        src=''
        alt="Motor"
        className="w-full h-full object-contain"
      />
    </div>
  </div>

  {/* Center Dots */}
  <div className="absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 flex justify-center gap-2">
    {/* {images.map((_, idx) => (
      <div
        key={idx}
        onClick={() => setActiveIndex(idx)}
        className={`w-[10px] h-[10px] rounded-full cursor-pointer transition-colors duration-300 ${
          activeIndex === idx ? "bg-[#1e3a8a]" : "bg-slate-300"
        }`}
      />
    ))}  */}
  </div>
</section>

      {/* <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4">
            🚀 New Release Available
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Build Amazing Web Applications
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Create modern, scalable web applications with our comprehensive toolkit. 
            From concept to deployment, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              <Play className="mr-2 w-4 h-4" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div> */}
    </section>
  );
}