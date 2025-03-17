import React, { useState, useMemo } from "react";
import './App.css'

const App = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState(""); // This updates state but doesn't affect count

    // Memoized value (doubles the count)
    const doubledValue = useMemo(() => {
        console.log("Calculating...");
        return count * 2;
    }, [count]); // Runs only when count changes

    return (
        <div>
            <h2>useMemo Example</h2>
            <p>Count: {count}</p>
            <p>Doubled Value: {doubledValue}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <br />
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} // Updates state but doesn't trigger useMemo
                placeholder="Type something..."
            />
        </div>
    );
};

export default App;
