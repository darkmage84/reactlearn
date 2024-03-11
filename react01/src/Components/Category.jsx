import React, { Component } from "react";

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  handleToggle = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div>
        {this.state.show && <Products />}
        <button onClick={this.handleToggle}>Click</button>
      </div>
    );
  }
}
