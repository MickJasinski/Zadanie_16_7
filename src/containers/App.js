import React from 'react';
import uuid from 'uuid';
import style from './css/App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "This is ToDo List app",
            data: [
                {
                    id: 1,
                    text: 'Some todo text 1'
                },
                {
                    id: 2,
                    text: 'Some todo text 2'
                },
                {
                    id: 3,
                    text: 'Some todo text 3'
                }
            ]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title title={this.state.title} noumber={this.state.data.length} />
                <TodoForm addTodo={(value) => this.addTodo(value)} />  
                <TodoList items={this.state.data} remove={(id) => this.removeTodo(id)} />               
            </div> 
        );
    }
}

export default App;
