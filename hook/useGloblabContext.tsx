"use client"

import { useContext } from "react"
import { Context } from "@/context"


export const useGlobalContext = () =>{

    const context = useContext(Context)
    if(context === null){
        throw new Error("useGlobalContext must be used within a GlobalContext")
    }
    return context
}

export default useGlobalContext;
