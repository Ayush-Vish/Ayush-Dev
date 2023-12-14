"use client";
import {motion} from "framer-motion";


import React from 'react'
import SectionHadding from './SectionHading'
import { skills } from '@/lib/data'
import { useSectionViews } from '@/lib/hooks'

const fadeInAnimationVarient= {
    initial :{
        opacity:0,
        y:100
    
    }, 
    animate:( idx : number)=> ( {
        opacity:1,
        y:0,  
        transition :{
            delay:0.05 * idx 
        }  
    
    })
}

function Skills() {

    const {ref} = useSectionViews("Skills" )
  return (
    <section id='skills' ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40'>
        <SectionHadding>
            My Skills 
        </SectionHadding>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-800 '>
            {skills.map((skill , idx )=>(
                <motion.li
                variants={fadeInAnimationVarient}
                initial="initial"
                whileInView="animate"
                custom={idx}
                className='bg-white border border-black/[0.1] rounded-xl px-5 py-3 '
                key={idx}  > {skill}
                </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default Skills