import { useState } from 'react'
 import { Welcome } from './pages/Home'
 import { Linkk } from './routes/link'
import './App.css'
import { Element } from './routes/element'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Linkk/>
     
      
       <Element/>
    </>
  )
}

export default App
