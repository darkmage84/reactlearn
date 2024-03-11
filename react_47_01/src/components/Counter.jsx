import { useSelector, useDispatch } from "react-redux";
import { counterSlice } from "../redux/slice/counterSlice";

const { increment, decrement } = counterSlice.actions;

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          dispatch({
            type: `${counterSlice.name}/decrement`,
            payload: 10,
          });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(increment(10));
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
