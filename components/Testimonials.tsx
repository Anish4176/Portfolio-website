"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

const Testimonials=()=> {
  return (
    <section id="testimonials" className="py-10 md:py-20">
    <div className="text-center">
      <h1 className="text-[40px] leading-[3rem] lg:mb-2 text-center md:text-5xl lg:text-6xl text-white font-bold">
        Kind words from  <br/>
      <span className="text-purple-500 text-[40px] text-center md:text-5xl lg:text-6xl font-bold">
        satisfied clients
      </span>
      </h1>
    </div>
    <div className="min-h-[23rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </section>
  );
}
export default Testimonials;

