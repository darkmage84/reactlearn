//class components
import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    // cập nhật lại state => sử dụng phương thức setState có sẵn trong Components
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    console.log("re-render");
    const { count } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

/*
State = trạng thái
- Hoạt động trong nội bộ component
- Khi state thay đổi => component sẽ tự động re-rendre
- Không thay đổi trực tiếp state mà cần phải thông qua hàm có sẵn của React
*/
