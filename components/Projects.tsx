"use client";

import { projects } from "@/lib/data";
import SectionHadding from "./SectionHading";
import React from "react";
import Project from "./Project";
import { useSectionViews } from "@/lib/hooks";

function Projects ( )  {
  
    const {ref  } = useSectionViews ("Projects" , 0.5 );


    

    return ( 
        <section id="projects" className="scroll-m-28 mb-28"
        ref={ref}
        >
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