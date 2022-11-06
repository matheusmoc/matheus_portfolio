import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {
  image: string ;
};

export default function WorkExperience({image}: Props) {
  return (
    <motion.div 
    initial={{
      opacity: 0
    }}
    transition={{ duration: 2}}
    
    whileInView={{
      opacity: 1
    }}
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>

      <div className="-mb-20 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperienceCard src={image}/>
        <ExperienceCard src={image}/>
        <ExperienceCard src={image}/>
        <ExperienceCard src={image}/>
      </div>
    </motion.div>
  );
}
