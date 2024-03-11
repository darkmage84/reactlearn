import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  const user = {
    name: "John",
    email: "john@example.com",
    age: 36,
  };

  return (
    <div>
      <h1>React khó T_T</h1>
      <Header title="Học lập trình tại F88" {...user} />
      <hr />
      <Footer>
        <h3>Nha cai uy tin </h3>
      </Footer>
    </div>
  );
};

export default App;

// Props => truyền dữ liệu từ component cha sang component con
