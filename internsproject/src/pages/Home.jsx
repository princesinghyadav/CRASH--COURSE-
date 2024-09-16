import { Card   ,Box,CardHeader, CardBody, CardFooter, Image,Stack,Heading,Text ,Button, Center } from '@chakra-ui/react'
import {   useNavigate } from "react-router-dom";
import { Feedback } from './feedback';


 export function Welcome(){
    const navigate=useNavigate()

    const goToAbout = () => {
        navigate('/feedback');
      };
 
    return (
        <> 
     
      
        <Box bg='tomato' w='50%' p={8} color='white' margin="auto">
  

       <Card
  direction={{ base: 'row', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://media.licdn.com/dms/image/v2/D560BAQG5t5FUDYbRYg/company-logo_200_200/company-logo_200_200/0/1705403047379/codeinbound_logo?e=1734566400&v=beta&t=YeTtiPBVoDrAYHntgGiJf4TTkYk-ETrlW56MCJJVlp8'
    alt='Company font'
  />

  <Stack>
    <CardBody>
      <Heading size='md'> Welcome to our feedback page ⭐ ⭐</Heading>

     
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue' w={20}  onClick={goToAbout} >
        Start 
      </Button>
    </CardFooter>
  </Stack>
</Card>
</Box>
 
        </>
    )
}