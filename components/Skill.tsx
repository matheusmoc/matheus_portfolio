import React from "react";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  skill: SkillType
};



export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}

        whileHover={{
            scale: 1.2,
            transition: { duration: 0.1},
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="border border-gray-600 rounded-full w-12 h-12 xl:w-24 
        xl:h-24 filter group-hover:grayscale-[.5] transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out right-2 bottom-full">
        <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-light opacity-80 pr-12 mb-1">{skill.progress}</p>
        </div>
      </div>
    </div>
  );
}
