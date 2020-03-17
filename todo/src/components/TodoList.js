import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log('todo list props:', props)

    return (
        <div className="taskContainer">
            {props.tasks.map(task => {
                return (
                    <Todo 
                        key={task.id}
                        id={task.id}
                        name={task.item}
                        status={task.completed}
                        toggleTask={props.toggleTask}
                    />
                )
            })}
        </div>
    )
}

export default TodoList;