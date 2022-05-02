import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    //habits 는 habit 들을 나열한 것이다. 다양한 habit들을 넣을 수 있게 잘라놓은 도큐먼트이다.
    state = {
    //state에는 id, name, count 가 들어있는데 여기서 이 id는 list key 이므로
    //리액트에서는 key값을 기준으로 자체판별해서 업데이트 할건지 안할건지를 구분하는데
    //key값이 이미 업데이트 되어있는 경우, key값을 기준으로 내용이 바뀌지 않았다면 업데이트가 안되게끔 해준다.
    //그렇기에 list key를 주어서 key 값을 만들어줌 (단 배열의 index는 안됨 index 안에 있는 값이 바뀔수도 있음) key는 바뀌면 안되는 고유한 값임
   
        habits:[
            {id: 1, name: 'Reading', count : 0},
            {id: 2, name: 'Running', count : 0},
            {id: 3, name: 'Coding', count : 0},
        ],
       
    };
   
    //데이터를 가지고 있는 곳이 내가 이 데이터를 어떻게 수정하면 되는 지 잘 알고있는 최고의 장소
    //여기에서 count나 어떤 것을 수정해주는 것이 가장 좋다.
    handleIncrement = (habit) => {
    //어떤 특정한 습관을 인자로 전달받으면 그 습관에 해당하는 count를 증가해주면 됨
    //리액트에서는 state를 직접적으로 수정하면 안된다
    const habitssss = [...this.state.habits];
    //...이연산자는 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax 배열 안에 있는 아이템들을 하나하나씩 새로운 배열 안으로 복사해오는 것임
    const index = habitssss.indexOf(habit);
    habitssss[index].count++;
    this.setState({ habits: habitssss});
    
    };
    
    handleDecrement = (habit) => {
        const habitssss = [...this.state.habits];
        //...이연산자는 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Spread_syntax 배열 안에 있는 아이템들을 하나하나씩 새로운 배열 안으로 복사해오는 것임
        const index = habitssss.indexOf(habit);
        const count = habitssss[index].count - 1;
        habitssss[index].count = count < 0 ? 0 : count;
        this.setState({habits: habitssss});
    };
    handleDelete = (habit) => {
        const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({habits: habits})
    };
   
    render() {
        return (
            <ul>
                {this.state.habits.map(habitssss => (
                    <Habit key={habitssss.id} habitsss={habitssss} 
                    OnIncrement={this.handleIncrement}
                    OnDecrement={this.handleDecrement} 
                    OnDelete={this.handleDelete}
                    />
                ))}
            </ul>
            //이렇게 habits에서 state에 만들어 놓았던 habits들을 map으로 전체적으로 탐색해서 
            //habitssss <- 구분을위해서 이렇게 해놓음. 을 함수의 인자로 만들어서 Habit 안에
            //props로 habitssss를 넣어준 모습이다. props를 설정하려면 <Habit={habitssss}> 이런식으로 담을 것을 넣어주면 된다.
            //habits 자체에서 habit들을 가져온 것이라서 이제 app.jsx에서는 habits를 불러와주어야한다.
            //개념으로 따지자면 habits가 큰 개념 habit(아까 만든 habit.jsx)가 작은 개념임.
        );
    }
}

export default Habits;