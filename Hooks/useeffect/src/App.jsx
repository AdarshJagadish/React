
// import { useEffect,useState } from "react";

// function App() {
//   let [count,setCount] = useState(0)

//   const handleincrement=()=>{
//     setCount(count+1)
//   }
//   useEffect(() => {
//     console.log('component re-rendered')
//   },[])
//   return (
//     <>
//     <p>{count}</p>
//     <button onClick={handleincrement}> increment </button>
//     </>
//     )
// }

// export default App



// import { useEffect,useState } from "react";

// function App() {
//   let [count,setCount] = useState(0)
//   let [name,setName] = useState('Manu')

//   const handleincrement=()=>{
//     setCount(prevCount=>prevCount+1)
//   }
//   const handleChange=()=>{
//     setName("Abhinesh")
//   }
//   useEffect(() => {
//     console.log('Effect component re-rendered')
//   },[count,name])
//   return (
//     <>
//     <p>{count}</p>
//     <button onClick={handleincrement}> increment </button>
//     <p>{name}</p>
//     <button onClick={handleChange}> change name </button>
//     </>
//     )
// }

// export default App


// Clean Up Fn() //


import { useEffect,useState } from "react";
import "./App.css"

function App(){
  const [count,setCount]=useState(0)
  const [running,setRunning]=useState(false)
  useEffect(()=>{
    if (!running) return
    const interval=setInterval(() => {
      setCount((prevcount)=>prevcount+1)
    },1000)
    return()=>{
      clearInterval(interval)
      console.log('Cleanup: Interval cleared')
    }
  },[running])
  return(
    <>
      <h1>Timer : <pre>{count}</pre></h1>
      <button onClick={()=>setRunning(true)}>Start</button>
      <button onClick={()=>setRunning(false)}>Stop</button>
    </>
  )
}

export default App;