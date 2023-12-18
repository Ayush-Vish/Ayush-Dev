
"use client";

import React from 'react'
import SectionHadding from './SectionHading'
import { FaPaperPlane } from 'react-icons/fa'
import {motion} from 'framer-motion'
import { useSectionViews } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import { useFormStatus } from 'react-dom';
import Submitbtn from './Submitbtn';
import toast from 'react-hot-toast';
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
          const {data , error}  = await sendEmail(formData);
          if(error) {
           toast.error(error);
            return ;

          }
          toast.success("Email Sent Successfully");

        }} 
        className='  mt-10 flex flex-col '>
            <input  name='email' required type="email" placeholder='Your Email' className='h-14 px-4 rounded-lg borderBlack' />
            <textarea name='message' required  className='h-52 my-3 rounded-lg borderBlack p-4 '  placeholder='Your Message'  />
            <Submitbtn/>
        </form>    
    </motion.section>
  )
}

export default Contact 