import { CONTACT } from '../constants'
import { motion } from "framer-motion"
import  Resume from "../assets/projects/Chanikya_Satish_resume.pdf";

function Contacts() {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1 
         whileInView={{opacity:1, y:0}}
         initial={{opacity:0, y:-100}}
         transition={{duration:0.5}}
        className='my-10 text-center text-4xl'>Get in Touch</motion.h1>
        <div className='text-center tracking-tighter'>
            <motion.p  
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x:-100}}
            transition={{duration:1}}>
                {CONTACT.address}
            </motion.p>
            <motion.p 
            whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:1}}>
          <a href='tell: 8367339798' className='hover:underline'>{CONTACT.phoneNo}</a>
            </motion.p>
            <motion.p 
            whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1}}>
            <a href='mailto:mallachanikya22@gmail.com' className='hover:underline'>{CONTACT.email}</a>
            </motion.p>
            <motion.p 
            whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:1}}>
            <a href={Resume} download="Chanikya_Satish_Resume.pdf" className='w-6 h-6 md:w-8 md:h-8'>
              <button className="px-1 inline-block py-1 w-full sm:w-fit rounded-md mr-4 bg-gradient-to-br from-slate-400 via-fuchsia-300 text-black mt-3">
                <span className='block bg-zinc-1000 hover:bg-zinc-600 rounded-md px-8 py-3'> Download Resume</span>
              </button>
            </a>
            </motion.p>
        </div>
    </div>
  )
}

export default Contacts
