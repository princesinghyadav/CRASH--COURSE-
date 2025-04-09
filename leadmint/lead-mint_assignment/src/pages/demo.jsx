import { Input, Stack } from "@chakra-ui/react"

 export default function  Demo (){
    return (
        <Stack gap="4">
          <Input placeholder="Subtle" variant="subtle" />
          <Input placeholder="Outline" variant="outline" />
          <Input placeholder="Flushed" variant="flushed" />
        </Stack>
      )
 }

