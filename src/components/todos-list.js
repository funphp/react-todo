import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodoListItem from './todo-list-item';

export default class TodosList extends React.Component {

    renderItems () {
        const  props = _.omit(this.props, 'todos');
            return _.map(this.props.todos, (todo, index)=><TodoListItem key={index} {...todo} {...props} />);
    }

    render(){
        return (
            <table>
                <TodosListHeader />
                <tr>{this.renderItems()}</tr>
            </table>
            );
    }
}
