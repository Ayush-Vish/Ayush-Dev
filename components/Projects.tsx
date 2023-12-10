import { projects } from "@/lib/data";
import SectionHadding from "./SectionHading";
import React from "react";
import { type } from "os";
import Image from "next/image";

function Projects ( )  {

    

    return ( 
        <section>
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

// 1st way to define type  

// type ProjectType = {
//     title: String, 
//     description: String,
//     tags: String[],
//     image: String, 
//     liveLink: String, 
//     githubLinkFrontend: String,
//     githubLinkBackend: String
// }

// 2nd way to define type
type ProjectType = typeof projects[number];

function Project ( { title ,description ,imageUrl ,tags , liveLink , githubLinkFrontend, githubLinkBackend } : ProjectType ) {
    return ( 
        <section className="group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8  last:mb-0 flex flex-col items-center sm:block  even:pl-8 hover:bg-gray-200 transition-all ease-in-out duration-300"  >
            <div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2  sm:pt-10 sm:max-w-[60%] flex flex-col h-full group-even:ml-[18rem]    ">

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
            <Image className="block group-even:right-[initail] group-even:-left-40                        sm:absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl even:  " src={imageUrl} alt={title} quality={90} />
        </section>
    )

}


export default Projects;