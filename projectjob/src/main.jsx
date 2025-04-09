 
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthcontextProvider from `./context`
import { ChakraProvider } from '@chakra-ui/react'


createRoot(document.getElementById('root')).render(

   <ChakraProvider>
<App />
   </ChakraProvider>
    
   
)
