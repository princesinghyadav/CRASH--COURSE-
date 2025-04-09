 
import React,{ createContext } from "react"
import { useState } from "react"

 


 export const Authority=  createContext()

 export function AuthorizedProvider({children }){
 
const [isLoggedIn,setIsLoggedIn]= useState(false)

const login=()=> setIsLoggedIn(true)
const logout=()=> setIsLoggedIn(false)


    return (
        <Authority.Provider  value={{isLoggedIn,login,logout}}>
 {children}
        </Authority.Provider>

    )
}