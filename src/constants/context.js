import { createContext } from "react";

export const MainContext =  createContext({
    resumeStatus:false,
    setResumeStatus:()=>{}
})