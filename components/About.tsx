

"use client";


import SectionHadding from "./SectionHading";
import { motion } from "framer-motion"
function About ( ) {


    return (
        <motion.section
        initial={{opacity:0 ,y:100}}
        animate={{opacity: 1  , y:0}}
        transition={{delay:0.6}}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40">
            <SectionHadding >
                About me 
            </SectionHadding>
            <p className="mb-3 op" >
                I'm currently a sophomore at <   span > IIIT Gwalior.</span> I am passionate in building <span>
                    
                     interactive user interfaces
                    </span> and <span>
                        Scalable Backend Servers.
                    </span>
                    I'm also have a deep interest in <span>
                        Data Structures and Algorithms.
                    </span>
                    My core stack is <span> React </span> , <span> Next.js </span> ,<span>Node.js</span> , <span>Express</span> <span>MongoDB</span> and <span> Postgres.</span>
                    I'm also familiar with <span>TypeScript</span> and <span>Golang.</span>. 
                    Currently I'm learning <span>Devops.</span> I'm currently looking for internship.


            </p>
            <p className="op"> 
                When I'm not coding, I enjoys playing <span> BGMI </span> and       <span> 
                     Valorant.
                </span> Apart from that I love to explore new places and locations.

            </p>
        </motion.section>
    )
}

export default About;
