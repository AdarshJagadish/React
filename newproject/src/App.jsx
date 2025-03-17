import React from "react"
import './App.css'
class App extends React.Component{
  constructor(){
    super()
    this.state={
      name:"Adarsh"
    }
  }
  handleChange=()=>{
    this.setState({name:'Abhinesh'})
  }
  render(){
    return(
      <>
        <h1>Hey There it's me {this.state.name}</h1>
        <button onClick={this.handleChange}>Changename</button>
      </>
    )
  }
}
export default App