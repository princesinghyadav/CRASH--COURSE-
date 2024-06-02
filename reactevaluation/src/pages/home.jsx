import { useState,useEffect } from 'react';
import axios from 'axios';

function Home(){
const [home , setHome]=useState([])


     function Data (){
  let response =   axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
  .then((res)=>   setHome(res.data.data))
  // .then((res)=> console.log(res.data.data))

 
    }
    useEffect( function (){
    //  Data()

    },[])

    return (
  <>
  <h3> Home page</h3>
{
    home.map((ele,i)=>{
      return (
        <div key={ele.id} style={{display:"grid" , gridTemplateColumns:"repeat(3,1fr)",


       }}>
<div style={{display:"grid" ,
gridTemplateColomn:"repeat(3,1fr)",
border:"1px solid black"
}}>
            <h3> Title :- {ele.title}</h3> 
            <h3> Brand:- {ele.brand}</h3> 
            <h3>  Category :- {ele.category}</h3> 
            <h3>Price:-  {ele.price}</h3> 
 </div>
             
            </div>
    
      )
    })
}
<button onClick={Data}> info</button>
</>
    )
}

export default  Home