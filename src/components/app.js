import React from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';

const todos = [{
        task: 'Make react tutorial',
        isCompleted: false,

},{
        task: 'eat dinner',
        isCompleted:false
}];

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos
        };
    }
    render(){
        return (
            <div>
                <h1>React Todos Apps</h1>
                <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
                <TodosList  todos={this.state.todos}
                toggoleTask={this.toggoleTask.bind(this)}
                saveTask={this.saveTask.bind(this)}
                deleteTask = {this.deleteTask.bind(this)}/>
            </div>

            );
    }

    toggoleTask(task) {
        const foundTodos = _.find(this.state.todos,  todo=> todo.task === task);
        foundTodos.isCompleted = !foundTodos.isCompleted;
        this.setState({todos: this.state.todos});
    }

    createTask (task) {
        this.state.todos.push({
            task,
            isCompleted:false
        });
        this.setState({todos: this.state.todos});
    }

    saveTask(oldTask, newTask) {
        const foundTask = _.find(this.state.todos,  todo=> todo.task === oldTask);
        foundTask.task = newTask;
        this.setState({todos: this.state.todos});
    }
    deleteTask(taskToDelete) {
        _.remove(this.state.todos,  todo=> todo.task === taskToDelete);
        this.setState({todos: this.state.todos});
    }
}
