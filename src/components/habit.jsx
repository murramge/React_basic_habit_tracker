import React, { Component } from "react";

class Habit extends Component {
  handleIncrement = (habit) => {
    // state 오브젝트 안에 있는 count 를 증가한 뒤 state를 업데이트 해야 함
    this.props.onIncrement(this.props.habit);
  };
  handleDecrement = (habit) => {
    // state 오브젝트 안에 있는 count 를 증가한 뒤 state를 업데이트 해야 함
    this.props.onDecrement(this.props.habit);
  };
  handleDelete = (habit) => {
    this.props.onDelete(this.props.habit);
  };
  render() {
    const { name, count } = this.props.habit;

    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
