"use client";



import Image from "next/image";
import {motion} from "framer-motion"
import img from "@/lib/img.jpeg";

function Intro ( ) { 


    return ( 
        <section>
            <div className="flex items-center justify-center "> 
                <div className="relative ">
                    <motion.div 
                    initial={{opacity:0 , scale:0 }}
                    animate={{opacity:1 , scale:1}}
                    transition={{delay:0.5}}
                    >
                        <Image src={img} width="192" height="192" alt="Ayush Image"  priority={true} quality={100} className="rounded-full bottom-[0.35rem] object-cover border-white  border-2 shadow-xl " />
                    </motion.div>
                    <motion.span initial={{opacity:0, scale:0}}
                    animate={{opacity:1, scale:1}}
                    transition={{delay:0.5 ,type:"spring", stiffness:260}}
                    className="absolute  bottom-3 right-1 text-4xl ">
                        👋
                    </motion.span>
                </div>

            </div>
        </section>
    )
}


export default Intro;