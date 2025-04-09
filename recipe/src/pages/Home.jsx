import axios from 'axios';
import { Input } from '@chakra-ui/react'
import React from 'react'
import { useState,useEffect } from 'react'
import { Product } from '../components/Product';


 export function Home (){
const [meal,setMeal]=useState("")
const [meal2,setMeal2]=useState([])
// 
   async function FetchandUpdate(query){
    try {
        let res= await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
        console.log(res?.data)
        setMeal2(res?.data?.meals)
    } catch (error) {
        console.log(error)
    }
   
   }
   useEffect( ()=>{
    FetchandUpdate(meal)
   },[meal])
   function Handle(e){
    setMeal(e.target.value);

   }

return (
  < >
 
 <Input placeholder=' Enter the recipe ' size='md' w="40%" value={meal} onInput={(e)=>Handle(e)}/>
    {
       meal2.map((item)=>{
        return (
           <Product key={item.id}  {...item}/>
           
        )
      })
    }
  </>

)
}

 