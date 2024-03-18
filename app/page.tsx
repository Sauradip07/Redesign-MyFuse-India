"use client";
import { TextAlignJustifyIcon } from "@radix-ui/react-icons";
import { GlobeDemo } from "./Globe/page";
import { HeroParallaxDemo } from "./HeroParallax/page";
import { Button } from "@/components/ui/button";
import { SpotlightPreview } from "./Spolight/page";
import { CardHoverEffectDemo } from "./CardHoverEffect/page";
import { InfiniteMovingCardsDemo } from "./infinite scroll/Page";
import { TripleMeteorsDemo } from "./MeteorsCard/Page";
import OnlineCV from "./onlineCv/Page";
import StatsCounterSection from "./onlineCv/StatsCounterSection";
export default function Home() {
   return (
      <div>
         <div className="HeroSection">
            {/* Span Button icon logo */}
            <HeroParallaxDemo />
         </div>
         {/* Sponcers All logo like Cursor or create running log design  */}
         <div className="Register Section pt-40 justify-center text-center">
            <div className="pb-8">
               <h1 className="mt-16 text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  {" "}
                  Connecting talent to opportunity{" "}
               </h1>
               <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-4xl mt-2 mx-auto">
                  Embark on your career journey today! Explore our diverse job
                  listings, apply with confidence, and unlock your pathway to
                  success
               </p>
            </div>
            {/* <GlobeDemo /> */}
         </div>
         {/* Button Added */}

         <div>
            <div className="pb-12">
               <h1 className="mt-16 text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  {" "}
                  Top Categories{" "}
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
         <div>
            <div className="pb-12 mb-10">
               <h1 className="mt-16 text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  {" "}
                  How It Works{" "}
               </h1>
            </div>
            <TripleMeteorsDemo />
         </div>
         <div>
            {/* <OnlineCV/>
<StatsCounterSection/> */}
         </div>
      </div>
   );
}
