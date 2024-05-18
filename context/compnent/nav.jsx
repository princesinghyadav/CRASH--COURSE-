
import React,  { useContext } from "react"
import { Them } from "../src/context/theme"


export   function Navbar(){
const {Lit} =useContext(Them)


    return (
        <div> 
<h3> navbar:-  {Lit} </h3>

        </div>
    )
}