import React, { useState } from "react";
import "./Counter.css";

const CounterFunction: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="counter-card">
      <h2 className="counter-heading">Function Component</h2>
      <p className="counter-value">{count}</p>
      <div className="button-group">
        <button className="btn decrement" onClick={decrement}>
          -
        </button>
        <button className="btn increment" onClick={increment}>
          +
        </button>
      </div>
    </div>
  );
};

export default CounterFunction;
