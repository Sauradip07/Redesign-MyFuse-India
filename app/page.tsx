"use client";
import { TextAlignJustifyIcon } from "@radix-ui/react-icons";
import { GlobeDemo } from "../components/Globe/page";
import { HeroParallaxDemo } from "../components/HeroParallax/page";
import { Button } from "@/components/ui/button";
import { SpotlightPreview } from "../components/Spolight/page";
import { CardHoverEffectDemo } from "../components/CardHoverEffect/page";
import { InfiniteMovingCardsDemo } from "../components/infinite scroll/Page";
import { TripleMeteorsDemo } from "../components/MeteorsCard/Page";
import OnlineCV from "../components/onlineCv/Page";
import StatsCounterSection from "../components/onlineCv/StatsCounterSection";
import { MovingBorderDemo } from "../components/MovingBorder/page";
import { BackgroundBeamsDemo } from "../components/BackgroundBeams/page";
import { ThreeDCardDemo } from "../components/3D-Crad/page";

import BlogCard from "../components/incraseauto/Page";
import { useEffect, useState } from "react";
import data_jobs from "../components/data/data.json";
import JobList from "../components/RecentJob/page";
import { StickyScrollRevealDemo } from "../components/StickyScroll/Page";
import { EvervaultCardDemo } from "../components/Hover/Page";
import { LampDemo } from "../components/LampEffect/page";
import CompanyDemo from "../components/CompanyCard/page";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { AuroraBackgroundDemo } from "../components/Hero/page";
import { AnimatedTooltipPreview } from "../components/Devlopers/page";
import { MdComputer } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { LuCalendarCheck } from "react-icons/lu";
import { GrBraille } from "react-icons/gr";
import Image from "next/image";
import zepto from "../public/zepto.jpg";
import zerodha from "../public/zerodha.png";
import fuse from "../public/fuse2.webp";
import fuse2 from "../public/fuse.png";
import { NavBarSection } from "../components/HeroNavbar/page";

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
      <div className="">
         <NavBarSection />
         <div className="bg-black text-white">
            <div className="HeroSection">
               {/* Span Button icon logo */}
               {/* <HeroParallaxDemo /> */}
               <AuroraBackgroundDemo />
            </div>
            {/* Sponcers All logo like Cursor or create running log design  */}
            <div>
               <CompanyDemo />
            </div>
            <TracingBeam className="px-8 md:px-6">
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
                        Elevate your skills and embrace growth with our Regular
                        Challenge – a daily journey to unlock your full
                        potential
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
                  <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-4xl mt-6 mx-auto">
                     Embark on your career journey today! Explore our diverse
                     job listings, apply with confidence, and unlock your
                     pathway to success
                  </p>
               </div>
               {/* <GlobeDemo /> */}
            </div>
            <div className="justify-center align-baseline text-center mt-6">
               <MovingBorderDemo />
            </div>

            <div className="mt-20">
               <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 justify-center align-middle gap-4 md:gap-6 lg:gap-16 px-4 md:px-20">
                  <EvervaultCardDemo
                     title={"Right Job For You"}
                     description={
                        "Myfuse's comprehensive platform is designed to help you discover the right job for you and many more support."
                     }
                     icon={<MdComputer width={20} height={20} />}
                     // icon={<UserIcon />}
                  />
                  <EvervaultCardDemo
                     title={"One to One Coverstatiion"}
                     description={
                        "MyFuse offers the unique advantage of one-to-one conversations with HR professionals"
                     }
                     icon={<RiContactsBook2Fill width={20} height={20} />}
                  />
                  <EvervaultCardDemo
                     title={"No Work Experience required"}
                     description={
                        "Myfuse welcomes applicants with no work experience, providing valuable opportunities and resources"
                     }
                     icon={<LuCalendarCheck width={20} height={20} />}
                  />
                  <EvervaultCardDemo
                     title={"Easy To Apply"}
                     description={
                        "Myfuse's straightforward application process is designed to be easy to apply"
                     }
                     icon={<GrBraille width={12} height={12} />}
                  />
               </div>
            </div>

            <div className="mt-44">
               <div className="pb-12">
                  <h1 className="mt-16 text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 p-4">
                     {" "}
                     Top Categories{" "}
                  </h1>
                  <p className="mt-4 font-normal px-4 text-base md:text-lg text-neutral-300 max-w-5xl text-center mx-auto">
                     High-demand job categories feature software development,
                     nursing, and digital marketing roles
                  </p>
               </div>
               <CardHoverEffectDemo />
            </div>
            {/* Button Added */}

            <div className="mt-44">
               <div className="pb-12 mb-10">
                  <h1 className="mt-16 text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                     {" "}
                     Recent Jobs{" "}
                  </h1>
                  <p className="mt-4 px-4 font-normal text-base md:text-lg text-neutral-300 max-w-5xl text-center mx-auto">
                     Recent job trends highlight positions in data analysis,
                     telemedicine, and remote project management
                  </p>
               </div>
               <div className="w-full min-h-screen">
                  <JobList
                     filteredJobs={filteredJobs}
                     handleTagClick={handleTagClick}
                  />
               </div>
            </div>

            <div className="mt-24">
               {/* Data Change for the spolight */}
               <SpotlightPreview />
            </div>
            {/* Button Added */}
            <div>
               <div className="">
                  <h1 className="mt-16 text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                     {" "}
                     What Graduates Say About Myfuse{" "}
                  </h1>
                  <p className="mt-4 p-4 font-normal text-base md:text-lg text-neutral-300 max-w-5xl text-center mx-auto">
                     Discover what our satisfied customers have to say about
                     their experiences with our products and services. Read
                     these testimonials to gain insights into the positive
                     impact we&apos;ve had on their lives
                  </p>
               </div>
               <InfiniteMovingCardsDemo />
            </div>
            <div>
               <div className="pb-12 mb-10">
                  <h1 className="mt-16 text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                     {" "}
                     How It Works{" "}
                  </h1>
                  <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-5xl text-center mx-auto">
                     Launch your dream career with these essential steps
                  </p>
               </div>
               <TripleMeteorsDemo />
            </div>
            <div className="mt-20 flex flex-col">
               <div>
                  <BlogCard />
               </div>
               <div className="p-4 mt-10 max-w-auto justify-center text-center align-middle ">
                  <AnimatedTooltipPreview />
               </div>
            </div>
            {/* online resume */}
            <div className="lg:mt-40 md:mt-32">
               <div className="pb-12">
                  <h1 className="mt-12 py-4 text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                     {" "}
                     Recent Blogs{" "}
                  </h1>
                  <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-5xl text-center mx-auto">
                     Stay up-to-date with our latest insights and updates in our
                     Recent Blog. Explore our most recent articles and posts to
                     gain valuable knowledge on various topics.
                  </p>
               </div>
               <div className="flex justify-center">
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 justify-center gap-4 md:gap-6 lg:gap-16">
                     <ThreeDCardDemo
                        title={"Zerodha"}
                        description={
                           "Discount stock broker for online trading in India "
                        }
                        techId={"Finance"}
                        imageValue={zerodha}
                     />
                     <ThreeDCardDemo
                        title={"Myfuse.In"}
                        description={
                           "Job platform connecting candidates directly with employers"
                        }
                        techId={"Technology"}
                        imageValue={fuse}
                     />
                     <ThreeDCardDemo
                        title={"Zepto"}
                        description={
                           "India's super-fast grocery delivery app (10-minute deliveries)"
                        }
                        techId={"E-Commerce"}
                        imageValue={zepto}
                     />
                  </div>
               </div>
            </div>

            {/* Button Added */}
            <footer>
               <div className="mt-16">
                  <BackgroundBeamsDemo imageValue={fuse2} />
               </div>
            </footer>
         </div>
      </div>
   );
}
