import React,{ useContext } from "react";
const myContext = React.createContext()
function App(){
  const value='hello from context'

  return(
    <myContext.Provider value={value}>
      <ChildComponent/>
    </myContext.Provider>
  )
}

function ChildComponent(){
  const contextValue=useContext(myContext)
  return(
    <>
      {contextValue}
    </>
  )
}

export default App