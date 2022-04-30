import React, { Component } from 'react';

class Habit extends Component {

    state = {
        count: 0,
    };
    handleIncrement = () => {
        //state 오브젝트 안에 있는 count를 증가한 뒤 state를 업데이트 해야 한다.
        this.setState({count: this.state.count + 1});
        //리엑트에서 업데이트 할 때는 setState라는 함수를 호출해주어야 업데이트 되었는지 안다.
    };
    handleDecrement = () => {
        //state 오브젝트 안에 있는 count를 감소한 뒤 state를 업데이트 해야 한다.
        const count = this.state.count - 1; 
        this.setState({count: count < 0 ? 0 : count});
        //리엑트에서 업데이트 할 때는 setState라는 함수를 호출해주어야 업데이트 되었는지 안다.
    };
    render() {
        console.log(this.props);
        return (
        <li className="habit"> 
            <span className="habit-name">Reading</span>
            <span className="habit-count">{this.state.count}</span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete">
                <i className="fas fa-trash"></i>
            </button>
        </li> 
        );
    }
}

export default Habit;