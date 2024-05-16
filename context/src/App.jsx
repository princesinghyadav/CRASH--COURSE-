import   { useState } from 'react'
 import { Navbar } from '../compnent/nav'
 import { Main } from '../compnent/main'
 
import './App.css'
import { Footer } from '../compnent/footer'
import React from "react";

 export   const Auth  = React.createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
     <Auth.Provider value={{ isLoggedIn }}>

    App 
       <Navbar/>
<Main/>
<Footer/>
    </Auth.Provider>
 
      
    </>
  )
}

export default App
