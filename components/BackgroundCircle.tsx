import { motion } from "framer-motion";

type Props = {}

export default function BackgroundCircle({}: Props) {
  return (
    <motion.div
    initial={{
        opacity: 0
    }}
    
    whileInView={{
        scale: [1,2,2,3,1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        
    }}

    transition={{
        duration: 2.5
    }}
    className='relative flex justify-center items-center'>
        <div className='absolute border border-[#363636] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-[#6e00a5] rounded-full h-[500px] w-[500px] mt-52'/>
        <div className='absolute border border-[purple] rounded-full h-[650px] w-[650px] mt-52 animate-pulse'/>
    </motion.div>
  )
}