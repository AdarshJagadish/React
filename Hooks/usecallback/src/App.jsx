import React, { useState } from "react";
import { useCallback } from "react";

const Counter = React.memo(({ count1, increment1 }) => {
  console.log("Child re-rendered");

  return (
    <>
      <p>Second component</p>
      <p>{count1}</p>
      <button onClick={increment1}>Increment</button>
    </>
  );
});

const App = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const increment1 = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, [count1]);

  console.log("Parent rendered");

  return (
    <div>
      <p>Parent component</p>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Count</button>
      <Counter count1={count1} increment1={increment1} />
    </div>
  );
};

export default App;