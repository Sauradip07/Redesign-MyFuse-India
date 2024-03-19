import React from "react";
import { EvervaultCard, Icon } from "../../components/ui/evervault-card";

export function EvervaultCardDemo() {
   return (
      <div className="border border-black/[0.2] dark:border-white/[0.2] rounded-md flex flex-col items-start max-w-xs mx-auto p-4 relative h-[24rem]">
         <EvervaultCard text="hover 1" />
         <h2 className="dark:text-white text-black mt-4 text-sm font-light">
            Hover over these cards to reveal an awesome effect. Running out of
            copy here.
         </h2>
         <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
            Watch me hover
         </p>
      </div>
   );
}
