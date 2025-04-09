import { useContext } from "react"
import { Authority } from "../Authcontext/Auth"
import React from "react"






export function Brands (){
    const {isLoggedIn ,login ,logout}=useContext(Authority)
    return (
        <>
           <h1>{isLoggedIn.toString()}:- Brands Page </h1>
          <button onClick={login}> Login </button>
          <br/>
          
          <button onClick={logout}>  Logout</button>
        </>
     ) 
}