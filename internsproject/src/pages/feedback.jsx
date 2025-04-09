import { useState } from 'react';
import { Rating } from '../component/rating';
import { Button ,Stack,Box  } from '@chakra-ui/react'
 import { PromiseBasedToastExample } from '../component/toast';
 
export function Feedback(){

  


      const questions=[
        {
            id:1,
            question:"How satisfied are you with our products? ",
            Rating:[1,2,3,4,5]
        },
        {
            id:2,
            question:"How fair are the prices compared to similar retailsers? ",
            Rating:[1,2,3,4,5]
        }, {
            id:3,
            question:"How satisfied are you with the value of for money of your purchase?",
            Rating:[1,2,3,4,5]
        }, {
            id:4,
            question:"On a scale of 1-10 how would you recommend us to your friends and family?",
            Rating:[1,2,3,4,5,6,7,8,9,10]
        },
        {
          id:5,
          question:"What could we do to improve our service? ",
          
          
        }
      ]
      let lengths= questions.length;
  
     const [qno,setqno]=useState(0);// to track the question no. 
      
      const next=()=>{
        setqno(qno+1);
        if(qno==lengths-1){
            setqno(lengths-1);
        }
        
      }
      const prev=()=>{
        if(qno>0)
        setqno(qno-1);
       
      }
         
     
       
    return (
<>
   

    <Box maxW='lg' margin="auto" marginTop={200} borderWidth='2px' borderRadius='38px' bgColor="#7C8BB0" overflow='hidden'>
     
    
        <h2 style={{textAlign:"center"}}> Customer Survey</h2>
        <Box
         paddingLeft={390}
         paddingTop={30} 
          
        >
        {questions[qno].id}/{lengths}
        </Box>
      <Box p='6'   >
    

        <Box
         paddingTop={21}
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
        {questions[qno].id}.  {questions[qno].question}
        </Box>
       
      <Rating value={ questions[qno].Rating}   />

        
      </Box>
    
      <>
        <Stack spacing={18} direction='row' align='center' justifyContent="space-evenly">
        
        <Button colorScheme='blue' size='lg' onClick={prev} >
          Prev
        </Button>
        {qno == lengths-1 ? <PromiseBasedToastExample/>
         
        : <Button colorScheme='teal' size='lg' onClick={next} >
          Next 
        </Button>}
        </Stack>
        </>
   

    </Box>
   
</>
      
   
    )
}