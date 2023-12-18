"use client"; 
import React from 'react'
import SectionHadding from './SectionHading'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experienceData } from '@/lib/data';
import { Bs0Circle } from 'react-icons/bs';

function Experience() {


  const data = [
    {
      title: 'My First Event',
      content: 'This is my first event.',
    },
    {
      title: 'My Second Event',
      content: 'This is my second event.',
    }
  ];
  return (
    <div id='experience' className='max-w-[30rem] '>
        <SectionHadding>
            My Experience
        </SectionHadding>
        
        <VerticalTimeline>
        {experienceData.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.title}
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
              icon={<Bs0Circle/>}
            >
              <h3 className="heading">{element.title}</h3>
              <h5 className="subHeading">{element.location}</h5>
              <p className="description">{element.description}</p>

              
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>

    </div>
  )
}

export default Experience