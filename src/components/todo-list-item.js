import React from 'react';


export default class TodosListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        };
    }

    renderTaskSection() {
        const {task, isCompleted} = this.props;
        const taskStyle = {
                color : isCompleted? 'green':'red',
                cursor : 'pointer'
        };

        if(this.state.isEditing) {
            return (<td><form onSubmit={this.saveTask.bind(this)}>
                <input type="text" ref="todonameTxt" defaultValue={task} />
                </form>
                </td>);
        }
        return (
                <td style={taskStyle} onClick={this.props.toggoleTask.bind(this, task)} >
                {task}
                </td>
            );
    }
    renderActionButton () {
        if(this.state.isEditing) {
            return  (
                <td><button onClick={this.saveTask.bind(this)}>Save</button>
                            <button onClick={this.cancelClick.bind(this)}>Cancel</button>
                        </td>
                );
        }
        return (
                <td><button onClick={this.editClick.bind(this)}>Edit</button>
                            <button onClick={this.deleteClick.bind(this)}>Delete</button>
                        </td>
            );
    }

    render(){

        return (
                    <tr>
                            {this.renderTaskSection()}
                            {this.renderActionButton()}
                    </tr>
            );
    }

    editClick() {
        this.setState ({isEditing: true});
    }

    cancelClick() {
        this.setState ({isEditing: false});

    }
    saveTask(e) {
        e.preventDefault();
        const oldTask = this.props.task;
        const newTask = this.refs.todonameTxt.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({isEditing:false});
    }
    deleteClick(e) {
        e.preventDefault();
        this.props.deleteTask(this.props.task);
        this.setState({isEditing:false});
    }
}
