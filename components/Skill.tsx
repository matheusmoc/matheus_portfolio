import React from "react";
import { motion } from "framer-motion";
import  ReactLogo  from '../public/react.svg'

type Props = {
  directionLeft?: boolean;
  src?: string
};



export default function Skill({ directionLeft }: Props) {
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
        src={ReactLogo.src}
        className="rounded-full object-cover w-24 h-24 xl:w-32 
        xl:h-32 filter group-hover:grayscale-[.5] transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out right-2 bottom-full">
        <div className="flex items-center justify-center h-full">
            <p className="text-3xl font-bold text-light opacity-80 pr-12 mb-1">React</p>
        </div>
      </div>
    </div>
  );
}
