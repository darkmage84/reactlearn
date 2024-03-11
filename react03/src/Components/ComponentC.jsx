import React, { useContext } from "react";
import { AppContext } from "../App";

const ComponentC = () => {
  const context = useContext(AppContext);
  console.log(context);
  return (
    <div>
      <h1>Component C</h1>
      <button
        onClick={() => {
          context.handleUpdateTitle("Tieu de 1");
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default ComponentC;
