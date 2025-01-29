"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from 'next/image'
function Hero() {
  return (
    <React.Fragment>
      {/* Sparkles section */}
      <div className="relative w-full">
        <SparklesCore />

        {/* Content on top of Sparkles */}
        <div className="flex flex-row absolute inset-0 flex items-center justify-center">
          <div className="">
          <TextGenerateEffect
            duration={2}
            words={`Hey,I'm Qammar Shamraiz`}
            
          />
          <TextGenerateEffect
            duration={2}
            words={"Hey, I'm Qammar Shamraiz"}
          />
          </div>
          
           
           <Image
      src="/abc.jpg"
      width={200}
      height={200}
      alt="Picture of the author"
    />
        </div>
      </div>

      {/* Grid section */}

      <div className="h-[50rem] w-full bg-black-200 bg-dot-white/[0.9] relative flex items-center justify-center"></div>
    </React.Fragment>
  );
}

export default Hero;
