import { createContext, useState } from "react";
// import { useNavigate } from "react-router-dom";

export const Authcontext= createContext()

 export function AuthProvider ({children}){
const [isLoggedIn,setIsLoggedIn]= useState(false)
const [details,setDetails]=useState({
    token:null,
    isLoggedIn:false,
})
// const navigate = useNavigate();
const login=(token)=>{
     
    setIsLoggedIn(true)
    setDetails({
        isLoggedIn:true,
        token:token,
    })
//   return  navigate("/home")
}
const logout =()=>{
    setIsLoggedIn(false);
     setDetails({
        isLoggedIn:false,
        token:null,
     })
}

    return (
<Authcontext.Provider  value={{isLoggedIn,login,logout}}>
    {children}
</Authcontext.Provider>

    )
}