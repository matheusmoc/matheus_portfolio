import React from 'react'
import { motion } from "framer-motion";
import Skill from './Skill';

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    transition={{ duration: 2.0}}
    whileInView={{opacity: 1}}

    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10
    min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className='absolute top-36 uppercase tracking-[5px] text-gray-400 text-sm'>Hover over a skill</h3>
      <div className='-mb-52 grid grid-cols-3 md:grid-cols-4 xl:pt-36 gap-8 mt-5'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  )
}