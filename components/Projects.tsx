import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  // const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#6e00a5]/80">
        {projects?.map((project, index) => (
          <div 
          key={project._id}
          className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center p-10 h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1.3,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              src={urlFor(project?.image).url()}
              alt=""
              className="xl:w-1/3 md:w-1/2 my-12 shadow-2xl rounded-lg"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-2xl font-semibold text-center">
                <span className="underline decoration-[#6e00a5]/90">
                  Case {index + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-4 justify-center">
              {project?.technologies.map((technology) => (
                <img 
                  className="h-14 w-14"
                  key={technology._id}
                  src={urlFor(technology.image).url()}
                  alt=""
                />
              ))}
              </div>


              <p className="text-2xl text-center md:text-left">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[18%] bg-[#6e00a5]/20 left-0 h-[600px] -skew-y-12" />
    </div>
  );
}
