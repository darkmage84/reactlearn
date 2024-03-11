import Header from "./Components/Header";
import React from "react";

function App() {
  // const h1 = React.createElement(
  //   "h1",
  //   {
  //     id: "title",
  //     className: "title",
  //     style: {
  //       color: "red",
  //       fontStyle: "italic",
  //     },
  //     onClick: (e) => {
  //       console.log("Click me", e);
  //     },
  //   },
  //   "Hello F88"
  // );

  // const h2 = React.createElement(
  //   "h2",
  //   {
  //     style: {
  //       color: "green",
  //     },
  //   },
  //   "Day la 1 the h2"
  // );

  // const number = 10;
  // const range = [...Array(number).keys()];
  // console.log(range);

  // const li = range.map((index) => {
  //   return React.createElement("li", {}, `Item ${index + 1}`);
  // });

  // const ul = React.createElement(
  //   "ul",
  //   {
  //     className: "menu",
  //   },
  //   ...li
  // );

  // // div
  // const div = React.createElement(
  //   "div",
  //   {
  //     className: "container",
  //   },
  //   h1,
  //   ul,
  //   h2
  // );
  // // return div;

  const Product = () => {
    return <h2>Danh sach san pham</h2>;
  };
  const handleClick = (e) => {
    console.log(e.target);
  };

  let welcome = <h2>CHao mung ban da quay tro lai</h2>;
  const isLogin = true;
  if (!isLogin) {
    welcome = <h2>Vui long dang nhap</h2>;
  }
  const title = "xin chao f8";
  const isPrimary = true;
  const div2 = (
    <div className="content">
      <h1>{title}</h1>
      {welcome}
      <Product />
      <ul className="menu">
        <li>Item</li>
        <li>item</li>
        <li>iTem</li>
      </ul>
      <button
        className={`btn ${isPrimary ? "btn-primary" : ""}`}
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );

  return div2;
}

export default App;

// web chuyển transform.tools
