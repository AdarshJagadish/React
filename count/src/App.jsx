import React from "react"
import './App.css'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      count : 0
    }
  }
  handleChange=()=>{
    this.setState((state) => ({count:state.count + 1}))
  }
  render(){
    return(
      <>
        <button onClick={this.handleChange}>Count {this.state.count}</button>
      </>
    )
  }
}
export default App