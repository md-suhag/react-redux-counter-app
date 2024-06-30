import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCounter,
  incrementCounter,
  resetCounter,
} from "../services/action/counterAction";
import "./Counter.css";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCounter());
  };
  const handleDecrement = () => {
    dispatch(decrementCounter());
  };
  const handleReset = () => {
    dispatch(resetCounter());
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h3>Count :{count}</h3>
      <button onClick={handleIncrement}>
        Increment <span></span>
      </button>
      <button onClick={handleReset}>
        Reset <span></span>
      </button>
      <button onClick={handleDecrement} disabled={count == 0}>
        Decrement <span></span>
      </button>
    </div>
  );
};

export default Counter;

// 1. state - count :0
// 2. actions - increment, decrement, rest
// 3. reducers - increment-> count => count+1
//              - decrement -> count => count -1
//              - reset -> count => 0
// 4. store
// 5. providing store
// 6. use store
