import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "../../components/ui/Spotlight";

export function SpotlightPreview() {
   return (
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
         <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
         />
         <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
               Unlocking <br /> Your professional future
            </h1>
            <p className="mt-4 font-normal text-base text-neutral-300 max-w-5xl text-center mx-auto">
               In the fast-paced and competitive job market, students face the
               challenge of not only excelling academically but also becoming
               employable even before graduation. This blog aims to guide you
               through the journey of enhancing your employability while still
               studying, providing practical tips to set you on the path to a
               successful and fulfilling career.
            </p>
         </div>
      </div>
   );
}
