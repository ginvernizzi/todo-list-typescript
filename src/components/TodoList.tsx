import React from 'react'
import Todo from './Todo'
import { Task } from '../type'

interface Props {
  tasks: Array<Task>,
  updateTask: (id:number) => void,
  deleteTask: (id:number) => void
}

const TodoList = ({tasks, updateTask, deleteTask}:Props) => {
  return (
    <div className='todos_list'>
      <ul>
        {
          tasks.map((todo => {
            return <Todo key={todo.id} todo={todo} updateTask={updateTask} deleteTask={deleteTask}  />
          }))
        }
      </ul>
    </div>
  )
}

export default TodoList