'use client';

// Import necessary dependencies and utilities
import * as React from "react";
import { Slot } from "@radix-ui/react-slot"; // Importing a component for flexible rendering
import { cva, type VariantProps } from "class-variance-authority"; // Importing a function for managing CSS classes based on component variants
import { cn } from "@/utils/cn"; // Importing a utility function for generating CSS class names

// Define button variants using cva function
const buttonVariants = cva(
  // Base CSS classes for button styling
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    // Variants object containing different styles for buttons
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90", // Default button style
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90", // Destructive button style
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground", // Outline button style
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80", // Secondary button style
        ghost: "hover:bg-accent hover:text-accent-foreground", // Ghost button style
        link: "text-primary underline-offset-4 hover:underline", // Link button style
      },
      size: {
        default: "h-10 px-4 py-2", // Default button size
        sm: "h-9 rounded-md px-3", // Small button size
        lg: "h-11 rounded-md px-8", // Large button size
        icon: "h-10 w-10", // Icon button size
      },
    },
    // Default variants for buttons
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Define props interface for Button component
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, // Standard HTML button attributes
    VariantProps<typeof buttonVariants> {
  // Variant props for button styling
  asChild?: boolean; // Prop for rendering button as a child component
}

// Define Button component using React.forwardRef
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"; // Determine which component to render based on 'asChild' prop
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))} // Generate CSS class names based on button props
        ref={ref} // Pass ref to the rendered component
        {...props} // Spread remaining props
      />
    );
  }
);
Button.displayName = "Button"; // Assign display name to Button component

export { Button, buttonVariants }; // Export Button component and buttonVariants object for use in other parts of the application
