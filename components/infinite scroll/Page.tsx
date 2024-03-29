"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
   const testimonials = [
      {
         quote: "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
         name: "Charles Dickens",
         title: "A Tale of Two Cities",
         rating: 4, // Add rating property for each testimonial
         image: "/charles_dickens.jpg", // Add image source for each testimonial
      },
      {
         quote: "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
         name: "William Shakespeare",
         title: "Hamlet",
         rating: 5, // Add rating property for each testimonial
         image: "/william_shakespeare.jpg", // Add image source for each testimonial
      },
      {
         quote: "All that we see or seem is but a dream within a dream.",
         name: "Edgar Allan Poe",
         title: "A Dream Within a Dream",
         rating: 4.2, // Add rating property for each testimonial
         image: "/edgar_allan_poe.jpg", // Add image source for each testimonial
      },
      {
         quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
         name: "Jane Austen",
         title: "Pride and Prejudice",
         rating: 4.5, // Add rating property for each testimonial
         image: "/jane_austen.jpg", // Add image source for each testimonial
      },
      {
         quote: "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
         name: "Herman Melville",
         title: "Moby-Dick",
         rating: 4.5, // Add rating property for each testimonial
         image: "", // Add image source for each testimonial
      },
   ];

   return (
      <div className="h-[40rem] rounded-md flex flex-col antialiased  bg-black bg-grid-black/[0.05] items-center justify-center relative overflow-hidden">
         <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
            className="infinite-moving-cards" // Add className property
         />
         {/* Assuming StarRating component is correctly implemented */}
      </div>
   );
}
