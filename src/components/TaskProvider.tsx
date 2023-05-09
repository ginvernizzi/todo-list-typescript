import React, { Children, createContext, useContext, useReducer } from 'react'
import { Task, TaskAction } from '../type'

// interface Props {
//   children: JSX.Element
// }

const InitialState = [
  { id: 1, text: 'Aprender React', completed: false },
  { id: 2, text: 'Aprender TypeScript', completed: true },
  { id: 3, text: 'Aprender Vite', completed: false },
]


const taskReducer = (state: Array<Task>, action: TaskAction) => {
  switch (action.type) {
    case "init":
      return InitialState
    case "create":
      return [...state, action.payload]
    case "update":
      return state.map((task) => {
        return task.id === action.payload.id ? { ...task, [action.payload.name]: action.payload.value } : task
      })
    case "delete":
      state.map((task) => {
        return state.filter(task => task.id === action.payload.id)
      })
    default:
      return state
  }
}

const taskManage = () => useReducer(taskReducer, InitialState)

// export const taskContext = createContext([])


// const TaskProvider = ({ children }: Props) => {
//   return (
//     <taskContext.Provider value={[tasks, dispatchTask]}>
//       {children}
//     </taskContext.Provider>
//   )
// }

// export default TaskProvider

