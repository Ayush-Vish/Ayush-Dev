import { projects } from "@/lib/data";
import SectionHadding from "./SectionHading";
import React, { useRef } from "react";
import Project from "./Project";

function Projects ( )  {

    

    return ( 
        <section id="projects" className="scroll-m-28" >
            <SectionHadding>
                My Projects
            </SectionHadding>
            <div  >
                {
                    projects?.map((project , index) =>  (
                        <React.Fragment key={index} >
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }

            </div>
        </section>
    )


}




export default Projects;