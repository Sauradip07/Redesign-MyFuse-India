import React, { useEffect, useState } from "react";
import { cn } from "@/utils/cn"; // Importing a utility function for classnames concatenation

// InfiniteMovingCards Component: Renders a list of items with an infinite moving animation
export const InfiniteMovingCards = ({
   items, // List of items to display
   direction = "left", // Direction of animation (default: left)
   speed = "fast", // Speed of animation (default: fast)
   pauseOnHover = true, // Whether to pause animation on hover (default: true)
   className,
    // Additional CSS classes
}) => {
   const containerRef = React.useRef(null); // Reference to the container element
   const scrollerRef = React.useRef(null); // Reference to the scroller element
   const [start, setStart] = useState(false); // State to control animation start

   useEffect(() => {
      addAnimation(); // Add animation effect on component mount
   }, []);

   // Function to duplicate items for infinite scrolling effect
   function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
         const scrollerContent = Array.from(scrollerRef.current.children);

         // Duplicate each item and append to the scroller
         scrollerContent.forEach((item: HTMLElement) => {
            const duplicatedItem = item.cloneNode(true);
            if (scrollerRef.current) {
               scrollerRef.current.appendChild(duplicatedItem);
            }
         });

         // Set animation direction and speed
         getDirection();
         getSpeed();
         setStart(true); // Start the animation
      }
   }

   // Function to set animation direction based on props
   const getDirection = () => {
      if (containerRef.current) {
         if (direction === "left") {
            containerRef.current.style.setProperty(
               "--animation-direction",
               "forwards"
            );
         } else {
            containerRef.current.style.setProperty(
               "--animation-direction",
               "reverse"
            );
         }
      }
   };

   // Function to set animation speed based on props
   const getSpeed = () => {
      if (containerRef.current) {
         if (speed === "fast") {
            containerRef.current.style.setProperty(
               "--animation-duration",
               "20s"
            );
         } else if (speed === "normal") {
            containerRef.current.style.setProperty(
               "--animation-duration",
               "40s"
            );
         } else {
            containerRef.current.style.setProperty(
               "--animation-duration",
               "100s"
            );
         }
      }
   };

   // Function to generate star rating elements based on the rating value
   const generateStarRating = (rating) => {
      const stars = [];
      const fullStars = Math.floor(rating); // Number of full stars
      const halfStar = rating % 1 !== 0; // Check if there's a half star
      const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Number of empty stars
      for (let i = 0; i < fullStars; i++) {
         stars.push(
            <span key={i} className="text-yellow-400 fill-current">
               &#9733; {/* Unicode star character */}
            </span>
         );
      }
      if (halfStar) {
         stars.push(
            <span key="half" className="text-yellow-400 fill-current">
               &#9734; {/* Unicode half star character */}
            </span>
         );
      }
      for (let i = 0; i < emptyStars; i++) {
         stars.push(
            <span key={`empty-${i}`} className="text-gray-300 fill-current">
               &#9734; {/* Unicode empty star character */}
            </span>
         );
      }
      return stars;
   };

   return (
      <div
         ref={containerRef}
         className={cn(
            // Concatenate CSS classes using the utility function
            "scroller relative z-20 max-w-full overflow-hidden",
            className
         )}
         style={{
            maskImage:
               "linear-gradient(to right, transparent, white 0%, white 100%, transparent)",
         }}>
         <ul
            ref={scrollerRef}
            className={cn(
               // Concatenate CSS classes using the utility function
               "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
               start && "animate-scroll", // Start animation when 'start' state is true
               pauseOnHover && "hover:[animation-play-state:paused]" // Pause animation on hover if enabled
            )}>
            {items.map((item, idx) => (
               <li
                  className="w-[350px] max-w-full relative rounded-2xl border   flex-shrink-0  px-8 py-6 md:w-[450px] hover:scale-105 transition duration-250 ease-out hover:ease-in"
                  style={{
                     background:
                        "bg-slate-400",
                  }}
                  key={item.name}>
                  {/* <img
                     src={item.image} // Image source
                     alt={item.name} // Alt text for accessibility
                     className="absolute top-0 left-0 w-full h-auto rounded-t-2xl"
                  /> */}
                  <blockquote>
                     <div
                        aria-hidden="true"
                        className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"></div>
                     <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                        {item.quote} {/* Quote content */}
                     </span>
                     <div className="relative z-20 mt-6 flex flex-row items-center">
                        <span className="flex flex-col gap-1">
                           <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                              {item.name} {/* Name */}
                           </span>
                           <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                              {item.title} {/* Title */}
                           </span>
                           <div className="flex items-center">
                              {generateStarRating(item.rating)}{" "}
                              {/* Star rating */}
                           </div>
                        </span>
                     </div>
                  </blockquote>
               </li>
            ))}
         </ul>
      </div>
   );
};
