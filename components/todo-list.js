import React from 'react';
import {View} from 'react-native';
import Todo from './todo';


class TodoList extends React.Component{
    render(){
        return(
            <View>
                {this.props.todoList.map(todo => <Todo text={todo.text}></Todo>)}
            </View>
        )
    }
}

export default TodoList;