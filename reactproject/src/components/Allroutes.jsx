import { Routes,Route } from "react-router-dom"
import { Bath_body } from "../pages.jsx/Bath&Body"
import { Blog } from "../pages.jsx/Blog"
import { Brands } from "../pages.jsx/Brands"
import { Discover } from "../pages.jsx/discover"
import { Fragrance } from "../pages.jsx/Fragrance"
import { Haircare } from "../pages.jsx/Haircare"
import { Home } from "../pages.jsx/home"
import { Makeup } from "../pages.jsx/Makeup"
import { Sale } from "../pages.jsx/Sale"
import { Skincare } from "../pages.jsx/Skincare"
import { Sunscreen } from "../pages.jsx/Sunscreen"
import { Tools } from "../pages.jsx/Tools"




export function Routess(){

    return (
        <>
         
        <Routes> 
     <Route path="/" element={<Home/>}/>
     <Route path="discover-dermstore.list"  element={<Discover/>}/> 
     <Route path="brands.list"  element={<Brands/>}/> 
     <Route path="offers/sale/view-all.list"  element={<Sale/>}/> 
     <Route path="skin-care.list"  element={<Skincare/>}/> 
     <Route path="sun-care.list"  element={<Sunscreen/>}/> 
     <Route path="cosmetics.list"  element={<Makeup/>}/> 
     <Route path="hair-care.list"  element={<Haircare/>}/> 
     <Route path="tools.list"  element={<Tools/>}/> 
     <Route path="body.list"  element={<Bath_body/>}/> 
     <Route path="fragrance.list"  element={<Fragrance/>}/> 
     <Route path="blog/"  element={<Blog/>}/> 

        </Routes>
        </>
       

    )
}