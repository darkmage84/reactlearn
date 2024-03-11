import React, { useState } from "react";
import ComponentA from "./Components/ComponentA";
import ComponentB from "./Components/ComponentB";

// khởi tạo context
export const AppContext = React.createContext();
console.log(AppContext);

const App = () => {
  const [title, setTitle] = useState("");

  const data = {
    name: "username",
    email: "username@example.com",
    title,
  };

  const handleUpdateTitle = (value) => {
    setTitle(value);
  };
  return (
    <AppContext.Provider value={{ data, handleUpdateTitle }}>
      <ComponentA />
      <ComponentB />
    </AppContext.Provider>
  );
};

export default App;
