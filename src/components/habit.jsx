import React, { Component } from 'react';

class Habit extends Component {
    //state : 컴포넌트에 있는 상태 값이다. 객체의 형태들
    state = {
        
        count: 0, //안에는 숫자를 올리고 내릴 수 있는 count가 들어있음
    };
    
    //render()의 return 에서 써주기 위해서 handle을 만든다. 이건 증가할 수 있도록 한 handle 컨트롤러이다.
    handleIncrement = () => {
   

        //state 오브젝트 안에 있는 count를 증가한 뒤 state를 업데이트 해야 한다.
        this.setState({count: this.state.count + 1});
        //리엑트에서 업데이트 할 때는 setState라는 함수를 호출해주어야 업데이트 되었는지 안다.
    };
    //감소를 위한 handle 컨트롤러이다.
    handleDecrement = () => {
        //state 오브젝트 안에 있는 count를 감소한 뒤 state를 업데이트 해야 한다.
        const count = this.state.count - 1; 
        this.setState({count: count < 0 ? 0 : count});
        //리엑트에서 업데이트 할 때는 setState라는 함수를 호출해주어야 업데이트 되었는지 안다.
        //감소이니까 -1이 되면 안되므로 count 변수를 만들어 준 다음에 0이라면 0 아니라면 count를 출력할 수 있는 간단한 조건문을 만든다.
    };
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
            <button className="habit-button habit-delete">
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