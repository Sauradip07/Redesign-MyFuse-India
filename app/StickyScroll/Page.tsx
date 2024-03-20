"use client";
import React from "react";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import Image from "next/image";
import coding_comp from "../../public/coding-comp.jpg";
import pixel_perfect from "../../public/pixel-perfect.jpg";
import front_end from '../../public/frontend-design.jpg'
import hackathon from "../../public/hackathon.jpg";

const content = [
   {
      title: "Coding Competition",
      description:
         "Calling all coders!  Put your programming skills to the test in a thrilling online competition.  You'll be presented with a series of algorithmic challenges that need to be solved within a set time limit. Languages like Python, Java, C++, or Javascript are commonly used, so choose your weapon.",
      content: (
         <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            <Image
               src={coding_comp}
               width={300}
               height={300}
               className="h-full w-full object-cover"
               alt="linear board demo"
            />
         </div>
      ),
   },
   {
      title: "Pixel Perfect Challenge",
      description:
         "Participants compete to build a website that exactly matches a provided design mockup. This tests your skills in HTML, CSS, and responsiveness",
      content: (
         <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
               src={pixel_perfect}
               width={300}
               height={300}
               className="h-full w-full object-cover"
               alt="linear board demo"
            />
         </div>
      ),
   },
   {
      title: "One-Page Website Challenge",
      description:
         "The One-Page Website Challenge throws down the gauntlet for web designers and developers. Here, the traditional multi-page website structure is tossed aside.  Your mission: Craft a captivating and comprehensive website, with all its content, on a single scrollable page .",
      content: (
         <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
            <Image
               src={front_end}
               width={300}
               height={300}
               className="h-full w-full object-cover"
               alt="linear board demo"
            />
         </div>
      ),
   },
   {
      title: "Hackathon",
      description:
         "Hackathons! Calling programmers, designers, and dreamers! Collaborate intensely & create software or solve coding challenges in a weekend. It's a coding blitz fueled by coffee and teamwork.  Are you ready to innovate.",
      content: (
         <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
            <Image
               src={hackathon}
               width={300}
               height={300}
               className="h-full w-full object-cover"
               alt="linear board demo"
            />
         </div>
      ),
   },
];
export function StickyScrollRevealDemo() {
   return (
      <div className="p-10">
         <StickyScroll content={content} />
      </div>
   );
}
