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
import { MovingBorderDemo } from "./MovingBorder/page";
import { BackgroundBeamsDemo } from "./BackgroundBeams/page";
import { ThreeDCardDemo } from "./3D-Crad/page";

import BlogCard from "./incraseauto/Page";
import { useEffect, useState } from "react";
import data_jobs from "./data/data.json";
import JobList from "./RecentJob/page";
import { StickyScrollRevealDemo } from "./StickyScroll/Page";
import { EvervaultCardDemo } from "./Hover/Page";
import { LampDemo } from "./LampEffect/page";
import CompanyDemo from "./CompanyCard/page";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { AuroraBackgroundDemo } from "./Hero/page";

export default function Home() {
   const [jobs, setJobs] = useState([]);
   const [filters, setFilters] = useState([]);

   useEffect(() => setJobs(data_jobs));

   const filterFunc = ({ role, level, tools, languages }) => {
      if (filters.length === 0) {
         return true;
      }

      const tags = [role, level];

      return tags.some((tag) => filters.includes(tag));
   };

   const filteredJobs = jobs.filter(filterFunc);

   const handleTagClick = () => {
      console.log("click happened");
   };

   return (
      <div>
         <div className="HeroSection">
            {/* Span Button icon logo */}
            {/* <HeroParallaxDemo /> */}
            <AuroraBackgroundDemo />
         </div>
         {/* Sponcers All logo like Cursor or create running log design  */}
         <div>
            <CompanyDemo />
         </div>
         <TracingBeam className="px-6">
            {/* Button Added */}

            <div className="max-h-[690px]">
               <LampDemo />
            </div>

            <div className="Register Section pt-40 justify-center text-center">
               <div className="p-6">
                     <h1 className="mt-16 text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 p-4">
                        {" "}
                        Regular Challenges{" "}
                     </h1>
                     <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-4xl mt-2 mx-auto">
                        Elevate your skills and embrace growth with our Regular Challenge – a daily journey to unlock your full potential.
                     </p>
                  </div>
               {/* <GlobeDemo /> */}
            </div>

            <div>
               <StickyScrollRevealDemo />
            </div>
         </TracingBeam>
         <div className="Register Section pt-40 justify-center text-center">
            <div className="p-6">
               <h1 className="mt-16 text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 p-4">
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
         <div className="justify-center align-baseline text-center">
            <MovingBorderDemo />
         </div>

         <div className="mt-14">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 justify-center align-middle gap-4 md:gap-6 lg:gap-16 px-4 md:px-20">
               <EvervaultCardDemo />
               <EvervaultCardDemo />
               <EvervaultCardDemo />
               <EvervaultCardDemo />
            </div>
         </div>

         <div>
            <div className="pb-12">
               <h1 className="mt-16 text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 p-4">
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
         {/* Button Added */}

         <div>
            <div className="w-full min-h-screen">
               <JobList
                  filteredJobs={filteredJobs}
                  handleTagClick={handleTagClick}
               />
            </div>
         </div>

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
            <BlogCard />
         </div>
         {/* online resume */}
         <div className="lg:mt-40 md:mt-32">
            <div className="pb-12">
               <h1 className="mt-12 text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                  {" "}
                  How It Works{" "}
               </h1>
            </div>
            <div className="flex justify-center">
               <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-center gap-4 md:gap-6 lg:gap-16">
                  <ThreeDCardDemo />
                  <ThreeDCardDemo />
                  <ThreeDCardDemo />
               </div>
            </div>
         </div>

         {/* Button Added */}
         <footer>
            <div className="mt-16">
               <BackgroundBeamsDemo />
            </div>
         </footer>
      </div>
   );
}
