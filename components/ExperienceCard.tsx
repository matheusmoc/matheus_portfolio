import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({experience}: Props) {
  return (
    <article className="relative flex flex-col rounded-lg items-center space-y-12 flex-shrink-0 xl:w-[600px] xl:h-[550px] h-[400px] w-full md:w-[500] md:h-[500] bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-300 overflow-hidden scrollbar-thin scrollbar-track-black scrollbar-thumb-[#6e00a5]/80">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        className="flex-shrink-0 xl:h-1/6 h-1/3 object-contain rounded-md"
        src={urlFor(experience?.companyImage).url()}
      />

      <div className="px-0 md:px-10">
        <h4 className="text-1xl xl:text-3xl font-light">{experience.jobTitle}</h4>
        <p className="font-bold xl:text-2xl mt-1.5 mb-5">
          {experience.company}
        </p>

        <div className="flex my-2 items-baseline space-x-1">
          {experience.technologies.map(technology => (
          <img key={technology._id} className="h-14 w-14" src={urlFor(technology?.image).url()} />
          ))}
        </div>
        
        <p className="text-sm uppercase py-5 text-gray-300">
          {new Date(experience.startDate).toDateString()} - {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.endDate).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-4 xl:text-lg text-sm max-h-95 pr-10">
          {experience.points.map(point =>(
            <li key={point}> {point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
