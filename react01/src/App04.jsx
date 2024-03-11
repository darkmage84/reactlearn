import React from "react";
// không thể gọi Hook ở đây
const App = () => {
  // Call Hook
  const [count, setCount] = React.useState(0);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
  });
  //   console.log(count);

  const handleClick = () => {
    // không gọi hook ở đây
    setCount(count + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone } = form;
    console.log(name, email, phone);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      {/* <h1>Count: {count}</h1> */}
      {/* <button onClick={handleClick}>Click</button> */}

      <form action="">
        <input type="text" name="name" placeholder="Name... " />
        <input type="email" name="email" placeholder="Email... " />
        <input type="tel" name="phone" placeholder="Telephone..." />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};
export default App;

/*
Class: 
- render() -> khi bị re-render -> gọi lại hàm này
- class react.component
+ lifecycle
+ state

Fnc -> không có state, lifecycle -> Hook

Hook là gì?
- Fnc đặc biệt
- Chỉ được gọi ở cấp đầu tiên trong functional Component
- Function bắt đầu bằng chữ use
*/
