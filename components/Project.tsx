
"use client";
import { projects } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { motion } from "framer-motion";
import { DropdownMenuCheckboxes } from "./DropDown";

type ProjectType = typeof projects[number];

function Project ( { title ,description ,imageUrl ,tags , liveLink , githubLinkFrontend, githubLinkBackend } : ProjectType ) {
    const ref= useRef <HTMLDivElement> (null);
    
    
    const {scrollYProgress} = useScroll({
        target : ref ,
        offset :["0 1" , "1.33 1"]
    })
    const scaleProgress=  useTransform(scrollYProgress, [0, 1], [0.7, 1])
    const opacityProgress=  useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return ( 
        <motion.div
        ref={ref}
        style={{
            scale : scaleProgress ,
            opacity : opacityProgress
        
        }}  

        className=" group mb-3 sm:mb-8  last:mb-0 relative "  
        >
            <div className="absolute block  top-0 right-0   z-10 sm:bottom-0  sm:right-0 sm:group-even:left-0 ">

                <DropdownMenuCheckboxes    liveLink={liveLink} githubLinkBackend={githubLinkBackend} githubLinkFrontend={githubLinkFrontend}   />
            </div>

            <section
            
             className=" bg-gray-100 max-w-[42rem] rounded-lg group-even:pl-3 border border-black/5 overflow-hidden sm:pr-8 relative sm:min-h-[20rem]  flex flex-col items-center sm:block   hover:bg-gray-200 transition-all ease-in-out duration-300"  >
                <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2  sm:pt-10 sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[18rem]    ">

                    <h3 className="text-2xl font-semibold ">
                        {title}
                    </h3>
                    <p className="mt-2 leading-relaxed  text-gray-700 " >  
                        {description}
                    </p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto ">
                        {tags.map((tag , idx ) => (
                            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full  "  key={idx} >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
                <Image className="block 
                    group-hover:-translate-x-3
                    group-hover:translate-y-3
                    group-hover:-rotate-2
                    group-hover:scale-120
                    group-even:group-hover:translate-x-3
                    group-even:group-hover:translate-y-3
                    group-even:group-hover:rotate-2
                    transition
                    group-even:right-[initail] group-even:-left-40 sm:absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl even:  " src={imageUrl} alt={title} quality={90} />
            </section>
        </motion.div>
    )

}
export default Project;