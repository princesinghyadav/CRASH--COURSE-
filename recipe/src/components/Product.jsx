import { Container } from '@chakra-ui/react'
import { Card, CardHeader, CardBody ,Image,Stack,Heading,Text,Divider  } from '@chakra-ui/react'


export function Product(props){

    return (
<>
<h1> {props.idMeal} </h1>
<Container>

<Card maxW='sm'>
  <CardBody>
    <Image
      src="${props.strMealThumb}"
      alt='pic of the dishes '
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  
</Card>
</Container>

</>
       
    )
}