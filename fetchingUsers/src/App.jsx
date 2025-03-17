import React from "react"
import UserList from "./UserList"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      users: []
  }
  }
  componentDidMount() {
    fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => this.setState({users:data}))
    .catch((error) => console.error("User fetching Error:",error))
  }
    render(){
      return(
        <div>
          <h1>UserList</h1>
          <UserList users={this.state.users}/>
        </div>
      )
    }
}

export default App