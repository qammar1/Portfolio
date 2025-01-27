"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";

function Hero() {
  return (
    <div>
      {/* Sparkles section */}
      <div className="relative w-full">
        <SparklesCore />

        {/* Content on top of Sparkles */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
        <h2 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Dynamic web magic with Next.js
          </h2>
        </div>
      </div>

      {/* Grid section */}
    


    <div className="h-[50rem] w-full bg-black-200 bg-dot-white/[0.9] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Backgrounds
      </p>
    </div>
  

    </div>
  );
}

export default Hero;
