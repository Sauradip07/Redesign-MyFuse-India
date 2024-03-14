"use client";
import { GlobeDemo } from "./Globe/page";
import { HeroParallaxDemo } from "./HeroParallax/page";
export default function Home() {
   return (
      <div>
         <HeroParallaxDemo />
         <div>
          <GlobeDemo />
         </div>
      </div>
   );
}
