import { useState } from 'react'
 import { useSelector,useDispatch } from 'react-redux'
// import './App.css'
import { decrement, increment, incrementByAmount,rese } from './features/slice'



function apppp(){


    const [countt, setCountt] = useState()
    const coun= useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()
    const plus=()=>{
   dispatch(increment())
    }
    const minus=()=>{
   dispatch(decrement())
    }
    const reset=()=>{
   dispatch(rese())
    }
    const incre=()=>{
   dispatch(incrementByAmount(countt))
    }
    const valuu= (e)=>{
      setCountt(e.targt.value)
      console.log(countt)
    }
  
    return (
      <>
        <div>
      <button onClick={plus} > +</button>
      <h1> count: {coun} </h1>
      <button onClick={minus} > -</button>
  
      <button onClick={reset} > Reset</button>
      <input type='number' placeholder='enter no. to inc. count '  value={countt} 
      onChange={(e)=> setCountt(e.target.value)} />
      <button onClick={incre} > increase</button>
   </div>
      </>
    )
}