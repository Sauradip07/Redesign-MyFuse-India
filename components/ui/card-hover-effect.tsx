// Import necessary dependencies and utilities
"use client";
import { cn } from "@/utils/cn"; // Importing a utility function for generating CSS class names
import { AnimatePresence, motion } from "framer-motion"; // Importing components for animations from framer-motion library
import Link from "next/link"; // Importing Link component from Next.js for client-side navigation
import { useState } from "react"; // Importing useState hook from React for managing component state

// Define HoverEffect component
export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[]; // An array of objects containing item information
  className?: string; // Optional className prop for additional styling
}) => {
  // State variable to track hovered index
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    // Container for grid layout
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10", // CSS classes for grid layout
        className
      )}
    >
      {/* Mapping over items array to render individual items */}
      {items.map((item, idx) => (
        <Link
          href={item?.link} // Link destination
          key={item?.link} // Unique key for each item
          className="relative group block p-2 h-full w-full" // CSS classes for styling
          onMouseEnter={() => setHoveredIndex(idx)} // Handle mouse enter event
          onMouseLeave={() => setHoveredIndex(null)} // Handle mouse leave event
        >
          {/* AnimatePresence component to handle animations */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              // Animated background span
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          {/* Card component */}
          <Card>
            {/* Card title */}
            <CardTitle>{item.title}</CardTitle>
            {/* Card description */}
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};

// Define Card component
export const Card = ({
  className,
  children,
}: {
  className?: string; // Optional className prop for additional styling
  children: React.ReactNode; // Children nodes to be rendered inside the card
}) => {
  return (
    // Container for card layout
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20", // CSS classes for styling
        className
      )}
    >
      {/* Content container */}
      <div className="relative z-50">
        {/* Children nodes */}
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

// Define CardTitle component
export const CardTitle = ({
  className,
  children,
}: {
  className?: string; // Optional className prop for additional styling
  children: React.ReactNode; // Children nodes to be rendered as the title
}) => {
  return (
    // Title element
    <h4
      className={cn(
        "text-zinc-100 font-bold tracking-wide mt-4", // CSS classes for styling
        className
      )}
    >
      {children}
    </h4>
  );
};

// Define CardDescription component
export const CardDescription = ({
  className,
  children,
}: {
  className?: string; // Optional className prop for additional styling
  children: React.ReactNode; // Children nodes to be rendered as the description
}) => {
  return (
    // Description element
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", // CSS classes for styling
        className
      )}
    >
      {children}
    </p>
  );
};
