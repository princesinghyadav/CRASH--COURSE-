import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button, ButtonGroup , CardHeader, CardBody, CardFooter,Heading,Stack,Box,Text,StackDivider } from '@chakra-ui/react'


function Home(){
const [home , setHome]=useState([])


     function Data (){
  let response =   axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`)
  .then((res)=>   setHome(res.data.data))
  // .then((res)=> console.log(res.data.data))

 
    }
    useEffect( function (){
     Data()

    },[])

    return (
  <>
   
{
    home.map((ele,i)=>{
      return (
        
<Card>
  {/* <CardHeader>
    <Heading size='md'>Client Report</Heading>
  </CardHeader> */}

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Title:- 
        </Heading>
        <Text pt='2' fontSize='sm'>
         {ele.title}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Brands:- 
        </Heading>
        <Text pt='2' fontSize='sm'>
         {ele.brand}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Category:- 
        </Heading>
        <Text pt='2' fontSize='sm'>
          {ele.category}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Price:- 
        </Heading>
        <Text pt='2' fontSize='sm'>
          {ele.price}
          
        </Text>
      </Box>
      <Link to={`/user/${ele.id}`}>  <Button colorScheme='blue' size='sm' w="10%">Details </Button></Link>
    </Stack>
  </CardBody>
</Card>

//  same thing but without use of chakra  .
//         <div key={ele.id} id='home-card' >
// <div  id='homecard'>
//             <h3> Title :- {ele.title}</h3> 
//             <h3> Brand:- {ele.brand}</h3> 
//             <h3>  Category :- {ele.category}</h3> 
//             <h3>Price:-  {ele.price}</h3> 
//  </div>
            //  <Link to={`/user/${ele.id}`}>get all details in one page </Link>
//             </div>
    
      )
    })
}
{/* <button onClick={Data}> info</button> */}
</>
    )
}

export default  Home