import { useState } from 'react'
 
 import './App.css'
 import { Routess } from './routes/routes'
 import Demo from './pages/demo'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
    <Demo/>
    {/* <Routess/> */}
     
    </>
  )
}

export default App
