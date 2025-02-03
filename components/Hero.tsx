"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";
function Hero() {
  return (
    <React.Fragment>
      {/* Sparkles section */}
      <div className="relative w-full h-[20vh] sm:h-[60vh] lg:h-[70vh]">
        <SparklesCore/>
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <div>
            <TextGenerateEffect
              duration={2}
              words={`Hey, I'm Qammar Shamraiz`}
              wordClassName="text-2xl sm:text-4xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"
            />
            <TextGenerateEffect
              duration={1}
              words={`I'm a passionate Software Engineer specializing in Front-End Development, building responsive, user-friendly web applications. I focus on transforming ideas into functional, visually appealing designs that deliver seamless user experiences.`}
              wordClassName="text-sm sm:text-base font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-3"
            />
          </div>
          <Image
            src="/abc.jpg"
            width={200}
            height={200}
            className="rounded-full shadow-[0_8px_15px_rgba(255,255,255,0.5)]"
            alt="Qammar's Picture"
          />
        </div>
      </div>

      <div className="h-[50rem] w-full bg-black bg-dot-white/[0.9] relative flex items-center justify-center">
      <div className="bg-white-100 d-block d-sm-flex align-items-center z-20"><a className="btn content-download button-main button-scheme" href="resume/BenZhaoResumeSWE.pdf" download="" role="button">Download CV</a></div>
      
      </div>
    </React.Fragment>
  );
}

export default Hero;
