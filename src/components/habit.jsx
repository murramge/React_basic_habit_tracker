import React, { Component } from 'react';


class Habit extends Component {

    //render()의 return 에서 써주기 위해서 handle을 만든다. 이건 증가할 수 있도록 한 handle 컨트롤러이다.
    handleIncrement = () => {
        this.props.OnIncrement(this.props.habitsss);
    };
    //감소를 위한 handle 컨트롤러이다.
    handleDecrement = () => {
        this.props.OnDecrement(this.props.habitsss);
    };
    handleDelete = () => {
        this.props.OnDelete(this.props.habitsss);
    }
    render() {
        //우리가 props로 받아 온 habitsss의 object인 name과 count 를 받아온다.
        //habits로 가보면 props를 Habit= habitsss{habitssss} 로 해주었음 여기서 habitssss는 object들임 그냥 function(habitssss) 같이 map으로 하나하나 탐색한것이다.
        const {name, count} = this.props.habitsss;
        return (
        <li className="habit"> 
            <span className="habit-name">{name}
            </span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
            <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                <i className="fas fa-minus-square"></i>
            </button>
            <button className="habit-button habit-delete" onClick={this.handleDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </li> 
        
        );
        // 유의미한 묶음 list를 만들어야 하므로 li로 감싸주고, 
        // span으로 아까 받은 props의 name을 넣고, count도 props의 count를 넣는다.
        // 플러스 마이너스 button에 onClick 으로 아까 만들어준 this.handleIncrement, Decrement를 사용해준다. + - 가 가능해짐
        
    }
}

export default Habit;