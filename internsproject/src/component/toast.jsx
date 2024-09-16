import { useToast ,Button } from '@chakra-ui/react'
 import { useNavigate } from 'react-router-dom'

 export function PromiseBasedToastExample() {
    const toast = useToast()
    const navigate=useNavigate()
    return (
        
<>  
        <Button  bg="red"
        onClick={() => {
          
          // Create an example promise that resolves in 5s
          const examplePromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(200), 5000)
          })
  
          // Will display the loading toast until the promise is either resolved
          // or rejected.
          toast.promise(examplePromise, {
            success: { title: 'Review submitted succesfully', description: 'Thanku for your valuable time' },
            error: { title: 'Promise rejected', description: 'Something wrong' },
            loading: { title: 'Your feedback important for us.', description: 'Please wait' },
          });
          const intervalid= setTimeout(()=>{
            navigate("/feedback/welcome")
          },5000)
       
         
        }}
        
      >
        Submit
      </Button>
      
</>
    )
  }  