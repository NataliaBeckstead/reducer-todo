export const initialState = {
  tasks: [ 
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }
  ]
}

export const todoReducer = (state, action) => {
  console.log(action)
  switch(action.type) {
      case 'ADD_NEW_TASK':
          const newTask = {
              id: Date.now(),
              item: action.payload,
              completed: false
          }
          return {
              ...state,
              tasks: [...state.tasks, newTask]
          }
      case 'TOGGLE_TASK_STATUS':
          const updatedTasks = state.tasks.map(task => {
              if (task.id === action.payload) {
                  return {...task, completed: !task.completed}
              } else {
                  return task
              }
          })
          return {
              ...state,
              tasks: updatedTasks
          }
      case 'FILTER_COMPLETED_TASKS':
          const incompleteTasks = state.tasks.filter( task => {
              if (task.completed === false) {
                  return {...task}
              }
          }) 
          return {
              ...state,
              tasks: incompleteTasks
          }
      default: 
          return state;
  }
}