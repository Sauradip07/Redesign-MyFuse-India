import React from "react";
import CountUp from "react-countup";

const Counter = ({ number, title }) => {
   return (
      <div className="number mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         <h2 className="counter mb-3 text-slate-300 font-semibold">{title}</h2>
         <CountUp duration={3} end={number} />
      </div>
   );
};

export default Counter;
