import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.count);

  const handleIncrement = () => {
    dispatch(increment(5));
  };

  const handleDecrement = () => {
    dispatch(10);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>-</button>
      <button onClick={handleDecrement}>+</button>
    </div>
  );
};

export default Counter;

/*
useDispath() --> trả về hàm dispatch
useSelector() --> get state glocal
*/
