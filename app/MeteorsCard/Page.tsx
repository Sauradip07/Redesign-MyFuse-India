import React from "react";
import { Meteors } from "../../components/ui/meteors";

export function MeteorsDemo() {
   return (
      <div className="flex items-center justify-evenly">
         <div className="w-full relative max-w-sm px-8 py-4 min-w-64">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r   transform scale-[0.80]  rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-black border border-gray-700 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start hover:scale-105 transition duration-200 ease-out hover:ease-in">
               <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="1.5"
                     stroke="currentColor"
                     className="h-2 w-2 text-gray-300">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                     />
                  </svg>
               </div>

               <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                  Meteors because they&apos;re cool
               </h1>

               <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                  I don&apos;t know what to write so I&apos;ll just paste
                  something cool here. One more sentence because lorem ipsum is
                  just unacceptable. Won&apos;t ChatGPT the shit out of this.
               </p>

               <button className="border px-4 py-1 rounded-lg border-gray-500 text-gray-300">
                  Explore
               </button>

               {/* Meaty part - Meteor effect */}
               <Meteors number={20} />
            </div>
         </div>
      </div>
   );
}

// Duplicate MeteorsDemo component
export function TripleMeteorsDemo() {
   return (
      <div className="grid grid-cols-1  md:grid-cols-1 lg:grid-cols-3 content-center items-center place-content-center lg:px-60">
         <MeteorsDemo />
         <MeteorsDemo />
         <MeteorsDemo />
      </div>
   );
}
