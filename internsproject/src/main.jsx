
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import React from 'react'
import {  BrowserRouter,RouterProvider,} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

 

 
createRoot(document.getElementById('root')).render(  <ChakraProvider>
  < BrowserRouter>
  <App />
  </ BrowserRouter>


</ChakraProvider>
)
