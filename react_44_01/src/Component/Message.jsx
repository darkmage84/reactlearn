import React from "react";
import { useSelector } from "../core/useSelector";

const Message = () => {
  const { state } = useSelector();
  return (
    <div>{state.count >= 10 ? <h3>Good result</h3> : <h3>Bad result</h3>}</div>
  );
};

export default Message;
