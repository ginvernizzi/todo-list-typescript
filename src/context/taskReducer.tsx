import { createContext, useReducer } from "react";
import { Task, TaskAction } from "../type";

const InitialState = [
  { id: 1, text: 'Aprender React', completed: false },
  { id: 2, text: 'Aprender TypeScript', completed: true },
  { id: 3, text: 'Aprender Vite', completed: false },
]

// const TaskContext = createContext([])

const taskReducer = (state: Array<Task>, action: TaskAction) => {

  switch (action.type) {
    case "init":
      return InitialState
    case "create":
      return [...state, action.payload]
    case "update":
      console.log('caca');
      return state.map((task) => {
        return {...task, completed: true }
      })
    case "delete":
      state.map((task) => {
        return state.filter(task => task.id === action.payload.id)
      })
    default:
      return state
  }
}

const manageTasks = () => useReducer(taskReducer, InitialState)


export default manageTasks