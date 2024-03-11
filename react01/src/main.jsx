import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App04.jsx";

// main: nhận request từ index.html
// => gọi component App
// => render nội dung component app vào thẻ div root

ReactDOM.createRoot(document.getElementById("root")).render(App());

/* 
Bài tập: tạo thẻ ul, li theo cấu trúc sau

  <ul class="menu">
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
  </ul>

  sau thẻ h1
*/

/*
Component: hàm, class có chữ đầu tiên viết hoa
-> Gọi: <TenHam /> hoặc <TenHam></TenHam>
*/
