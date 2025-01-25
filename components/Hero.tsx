import React from "react";
import { SparklesCore } from "./ui/sparkles";

function Hero() {
  return (
    // <div className='pb-20 pt-36'>
    <div>
      <SparklesCore />
      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic web magic with next.js
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
