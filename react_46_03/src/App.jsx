import React from "react";
import Counter from "./Components/Counter";
import Todo from "./Components/Todo";

const App = () => {
  return (
    <div>
      <Counter />
      <Todo />
    </div>
  );
};

export default App;

/*
- Redux là 1 thư viện để quản lý Global Statee

  + Store: kho chứa state chung của dự án
  + Reducer: hàm có 2 tham số: state và action
  + Action: object mô tả hành động: vd: Thêm/Sửa/Xóa sản phẩm
  + Dispatch: hàm -> gửi action lên Reducer
  + Subscribe: lắng nghe state hay đổi --> update UI

- React Redux

+ Redux Core
+ Redux Toolkit
+ Redux Thunk -- Middleware
*/
