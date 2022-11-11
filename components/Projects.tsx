import React from "react";
import code from "../public/code.png";
import { motion } from "framer-motion";

type Props = {
  src?: String;
};

export default function Projects({ }: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#6e00a5]/80">
        {projects.map((project, index) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col items-center justify-center p-10 h-screen">
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
              src={code.src}
              alt=""
              className="xl:w-auto w-28 mt-12"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#6e00a5]/60">
                  Case {index + 1} of {projects.length} :
                </span>
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                eu sapien eu nisl pretium condimentum. Aenean in ante eu augue
                tempor porta at ut ex.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#6e00a5]/20 left-0 h-[450px] -skew-y-12" />
    </div>
  );
}
