import { createContext, useReducer } from "react";
import { Task, TaskAction } from "../type";

const InitialState = [
  { id: 1, text: 'Aprender React', completed: false },
  { id: 2, text: 'Aprender TypeScript', completed: true },
  { id: 3, text: 'Aprender Vite', completed: false },
]

// const TaskContext = createContext([])

export const taskReducer = (state: Array<Task>, action: TaskAction) => {
  console.log("state reducer", state)
  switch (action.type) {
    case "init":
      console.log("init")
      return InitialState
    case "create":
      return [...state, action.payload]
    case "update":
      const nuevoEstado = state.map((elemento, index) => {
        if (elemento.id === action.payload.id) {
          return { ...elemento, completed: !elemento.completed };
        }
        return elemento;
      });
      return nuevoEstado
    case "updateText":
      console.log("tutu", action.payload.id, action.payload.text);
      return state.map((elemento, index) => {
        if (elemento.id === action.payload.id) {
          return { ...elemento, text: action.payload.text };
        }
        return elemento;
      });
    case "delete":
      console.log("delete", action.payload.id)
      return state.filter(task => task.id !== action.payload.id)
    case "deleteAllCompleted":
      return state.filter(task => task.completed !== true)
    default:
      return state
  }
}

const manageTasks = () => useReducer(taskReducer, InitialState)

export default manageTasks