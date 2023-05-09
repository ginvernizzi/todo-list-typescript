import React from 'react'
import Todo from './Todo'
import { Task } from '../type'

interface Props {
  tasks: Array<Task>
}

const TodoList = ({tasks}:Props) => {
  return (
    <div className='todos_list'>
      <ul>
        {
          tasks.map((todo => {
            return <Todo key={todo.id} todo={todo} />
          }))
        }
      </ul>
    </div>
  )
}

export default TodoList