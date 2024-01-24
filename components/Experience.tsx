"use client";
import React from "react";
import SectionHadding from "./SectionHading";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experienceData } from "@/lib/data";
import { Bs0Circle } from "react-icons/bs";

function Experience() {
  
  return (
    <>
      <section id="experience" className="max-w-[30rem] ">
        <SectionHadding>My Experience</SectionHadding>

        <VerticalTimeline 
         
         >
          {experienceData.map((element, i) => (
            <VerticalTimelineElement
              key={i}
              
              date={element.data}
              iconStyle={{
                backgroundColor: "slateblue",
                alignContent: "center",
                textAlign: "center",
              }}
              contentStyle={{
                backgroundColor: "#22333b",
              }}
              contentArrowStyle={{
                borderRightColor: "#22333b",
              }}
              icon={<Bs0Circle />}
            >
              <h3 className="heading">{element.title}</h3>
              <h5 className="subHeading">{element.location}</h5>
              <p className="description">{element.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </section>
    </>
  );
}

export default Experience;
