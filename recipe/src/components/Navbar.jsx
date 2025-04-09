
import { Home } from "../pages/Home"
import { Link } from "react-router-dom"
import { Flex, Spacer,Box } from '@chakra-ui/react'

export function Navbar(){

    return (
        <>
       
       
        
        <h1>  Navbar Page</h1>
        <Flex>
  <Box p='3' bg='green.400'>
  <Link to="/paneer-item">Paneer</Link>
  </Box>
  <Spacer />
  <Box p='3' bg='red.400'>
  <Link to="/chicken-item">Chicken</Link>
  </Box>
</Flex>
<Home/>
        </>
        
    )
}