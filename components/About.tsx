import React from 'react'
import { motion } from "framer-motion";

type Props = {}

export default function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
        <motion.img 
        initial={{
            x: -200,
        }}

        transition={{
            duration: 1.2,
            opacity: 0,
        }}
        
        whileInView={{
            opacity: 1,
            x:0,
        }}

        // viewport={{
        //     once: true
        // }}
        src="https://scontent.fmoc7-1.fna.fbcdn.net/v/t1.6435-9/68991267_859111534476046_8888877033199763456_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE8Rmh-8jY_mczwBZPedfOeXcm_SyDGXnddyb9LIMZed9ZMDFAd5OAZpIv20YfFmX9LezLD7yt13nrdh6UZSrz-&_nc_ohc=4v26Cvi67XEAX-HZppn&_nc_ht=scontent.fmoc7-1.fna&oh=00_AfBaxLEcbd5C98UpG_gSRfw0rFR2IjdXcC0EtZ2AZ_9AfA&oe=638D4F32"
        className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#6e00a5]/60'>litte</span> about me</h4>
        </div>
    </div>
  )
}