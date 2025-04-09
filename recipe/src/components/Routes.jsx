import { Route ,Routes} from "react-router-dom"
 


export function Routess(){

    return(
<Routes>
  <Route path="/paneer-item" element={<Paneer/>}/>
  <Route path="/chicken-item" element={<Chicken/>}/>

</Routes>

    )
}