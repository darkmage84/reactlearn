import React, { useState, useEffect } from "react";

App = () => {
  cosnt[(count, setCount)] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    console.log("HELLO");
  }, []);

  useEffect(() => {
    console.log("update/....");
  });
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};
export default App;
