import React, { useCallback, useMemo, useState } from "react";
import MoneyHistories from "./MoneyHistories";

const MoneyTransfer = () => {
  const [histories, setHistories] = useState([]);

  const [cost, setCost] = useState(0);

  const handleChange = (e) => {
    setCost(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHistories([...histories, +cost]);
    setCost("");
  };

  const total = useMemo(
    () =>
      histories.reduce((acc, cur) => {
        console.log("Total");
        return acc + cur;
      }, 0),
    [histories]
  );
  // giải pháp: cache giá trị của biến total
  // ->> ví dụ: khi nào histories thay đổi --> tính toán lại

  const handleResetHisroties = useCallback(() => {
    setHistories([]);
  }, []);

  //   const handleResetHisroties = () => {
  //     setHistories([]);
  //   };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Số tiền ... ?"
          onChange={handleChange}
          value={cost}
        />
        <button>Add</button>
        <MoneyHistories
          histories={histories}
          total={total}
          onResetHistories={handleResetHisroties}
        />
      </form>
    </div>
  );
};

export default MoneyTransfer;

/*
- useMemo(callback, deps) --> cache giá trị tính toán qua mỗi lần re-render
    + trả về giá trị
    + callback phải có return
    + áp dụng cho các biểu thức logic
- useCallback(fn, deps) 
*/
