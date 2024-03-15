"use client";
import { GlobeDemo } from "./Globe/page";
import { HeroParallaxDemo } from "./HeroParallax/page";
export default function Home() {
   return (
      <div>
         <div className="HeroSection">   
            <HeroParallaxDemo />
         </div>
         <div className="Register Section">
          <GlobeDemo />
         </div>
      </div>
   );
}
