import { useState,useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"


export function  Detailspage(){

    
        const [detail , setDetail]=useState([])
        const {iid} =useParams()
        
          async    function Data (){
            try {
                let response = await   axios.get(`https://reqres.in/api/users/${iid}`)
                setDetail(response?.data?.data)
                console.log(response?.data?.data)

            } catch (error) {
                console.log(error)
            }

            }
            useEffect( function (){
             Data( )
        
            },[iid])
        
            return (
          <>
           <h3>  this is details page of home</h3>
           <h2> {detail.id}</h2>
        <h1> {JSON.stringify(detail)}</h1>
        </>
            )
        }
        
        