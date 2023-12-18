
"use client";

import React from 'react'
import SectionHadding from './SectionHading'
import { FaPaperPlane } from 'react-icons/fa'
import {motion} from 'framer-motion'
import { useSectionViews } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
function Contact() {
  const {ref  } = useSectionViews ("Contact" , 0.5 );

  
  // re_a8DAjF4z_Jo4W3eF9MSMgxnUCWfTzDNdC
  return (

    <motion.section
    ref={ref}
    initial={{opacity:0 }}
    whileInView={{
      opacity:1,
    }}
    transition={{duration:1}}
    viewport={{
      once:true

    }}
    id='contact' className='mb-20 sm:mb-28 w-[min(100% ,38rem)] text-center ' >
        <SectionHadding>
            Contact Me Here
        </SectionHadding>
        <p className='text-gray-700 -mt-6'>
            Please Contact me directly at <a href="mailto:ayushvish6555@gmail.com  " className='underline' >ayushvish6555@gmail.com</a>
        </p>
        <form action={async (formData) => {
        console.log(formData.get('email'));
          console.log("Running on client")
          await sendEmail(formData);

        }} 
        className='  mt-10 flex flex-col '>
            <input  name='email' required type="email" placeholder='Your Email' className='h-14 px-4 rounded-lg borderBlack' />
            <textarea name='message' required  className='h-52 my-3 rounded-lg borderBlack p-4 '  placeholder='Your Message'  />
            <button type='submit' className='group  focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 text-white/90 flex items-center justify-center  gap-2  h-[3rem] w-[8rem] bg-gray-900 rounded-full outline-none transition-all'  > Submit <span className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 '>   <  FaPaperPlane  /> </span> </button>
        </form>    
    </motion.section>
  )
}

export default Contact 