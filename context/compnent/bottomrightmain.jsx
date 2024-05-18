import { useContext } from "react"
import { Auth  } from "../src/App"




export function Bottomrightmain(){
    const {isLoggedIn ,change}= useContext(Auth)
 
    return (
        <div> 
<h3> bottomrightmain :- {isLoggedIn.toString() }</h3>

 <button onClick={change}> change</button>

        </div>
    )
}