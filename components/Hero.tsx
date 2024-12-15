import React from "react";
import { Spotlight } from "./ui/Spotlight";

import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-screen w-full max-w-4xl overflow-hidden flex flex-col justify-center items-center px-2">
      <div>
        <Spotlight className="z-10 top-0 left-0 " fill="white" />
        {/* <Spotlight className="z-10 top-10 right-30 " fill="purple" /> */}
      </div>

      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] absolute flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex  z-20 flex-col justify-center items-center ">
        <h1 className=" text-xs md:text-base text-white relative uppercase tracking-widest max-md:mb-2">
          Dynamic Web Magic with Next.js
        </h1>

        <TextGenerateEffect
          words="Designing and Developing Seamless Websites"
          className="text-[40px] max-md:hidden text-center md:text-5xl lg:text-6xl text-white relative  "
        />
        <TextGenerateEffect
          words="Designing and Developing Websites"
          className="text-[40px] md:hidden text-center md:text-5xl lg:text-6xl text-white relative  "
        />
        <p className="text-white md:text-2xl text-center text-base tracking-wider">
          Hi I&apos;m Anish, a full-stack web developer from India
        </p>
        <a target="_blank" href="https://github.com/Anish4176">
        <MagicButton
          title="Visit Github Profile"
          icon={<FaLocationArrow />}
          position="right" 
          otherClasses=""
          handleClick={() => {}}
          />
          </a>
      </div>
    </div>
  );
};

export default Hero;
