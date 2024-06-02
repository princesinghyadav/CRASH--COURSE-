import { createContext, useState } from "react";


export const Authcontext= createContext()

 export function AuthProvider ({children}){
const [isLoggedIn,setIsLoggedIn]= useState(true)

const login=()=>{
    setIsLoggedIn(true)
}
const logout =()=>{
    setIsLoggedIn(false);
}

    return (
<Authcontext.Provider  value={{isLoggedIn,login,logout}}>
    {children}
</Authcontext.Provider>

    )
}