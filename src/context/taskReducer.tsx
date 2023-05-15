import { createContext, useReducer } from "react";
import { StateTask, TaskAction } from "../type";

const InitialState = {
  tasks:
    [
      { id: 1, title: 'Aprender React', completed: false },
      { id: 2, title: 'Aprender TypeScript', completed: true },
      { id: 3, title: 'Aprender Vite', completed: false }
    ],
  async: false
}

// {
//   tasks
//   async
// }

export const taskReducer = (state: StateTask, action: TaskAction): StateTask => {
  switch (action.type) {
    case "init":
      return { ...state, tasks: action.payload, async: false }

    case "create":
      return { ...state, tasks: state.tasks.concat(action.payload), async: true }

    case "update":
      const newTasks = state.tasks.map((elemento) => {
        return elemento.id === action.payload.id ? { ...elemento, completed: !elemento.completed } : elemento;
      });

      return { ...state, tasks: newTasks, async: true }

    case "updateText":
      const tareaActualizada = state.tasks.map((elemento, index) => {
        return elemento.id === action.payload.id ? { ...elemento, title: action.payload.text } : elemento
      })

      return { ...state, tasks: tareaActualizada, async: true }

    case "delete":
      const tareasNoEliminadas = state.tasks.filter(task => task.id !== action.payload.id)
      return { ...state, tasks: tareasNoEliminadas, async: true }

    case "deleteAllCompleted":
      const tareasNoCompletadas = state.tasks.filter(task => task.completed !== true)
      return { ...state, tasks: tareasNoCompletadas, async: true }

    default:
      return state
  }
}

const manageTasks = () => useReducer(taskReducer, {tasks:[], async: false})

export default manageTasks