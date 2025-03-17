import React from "react";
import "./App.css"

class App extends React.Component {
    constructor() {
        super();
        this.myRef = React.createRef();
    }

    handleChange = (event) => {
        event.preventDefault();
        alert('You typed: ' + this.myRef.current.value);
    };

    render() {
        return (
            <>
                <form onSubmit={this.handleChange}>
                    <input type="text" ref={this.myRef} />
                    <input type="submit" value="Submit" />
                </form>
            </>
        );
    }
}

export default App;
