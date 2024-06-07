import { useState } from "react"
import React from "react"
import axios from "axios";


function Login (){
const [info,setInfo]= useState({
    email:"",
    password:""
})
function Handle(e){
    const{name, value}= e.target;
 let  newform={
    ...info,
    [name]:value
 }
 setInfo(newform)
// console.log(newform)
}
// console.log(info)
const {email, password}=info;
function Submit (){

    axios({
        method:"post",
        url:"https://reqres.in/api/login",
        data:info,
    }).then((res)=> console.log(res?.data?.token  ))

    // console.log("post this to server",info)
}
    return (
        <>
          <h3> Login  page</h3>
     <label> Email </label>
     <input placeholder="Enter email" name="email" type="email" value={email}  onChange={ Handle } />
     <br/>
     <br/>
     <label>Password </label>
     <input  placeholder="Enter password" name="password" value={password}  onChange={ Handle }  />
<br/>
<br/>
 <input value="Login" type="submit"onClick={Submit}/>
        </>
      

    )
}

export default  Login 