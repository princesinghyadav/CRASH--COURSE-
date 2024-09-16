import { Stack, Image,Heading ,VStack,Container,Box} from "@chakra-ui/react"



export function WelcomePage (){

 

    return (
        <>
  <Box boxShadow='outline' p='6' rounded='md' bg='white' width="60%" margin="auto" marginTop="25px">
  <Heading color={blur} textAlign="center"> Welcome ! </Heading>
 
 <Stack direction='row' width="88%"  margin="auto" marginTop="100px">
 <Image
   boxSize='200px'
   objectFit='cover'
   src='https://th.bing.com/th/id/OIP.Ai8QRolF8P_k8N8s9Yo0dwHaFN?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
   alt='Dan Abramov'
 />
 <Image
   boxSize='350px'
   objectFit='cover'
   src='https://th.bing.com/th/id/OIP.Ai8QRolF8P_k8N8s9Yo0dwHaFN?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
   alt='Dan Abramov'
 />
 <Image boxSize='200px' src='https://th.bing.com/th/id/OIP.Ai8QRolF8P_k8N8s9Yo0dwHaFN?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='Dan Abramov' />
</Stack>
  </Box>
   
  
 
           

        </>
     

    )
}