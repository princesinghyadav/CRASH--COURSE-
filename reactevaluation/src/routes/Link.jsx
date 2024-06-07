
import  {Link } from "react-router-dom";

export function Linkk (){

    return(
        <div  className="navbar"> 
        <Link to="/">Home</Link>
      <Link to="/detail"> Detail</Link>
      <Link to="/login">Login </Link>
      
        </div>
    )
}