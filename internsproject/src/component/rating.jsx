import { useState } from "react";
import { Button ,Stack, Input } from '@chakra-ui/react'


export function Rating({value  }){

    const [rating, setRating] = useState(0); // To track the selected rating
    const [hover, setHover] = useState(0); // To track the hovered rating
  
    const handleRating = (rate) => {
      setRating(rate);
    };
    const [qno,setqno]=useState(0);// to track the question no. 
   
    return(
        <>
         <div>
          {value ? <div style={{ display: "flex", gap: "10px" }}>
        { value.map((num,i) => (
          
          <span
            key={num}
            style={{
              cursor: "pointer",
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              color: num <= (hover || rating) ? "#fff" : "#333",
              backgroundColor: num <= (hover || rating) ? "#ffd700" : "#ccc",
              transition: "background-color 0.2s, color 0.2s",
            }}
          
            onClick={() =>{
              handleRating(num)
              // console.log(i,"index")
              
            } }
            onMouseEnter={() => setHover(num)}
            onMouseLeave={() => setHover(0)}
          >
            {num}
          </span>
           
        )
    )
      }
      </div> :<p> <Input placeholder='Share your thoughts ....' bg="white" w="50%"/> </p>
      }
      
      
     
    </div>
          </>
    )


}