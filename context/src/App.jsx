import   { useState } from 'react'
import { createContext } from 'react'
 import { Navbar } from '../compnent/nav'
 import { Main } from '../compnent/main'
 
import './App.css'
import { Footer } from '../compnent/footer'
import React from "react";
import { Theme } from './context/theme'

 export   const Auth  = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState( false);
  let change=()=>   setIsLoggedIn(!isLoggedIn)
  const obj={
    isLoggedIn,
    change,
  }
  return (
    <>
     <Auth.Provider value={ obj }>
      <Theme>
      App 
       <Navbar/>
<Main/>
<Footer/>
      </Theme>

  
    </Auth.Provider>
 

      
    </>
  )
}

export default App
