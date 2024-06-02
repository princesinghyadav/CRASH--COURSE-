import Home from "../pages/home"
import Productdetail from "../pages/productdetails"
import Login from "../pages/login"
import { Routes, Route,Link } from "react-router-dom";




export function Navbar(){

    return (
        <>
            <Link to="/">Home</Link>
      <Link to="/detail"> Detail</Link>
      <Link to="/login">Login </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Productdetail />} />
        <Route path="/login" element={<Login />} />
        
      </Routes>
             
        </>
   
    )
}