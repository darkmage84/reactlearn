import React from "react";
import { useState } from "react";
import Content from "./Content";
import color from "../libs/color";

const Counter = ({ title, color }) => {
  const [count, setCount] = useState(0);
  // let a;
  // if (count % 3 === 0) {
  //   a = count;
  //   // console.log(a);
  // }

  console.log(title, color);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button>-</button>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>

      <Content count={1} />
    </div>
  );
};

export default color(Counter);
