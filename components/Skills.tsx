import React from "react";
import { Button } from "./ui/MovingBorder";
import { skills } from "@/data";
import Image from "next/image";

const Skills = () => {
  return (
    <section id="skills" className="pb-10 md:pb-20">
      <div className="text-center flex items-center justify-center gap-4 pb-4">
        <h1 className="text-[40px] lg:mb-2 text-center md:text-5xl lg:text-6xl text-white font-bold">
          My
        </h1>
        <span className="text-purple-500 text-[40px] text-center md:text-5xl lg:text-6xl font-bold">
          Skills
        </span>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-4 md:mt-8">
        {skills.map((skill,i) => (
          <Button
          
          key={i} duration={Math.floor(Math.random() * 10000) + 10000}>
            <div className="md:flex  py-6 md:justify-center md:items-center gap-4 space-y-5
            ">
              <div>
                <Image
                  src={skill.icon}
                  alt={skill.title}
                  width={80}
                  height={120}
                  className="md:w-32"
                />
              </div>
              <div className=" text-start space-y-1 md:space-y-2">
                <h1 className="text-lg md:text-2xl font-semibold tracking-wide ">
                  {skill.title}
                </h1>
                <p className="text-base">{skill.description}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Skills;
