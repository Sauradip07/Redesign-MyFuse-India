"use client"; // A custom directive possibly indicating client-side execution

// Import necessary dependencies and utilities
import { useMotionValue } from "framer-motion"; // Hook for creating a motion value
import React, { useState, useEffect } from "react"; // React hooks for managing component state and side effects
import { useMotionTemplate, motion } from "framer-motion"; // Components and hooks for animations from framer-motion library
import { cn } from '../../utils/cn'; // Utility function for generating CSS class names

// EvervaultCard component
export const EvervaultCard = ({
  text,
  className,
}: {
  text?: string; // Text content of the card
  className?: string; // Optional className prop for additional styling
}) => {
  // Motion values for tracking mouse position
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  // State for storing a random string
  const [randomString, setRandomString] = useState("");

  // Generate a random string when component mounts
  useEffect(() => {
    let str = generateRandomString(1500);
    setRandomString(str);
  }, []);

  // Function to handle mouse move event
  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    // Generate a new random string
    const str = generateRandomString(1500);
    setRandomString(str);
  }

  return (
    // Container for the card
    <div
      className={cn(
        "p-0.5 bg-transparent aspect-square flex items-center justify-center w-full h-full relative", // CSS classes for styling
        className
      )}
    >
      <div
        onMouseMove={onMouseMove} // Handle mouse move event
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full" // CSS classes for styling
      >
        {/* Component for rendering card pattern */}
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
        />
        <div className="relative z-10 flex items-center justify-center">
          {/* Content inside the card */}
          <div className="relative h-44 w-44 rounded-full flex items-center justify-center text-white font-bold text-4xl">
            <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
            <span className="dark:text-white text-black z-20">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// CardPattern component
export function CardPattern({ mouseX, mouseY, randomString }: any) {
  // Motion template for defining mask image
  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage }; // CSS style for masking effect

  return (
    <div className="pointer-events-none"> {/* Container for patterns */}
      {/* Background with gradient */}
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={style}
      />
      {/* Text pattern */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        {/* Random string */}
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

// Function to generate a random string of specified length
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
export const generateRandomString = (length: number) => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

// Icon component
export const Icon = ({ className, ...rest }: any) => {
  return (
    // SVG icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
