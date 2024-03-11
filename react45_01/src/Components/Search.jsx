import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Button from "./Button";

const Search = () => {
  // mẹo đặt tên: biến tham chiếu, thêm Ref ở cuối

  //   const helloRef = useRef(0);
  //   //   console.log(helloRef, helloRef.current);
  //   // biến helloRef sẽ lưu trữ giá trị, ko bị refresh
  //   const [number, setNumber] = useState(0);

  //   const handleClick = () => {
  //     setNumber(number + 1);
  //     // helloRef.current = "Number: " + (number + 1);
  //     helloRef.current++;
  //     console.log(`Ref: ${helloRef.current}`, `Number: ${number}`);
  //   };

  const inputRef = useRef();
  // chạy đến đây sẽ render trước, sau đó quay lại useEffect()

  //Button.jsx
  const buttonRef = useRef();

  // useEffect thực thi Side Effect
  useEffect(() => {
    // console.log(inputRef);

    // tự động focus
    inputRef.current.focus();

    // thêm thuộc tính id
    // inputRef.current.id = "number";

    //Button.jsx
    console.log(buttonRef);
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Nhap tu khoa tim kiem .. "
      />
      {/* <button onClick={handleClick}>Click me</button> */}

      <Button ref={buttonRef} />
    </div>
  );
};

export default Search;
