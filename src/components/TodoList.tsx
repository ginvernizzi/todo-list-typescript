import React from 'react'
import Todo from './Todo'
import { Task } from '../type'

interface Props {
  tasks: Array<Task>,
  updateTask: (id:number) => void,
  deleteTask: (id:number) => void,
  updateTaskText: (id: number, text: string) => void
}

const TodoList = ({tasks, updateTask, updateTaskText, deleteTask}:Props) => {
  return (
    <div className='todos_list'>
      <ul>
        {
          tasks.map((todo => {
            return <Todo key={todo.id} todo={todo} updateTask={updateTask} deleteTask={deleteTask} updateTaskText={updateTaskText} />
          }))
        }
      </ul>
    </div>
  )
}

export default TodoList