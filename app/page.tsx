import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
export default function Home() {
  return (
    <div className="space-y-1">
      <Hero />
      <Features />
      {/* <Stats /> */}
      {/* <Ourclients/>
       <LatestNews/> */}
      {/* <Contactus /> */}
    </div>
  );
}