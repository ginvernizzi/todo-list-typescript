import React from 'react'
import Todo from './Todo'
import { Task } from '../type'

interface Props {
  tasks: Array<Task>,
  updateTask: (id:number) => void
}

const TodoList = ({tasks, updateTask}:Props) => {
  return (
    <div className='todos_list'>
      <ul>
        {
          tasks.map((todo => {
            return <Todo key={todo.id} todo={todo} updateTask={updateTask}  />
          }))
        }
      </ul>
    </div>
  )
}

export default TodoList