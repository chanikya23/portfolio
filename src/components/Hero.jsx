import { HERO_CONTENT } from "../constants"
import chanikya from "../assets/projects/Chanikya.jpg";
import { motion } from "framer-motion"
import Resume from "../assets/Malla_Chanikya_Resume.pdf";

const container=(delay)=>({
   hidden:{x: -100, opacity: 0},
   visible:{
      x:0,
      opacity: 1,
      transition: {duration: 0.5, delay: delay}
   }
})

function Hero() {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
           <div className='w-full lg:w-1/2'>
              <div className='flex flex-col items-center lg:items-start'>
                 <motion.h1
                  variants={container(0)}
                  initial='hidden'
                  animate="visible"
                  className='pb-16 text-6xl font-serif tracking-tight lg:mt-16 lg:text-7xl text-gray-500'
                  >
                    Hi, I'm Chanikya Satish
                  </motion.h1>
                 <motion.span 
                    variants={container(0.5)}
                    initial='hidden'
                    animate="visible"
                 className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                    Frontend Developer
                 </motion.span>
                 <motion.p 
                 variants={container(1)}
                 initial='hidden'
                 animate="visible"
                 className='my-2 max-w-xl py-1 font-light tracking-tight'>
                   <strong> {HERO_CONTENT}</strong>
                 </motion.p>
                 <div>
                 <a href={Resume} download="Chanikya_Satish_Resume.pdf" className='w-6 h-6 md:w-8 md:h-8'>
          <button className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-slate-400 via-fuchsia-300 text-white mb-4">
            <span className='block bg-zinc-800 hover:bg-zinc-400 rounded-full px-8 py-3'> Download Resume</span>
            </button>
        </a>
        </div>

              </div>
            </div> 
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                  <motion.img 
                  initial={{x:100,opacity:0}}
                  animate={{x:0,opacity:1}}
                  transition={{duration:1,delay:1.2}}
                  className="shadow-lg shadow-gray-400 rounded-md"
                  src={chanikya} 
                  alt="Chanikya"/>               
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
