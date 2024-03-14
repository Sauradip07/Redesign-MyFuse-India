"use client";
import { HeroParallaxDemo } from "./HeroParallax/page";
import { WavyBackgroundDemo } from "./RegiterSection/page";
export default function Home() {
   return (
      <div>
         <div>
            <HeroParallaxDemo />
         </div>
         <div>
            <WavyBackgroundDemo />
         </div>
      </div>
   );
}
