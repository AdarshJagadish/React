//--------------------------------------- CompoonentDidMount -------------------------------------------//

// import React from "react"

// class App extends React.PureComponent{
//   constructor(){
//     super()
//     this.state = {
//       name : 'Manu'
//     }
//     console.log('component created')
//   }

//   handleChange=()=>{
//     this.setState({
//       name:'Abhi'
//     })
//   }
//   componentDidMount(){
//     console.log('component mounted')
//   }
//   render(){
//     console.log('component Rendered')
//     return(
//       <>
//         <p>name is {this.state.name}</p>
//         <button onClick={this.handleChange}>Change Name</button>
//       </>
//     )
//   }
// }

// export default App

//--------------------------------------- CompoonentDidMount -------------------------------------------//

//--------------------------------------- CompoonentDidUpdate -------------------------------------------//

// import React from "react"

// class App extends React.PureComponent{
//   constructor(){
//     super()
//     this.state = {
//       count : 1
//     }
//     console.log('component created')
//   }

//   handleChange=()=>{
//     this.setState({
//       count:this.state.count+1
//     })
//   }
//   componentDidUpdate(prevProps,prevState){
//     console.log(`changes from ${prevState.count} to ${this.state.count}`)
//   }
//   render(){
//     console.log('component Rendered')
//     return(
//       <>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.handleChange}>Increment</button>
//       </>
//     )
//   }
// }

// export default App

//--------------------------------------- CompoonentDidUpdate -------------------------------------------//

//--------------------------------------- CompoonentWillMount -------------------------------------------//

import React from "react"
import { Component } from "react";

class Message extends Component {
  componentWillUnmount() {
    console.log("Message component is being removed")
  }
  render() {
    return <p>Hello, I am here!</p>
  }
}

class App extends Component {
  state = { show: true };

  toggleMessage = () => {
    this.setState({ show: !this.state.show })
  };

  render() {
    return(
      <>
        {this.state.show && <Message />}
        <button onClick={this.toggleMessage}>
          {this.state.show ? "Remove Message" : "Show Message"}
        </button>
      </>
    )
  }
}

export default App