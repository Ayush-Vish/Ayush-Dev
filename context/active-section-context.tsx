"use client";

import React, { useContext, useState } from "react";

import { links } from "@/lib/data";

export type SectionName =  typeof links[number]["name"]; 



type ActiveSectionContextProviderProps = { 
    children : React.ReactNode;
}

export type ActiveSectionContextType = {
    activeSession : SectionName;
    setActiveSession : React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick : number;
    setTimeOfLastClick : React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = React.createContext <ActiveSectionContextType | null >(null) ;



// making a custom hook for the dealing with the null values.

export function    useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
    if(context == null ) {
        throw new   Error("useActiveSectionContext must be used within a ActiveSectionContextProvider");
    }
    return context;
}



function ActiveSectionContextProvider( {children} : 
    ActiveSectionContextProviderProps
    ) {
        const [activeSession , setActiveSession] = useState <SectionName>("Home")
        // MAking a functionality  to stop the switching of tabs when on click 
        // for one sec 
        const [timeOfLastClick , setTimeOfLastClick] = useState <number>(0);





    return  (<ActiveSectionContext.Provider  value={{
        activeSession,
        setActiveSession, 
        timeOfLastClick,
        setTimeOfLastClick
    
    }}  >
        {children}  
    </ActiveSectionContext.Provider>)
}
export default ActiveSectionContextProvider;

