import { useState } from 'react'
 import { useSelector,useDispatch } from 'react-redux'
import './App.css'
import { decrement, increment, incrementByAmount,rese } from './features/slice'
import { createStore } from 'redux'
function App() {
const onj ={
  point:1,
  value:5
}


    function reducer (action ){
      if( action.type ==="inc") {
    
      }
    }
const storee= createStore(reducer)
 storee.dispatch({type:"inc" })
 (
  <h1>
 
  </h1>
  )
}

export default App
