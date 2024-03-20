"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";

export function AuroraBackgroundDemo() {
   return (
      <AuroraBackground>
         <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
               delay: 0.3,
               duration: 0.8,
               ease: "easeInOut",
            }}
            className="relative flex flex-col gap-4 items-center justify-center px-4">
            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
               Your Gateway to Infinite Opportunities
            </h1>
            <div className="font-extralight text-base md:text-xl dark:text-neutral-200 py-4 text-center md: lg:px-60">
               Discover a world of opportunities with internships, projects, and
               a gateway to your professional future. Join a vibrant community
               that paves the way to success.
            </div>
            <button className="before:ease relative h-12 overflow-hidden border border-slate-300 rounded-lg shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-black before:transition-all before:duration-300 text-slate-300 font-medium hover:text-white hover:shadow-black hover:before:-rotate-180 px-4">
               <span className="relative z-10">Open The Gateway</span>
            </button>
         </motion.div>
      </AuroraBackground>
   );
}
