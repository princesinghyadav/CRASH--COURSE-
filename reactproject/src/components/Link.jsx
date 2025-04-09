 
import {Link as ReactRouterLink} from "react-router-dom";
import {Link as ChakraLink , Flex} from "@chakra-ui/react"
import { useContext } from "react";
 import { Authority } from "../Authcontext/Auth";
import React from "react";
 



export function Navcomponents (){
    const valu =  useContext(Authority)
const {isLoggedIn}=valu 
    const Links  =[
        {
            to:"./",
            label:"Home"
        },
        {
            to:"discover-dermstore.list",
            label:"Discover Dermstore"
        },
        {
            to:"brands.list",
            label:"Brands"
        },
        {
            to:"offers/sale/view-all.list",
            label:"Sale"
        },
        {
            to:"skin-care.list",
            label:"SkinCare"
        },
        {
            to:"sun-care.list",
            label:"Sunscreen"
        },
        {
            to:"cosmetics.list",
            label:"Makeup"
        },
        {
            to:"hair-care.list",
            label:"Hair Care"
        },
        {
            to:"tools.list",
            label:"Tools & Devices"
        },
        {
            to:"body.list",
            label:"Bath & Body"
        },
        {
            to:"fragrance.list",
            label:"Fragrance"
        },
        {
            to:"blog/",
            label:"Blog"
        } 
    ]

    return (
        <>
      {/* <h1>{isLoggedIn.toString()}</h1>   */}
              <Flex align="center" justify="space-around" bg="gray.200" p={4} mt={8}>
              {
        Links.map((link)=>{
            return (
                
                <ChakraLink as={ReactRouterLink} key={link.to} to={link.to} color="gray.900">
                    {link.label}
                </ChakraLink>     
            )
        })
    }

              </Flex>
  
        </>

    )
}