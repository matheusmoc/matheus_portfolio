import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo
};

export default function About({pageInfo}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    transition={{ duration: 3.0}}
    whileInView={{opacity: 1}}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-[1336px] px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 xl:text-2xl text-1xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -150,
          opacity: 0,
        }}
        transition={{
          duration: 1.3,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        // viewport={{
        //     once: true
        // }}
        src={urlFor(pageInfo.profilePic).url()}
        className="mt-24 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-42 md:h-95 xl:w-[500px] xl:h-[500px]"
      />

      <div className="space-y-5 px-0 md:px-10">
        <h4 className="xl:text-4xl text-2xl font-semibold">
          Here is a <span className="underline decoration-[#6e00a5]/50">little</span> about me.
        </h4>

        <p className="xl:text-lg text-sm">
          {pageInfo.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
