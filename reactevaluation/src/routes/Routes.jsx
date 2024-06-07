import Home from "../pages/home"
import Productdetail from "../pages/productdetails"
import Login from "../pages/login"
import { Routes, Route } from "react-router-dom";
import { Detailspage } from "../component/details";



export function Routess  (){

    return(
        <div> 
         
         <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/detail"  element={<Productdetail />} />
        <Route path="/login"  element={<Login />} />
        <Route path="/user/:iid" element={ <Detailspage/> }/>

        
      </Routes>
        </div>
    )
}