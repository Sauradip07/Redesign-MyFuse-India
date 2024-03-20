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
            className="flex flex-col items-center rounded-lg shadow md:flex-row lg:max-w-3xl dark:bg-black"
            style={{ gap: "200px" }} // Added gap between the image and text
         >
            <div style={{ marginRight: "20px" }}> {/* Added margin to the right of the image */}
               <Image
                  src={Student}

                  alt={"student image"}
                  className="object-cover items-center  min-w-80 w-auto rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg
                  hover:scale-105 transition duration-250 ease-out hover:ease-in"
               />
            </div>
            <div className="flex flex-col justify-start p-4 w-auto leading-normal  items-center text-start ">
               <div className="numbers">
                  <Counter
                     number={counted ? 2500 : 0}
                     title="Active Students"
                  />
                  <Counter number={counted ? 3000 : 0} title="Jobs" />
                  <Counter
                     number={counted ? 5500 : 0}
                     title="Active&#160;Applications"
                  />
               </div>
            </div>
         </a>
      </div>
   );
};

export default BlogCard;
