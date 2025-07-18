import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { Stats } from '@/components/sections/stats';

export default function Home() {
  return (
    <div className="space-y-1">
      <Hero />
      <Features />
      <Stats />
    </div>
  );
}