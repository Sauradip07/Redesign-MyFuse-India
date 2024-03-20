import React, { useState, useEffect } from "react";
import CountUp from "react-countup";
import Counter from "../../components/ui/autoincrase";
import Image from "next/image";
import Student from "../../public/Student.jpg";

const BlogCard = () => {
   const [counted, setCounted] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const windowHeight = window.innerHeight;
         const blogCard = document.getElementById("blog-card");
         if (blogCard) {
            const { top } = blogCard.getBoundingClientRect();
            if (top < windowHeight && !counted) {
               setCounted(true);
            }
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, [counted]);

   return (
      <div id="blog-card" className="w-auto flex justify-center py-4 px-2">
         <a
            href="#"
            className="flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl  dark:bg-black ">
            <div className="object-cover min-w-80 w-auto rounded-t-lg h-[500px] md:rounded-none md:rounded-s-lg">
               <Image
                  src={Student}
                  alt={"student image"}
                  className="align-middle justify-center text-center"
               />
            </div>
            <div className="flex flex-col justify-start p-4 w-auto leading-normal  items-center text-start md:align-middle">
               <div className="numbers">
                  <Counter
                     number={counted ? 2500 : 0}
                     title="Active Students"
                  />
                  <Counter number={counted ? 3000 : 0} title="Jobs" />
                  <Counter
                     number={counted ? 5500 : 0}
                     title="Active Applications"
                  />
               </div>
            </div>
         </a>
      </div>
   );
};

export default BlogCard;
