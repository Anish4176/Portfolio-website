import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { MdArrowOutward } from "react-icons/md";

const RecentProjects = () => {
  return (
    <section id="projects" className="py-10 md:py-20">
      <div className="text-center max-md:pb-2">
        <h1 className="text-[40px] leading-[3rem] lg:mb-2 text-center md:text-5xl lg:text-6xl text-white font-bold">
          Selection of{" "}
        <span className="text-purple-500 text-[40px] text-center md:text-5xl lg:text-6xl font-bold">
          Recent Projects
        </span>
        </h1>
      </div>

      <div className="flex px-4 flex-wrap items-center justify-center text-white gap-x-20 gap-y-6 mt-1">
        {projects.map((project,i) => (
          <div key={i} className="flex items-center justify-center  lg:min-h-[28.5rem] w-[80vw] sm:w-[420px] md:w-[520px]">
            <PinContainer 
            
            title={project.title}
            href={project.link}>
              <div className="flex flex-col items-start justify-start min-h-[20vh] lg:[30vh] gap-1 w-[80vw] sm:w-[420px] md:w-[520px]">
                <div className="relative w-full ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg object-fill w-full"
                  />
                </div>
                <div className="text-white line-clamp-1  font-bold text-lg mt-4">
                  {project.title}
                </div>
                <div className="text-white text-start line-clamp-2 text-sm  mt-2">
                  {project.description}
                </div>
                <div className="flex mt-4 gap-2 items-center justify-center text-purple-300 font-semibold">
                  Check live site
                  <MdArrowOutward />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
