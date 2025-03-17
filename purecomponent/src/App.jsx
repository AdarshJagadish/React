import React, { Fragment } from "react"

class App extends React.PureComponent{
  constructor(){
    super()
    this.state = {
      name : 'Adil'
    }
  }

  handleChange=()=>{
    this.setState({name:'Adarsh'})
  }

  render(){
    console.log('Component Rendered')
    return(
      <>
        <h1>Hey This is {this.state.name}</h1>
        <button onClick={this.handleChange}>Change Name</button>
      </>
    )
  }
}


export default App
