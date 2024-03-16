"use client";
import { TextAlignJustifyIcon } from "@radix-ui/react-icons";
import { GlobeDemo } from "./Globe/page";
import { HeroParallaxDemo } from "./HeroParallax/page";
import { Button } from "@/components/ui/button";
import { SpotlightPreview } from "./Spolight/page";
import { CardHoverEffectDemo } from "./CardHoverEffect/page";
import {InfiniteMovingCardsDemo} from "./infinite scroll/Page"
export default function Home() {
   return (
      <div>
         <div className="HeroSection">
            {/* Span Button icon logo */}
            <HeroParallaxDemo />
         </div>
         {/* Sponcers All logo like Cursor or create running log design  */}
         <div className="Register Section pt-40 justify-center text-center">
            <GlobeDemo />
         </div>
         {/* Button Added */}

         <div>
            <div className="pb-12">
               <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  Top Categories
               </h1>
               <p className="mt-4 font-normal text-base text-neutral-300 max-w-5xl text-center mx-auto">
                  High-demand job categories feature software development,
                  nursing, and digital marketing roles
               </p>
            </div>
            <CardHoverEffectDemo />
         </div>
         <div className="pt-40 pb-40"></div>
         {/* Button Added */}
         <div>
            {/* Data Change for the spolight */}
            <SpotlightPreview />
         </div>
         {/* Button Added */}
         <div>
            <InfiniteMovingCardsDemo />
         </div>
      </div>
   );
}
