
import {react,  useState,createContext, } from "react";



const  Authorized= createContext({children});

export function AuthcontextProvider(){

    const [isLoggedIn,setIsLoggedIn]=useState(false);
let login =()=>{
    setIsLoggedIn(true)
}

let logout =()=>{
    setIsLoggedIn(false)
}
    return (
        <>
           <Authcontext.Provider value={{isLoggedIn ,login , logout}}>
            {children}
           </Authcontext.Provider>


        </>
    )
}