import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { Stats } from '@/components/sections/stats';
import Contactus from '@/components/layout/Contactus';
import LatestNews from '@/components/layout/LatestNews';
import Ourclients from '@/components/layout/Ourclients';
export default function Home() {
  return (
    <div className="space-y-1">
      <Hero />
      <Features />
      <Stats />
      {/* <Ourclients/>
       <LatestNews/> */}
      <Contactus />
    </div>
  );
}