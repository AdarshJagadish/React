import { Component } from "react";
import "./App.css"

class App extends Component {
    constructor() {
        super();
        this.state = {
            text: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
    };

    render() {
        return (
            <>
                <input 
                    type="text" 
                    value={this.state.text} 
                    onChange={this.handleChange} 
                />
                <p>You typed: {this.state.text}</p>
            </>
        );
    }
}

export default App;
