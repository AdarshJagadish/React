// import { useEffect,useRef } from "react";

// function App(){
//   const myRef=useRef(null)

//   useEffect(()=>{
//     console.log(myRef.current)
//   })
//   const handleChange=()=>{
//     console.log(myRef.current.value)
//   }
//   return(
//     <>
//       <input type="text" name="" id="" ref={myRef} onChange={handleChange}/>
//     </>
//   )
// }
// export default App



import { useEffect,useRef } from "react";

function App(){
  const myRef=useRef(null)

  useEffect(()=>{
    console.log(myRef.current)
  })
  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(myRef.current.value)
  }
  return(
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" ref={myRef}/>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}
export default App