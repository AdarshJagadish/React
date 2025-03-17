import { useMemo, useState } from "react";

export default function App(){
  const [count,setCount]=useState(0)
  let sum=useMemo(()=>loop(),[])
  return(
    <>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>counter</button>
      <p>Sum: {sum}</p>
    </>
  )
}

function loop(){
  let sum=0
  for(let i=0;i<=1e9;i++){
    sum+=i
  }
  return sum
}