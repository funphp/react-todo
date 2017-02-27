import React from 'react';


export default class CreateTodo extends React.Component {

    constructor(pros) {
        super(pros);
        this.state = {
            error:null
        };
    }
    renderError() {

        if(!this.state.error) {
            return null;
        }
        return (
                <div style={{color:"red"}}>{this.state.error}</div>
            );
    }
    render(){
        return (
            <form onSubmit={this.handleClick.bind(this)}>
                <input type="text" ref="todoname" placeholder="New Todo"/>
                <button>Save</button>
                {this.renderError()}
            </form>

            );
    }
    handleClick(e) {
        e.preventDefault();

        const createInput = this.refs.todoname;
        const task = createInput.value;
        const validateInput = this.validateInput(task);
        if(validateInput) {
            this.setState({error:validateInput});
            return;
        }
        this.setState({error:null});
        this.props.createTask(this.refs.todoname.value);
        this.refs.todoname.value = '';

    }

    validateInput(task) {
        if(!task) {
            return "Please Enter Task";
        } else if (_.find(this.props.todos, todo => todo.task === task))
        {
        return "Task already added";
        } else {
            return null;
        }
    }
}
