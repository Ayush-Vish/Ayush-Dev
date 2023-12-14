import { type SectionName, useActiveSectionContext } from '@/context/active-section-context';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

export type useSectionViewsPropsType = {
    sectionName: SectionName;
    threshold: number ;
}


export function useSectionViews(sectionName : SectionName ,threshold= 0.75 )  {
    const { ref , inView}  =  useInView({
        threshold :  threshold,
    }) ; 
    const {setActiveSession , timeOfLastClick } = useActiveSectionContext()
    useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSession(sectionName);
    
        }

    } , [inView , setActiveSession , timeOfLastClick ,sectionName])
    return {
        ref
    }
}

