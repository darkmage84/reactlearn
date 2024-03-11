import React, { forwardRef } from "react";

const Button = (props, ref) => {
  return (
    <div>
      <button ref={ref}>Click me</button>
    </div>
  );
};

export default forwardRef(Button);
