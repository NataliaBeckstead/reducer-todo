import React, { useReducer } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { todoReducer, initialState } from './reducers/TodoReducer';
import * as moment from "moment";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  
  const addNewTask = newTaskName => {
    dispatch({
      type: 'ADD_NEW_TASK',
      payload: newTaskName
    });
  }

  const toggleTask = clickedId => {
    dispatch({
      type: 'TOGGLE_TASK_STATUS',
      payload: clickedId
    })
  }

  const filterTasks = () => {
    dispatch({
      type: 'FILTER_COMPLETED_TASKS'
    })
  }


  return (
    <div className="toDoContainer">
      <header>
        <h1>{moment().format("dddd")}'s ToDo List</h1>
      </header>
      <TodoList 
        tasks={state.tasks} 
        toggleTask={toggleTask} 
      />
      <TodoForm 
        addNewTask={addNewTask}
        filterTasks={filterTasks}  
      />
    </div>
  );
}

export default App;