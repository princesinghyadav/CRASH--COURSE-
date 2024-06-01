import { useState ,useRef} from 'react'
 import React from 'react'
import './App.css'

function App() {
  
  const [time ,settime]=React.useState(10)
const [show ,setShow]=useState(true)
const intervalRef =  useRef(null)

 function start(){
  if(intervalRef.current !==null){
    console.log("already timer chl rha h")
return ;
  }
  intervalRef.current=setInterval(()=>{
  settime( (prevcount)=>{
if(prevcount<=1){
  clearInterval(intervalRef.current)
}
return prevcount-1;
  })
},1000)

 }
// const startTimer = () => {
//   if (intervalRef.current !== null) {
//     console.log(`timer is already running`);
//     return;
//   }
//   intervalRef.current = setInterval(() => {
//     console.log(`timer running`, Date.now());
//     settime((prevCount) => {
//       // if (prevCount <= 1) {
//       //   clearInterval(intervalRef.current);
//       // }
//       return prevCount - 1;
//     });
//   }, 1000);
// };
 function stop(){
clearInterval(intervalRef.current)

 }
 function reset(){
stop()
settime(10)

 }

  return (
    <>
    { show? 
      <div  >
      <h1> Count {time}</h1>
<button onClick={start }> start </button>
<button onClick={stop}> stop </button>
<button onClick={reset}> reset </button> 

      </div>
      : null} 
    <button onClick={ ()=>  setShow(!show)}> Toggle </button>
    </>
  )
}

export default App
