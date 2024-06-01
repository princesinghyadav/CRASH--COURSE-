import { useState,useEffect } from 'react'
 import axios from "axios"
 import React from 'react'
import './App.css'

 



function App() {
  const [count, setCount] = useState([])
  const[loading,setloading]=useState(true)
  const[error,seterror]=useState(false)
  const [page,setpage]=useState(1)
  const[cleanup,setcleanup]=useState(true)

  async function Fetchaxio( ){
    try {
      let res=  await  axios({
        method:"get",
        url:`https://reqres.in/api/users?page=${page}`
      })
   
      setCount(res.data.data)
 setloading(false);
      console.log(res.data.data)
  
    } catch (error) {
      console.log(error)
      seterror(true)
      setloading(false);
    }
  }

  useEffect( function (){

let stop= setInterval(()=>{
  // setcounting(counting+1)
  console.log( "s",Date.now())
},1000)

// function cleanup(){

//   clearInterval(stop)
// }

    Fetchaxio()
// return cleanup;
  },[page,counting])
  
 

//   return (
//     <>
//       <div>
//         {loading ? <h1> Loadingg... </h1> :null }
//        {error ? <h1> sometihng went wrong ..</h1>:null}
//         <h1> uses of sideeffects</h1>
// {/* <p> useing of when unmount the function stop </p> */}

//         {/* <h1> counting :- {counting}</h1> */}
//       {count.map((dat)=>{
//        return  (
//        <div key={dat.id}> <p> data:- {dat.email}</p></div>
//        )
//       })}
//       <button onClick={()=> setpage(page+1)} > next</button>
//       <h3> {page}</h3>
//       <button onClick={()=> {
//         if(page>1){
//           setpage(page-1)}
//         }
//       }
//         > prev</button>
//       </div>
     
//     </>
//   )
// i have comment out this code because i want to apply for cleanup function 
return (
  <div>  
{ cleanup? <Timer/> :null}
<button onClick={()=>setcleanup(!cleanup)}> toggle </button> 
  </div>
)
}

export default App
 