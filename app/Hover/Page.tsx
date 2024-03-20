import React from "react";
import { EvervaultCard, Icon } from "../../components/ui/evervault-card";

export function EvervaultCardDemo(props) {
   return (
      <div className="border border-black/[0.2] dark:border-white/[0.2] rounded-md flex flex-col items-start max-w-xs mx-auto p-4 relative h-[24rem] cursor-pointer">
         <EvervaultCard text={props.icon} />
         <h2 className="ml-2 dark:text-white text-black mt-4 text-md font-medium">
            {props.title}
         </h2>
         <p className="text-xs  font-light  border-black/[0.2] mt-4 text-black dark:text-white px-2 py-0.5">
            {props.description}
         </p>
      </div>
   );
}
