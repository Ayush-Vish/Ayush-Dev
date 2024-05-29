"use client";
import Image from "next/image";
import {motion} from "framer-motion"
import img from "@/lib/img.jpeg";
import Link from "next/link";
import { FaFileDownload } from "react-icons/fa";


import {BsArrowRight, BsGithub, BsLinkedin} from "react-icons/bs";
import { useSectionViews } from "@/lib/hooks";
function Intro ( ) { 

    const {ref  } = useSectionViews ("Home" , 0.5 );
    return ( 
        <section ref={ref} id="home" className="mb-28  max-w-[50rem] text-center scroll-m-28"> 
            <div className="flex items-center justify-center "> 
                <div className="relative ">
                    <motion.div 
                    initial={{opacity:0 , scale:0 }}
                    animate={{opacity:1 , scale:1}}
                    transition={{delay:0.2}}
                    >
                        <Image src={img} width="192" height="192" alt="Ayush Image"  priority={true} quality={100} className="rounded-full bottom-[0.35rem] object-cover border-white  border-2 shadow-xl " />
                    </motion.div>
                    <motion.span initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                    transition={{delay:0.4 ,type:"spring", stiffness:260 , duration:0.7}}
                    className="absolute  bottom-3 right-1 text-4xl ">
                        👋
                    </motion.span>
                </div>

            </div> 
            <motion.h1 
            initial={{opacity:0 , y:200}}
            animate={{opacity:1 , y:0}}   
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl ">
                    Hello 
                    I'm {" "}
                <span className="font-bold "  >
                     Ayush Vishwakarma.
                </span>
                     I'm a <span className="font-bold"> Full Stack Developer. </span>
                    I am interested in 
                    {" "}
                    <span className="font-bold">
                        building softwares
                    </span> 
                    {" "} 
                     
                    


            </motion.h1>

            <motion.div
            initial={{  opacity:0 , y:100}}
            animate={{  opacity:1 , y:0}}
            transition={{delay:0.4}}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium  ">
                <Link href="#contact" className=" cursor-pointer  group bg-gray-900 text-white  px-7 py-3 mr-2 flex items-center gap-2 rounded-full
                                                    outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950  scale-105 transition " >
                    Contact Me Here <  BsArrowRight className="opacity-70 group-hover:translate-x-2 transition "  />
                </Link>
                <a className="cursor-pointer group bg-gray-100  text-gray-900  px-7 py-3 flex items-center  gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10 dark:bg-white/10  dark:text-white/60"  href="/r.pdf" download >
                    Resume  <FaFileDownload className="  opacity-70 group-hover:translate-y-1 transition "   />   
                </a>
                <a href="https://www.linkedin.com/in/ayush-vishwakarma1/" target="_blank" className="cursor-pointer  group bg-gray-100 text-gray-800  px-4 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110   scale-105 transition border-black/10  dark:bg-white/10  dark:text-white/60 ">
                    <BsLinkedin className="opacity-70 group-hover:translate-x-2 transition  "  />
                </a>
                <a href="https://github.com/Ayush-Vish/" target="_blank" className="cursor-pointer  group text-[1.35rem] bg-gray-100 text-gray-800  px-4 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  scale-105 transition  border-black/10 dark:bg-white/10  dark:text-white/60 ">
                    <BsGithub className="opacity-70 group-hover:-translate-x-2 transition "  />
                </a>
            </motion.div>
        </section>
    )
}


export default Intro;