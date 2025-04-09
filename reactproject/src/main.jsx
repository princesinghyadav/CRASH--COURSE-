import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthorizedProvider } from './Authcontext/Auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <AuthorizedProvider>
 <ChakraProvider>
 <BrowserRouter>
    <App />
   </BrowserRouter>
   </ChakraProvider>
   </AuthorizedProvider>
  
 
)
