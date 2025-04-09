import React,{ createContext } from "react"
import { useState } from "react"

export  let Them=  createContext()

export function Theme (Props){
const [Lit, setlit]= useState("Light")

    return (
        <Them.Provider valu={{Lit}}>
       
{ Props.children}

        </Them.Provider>
    )
}