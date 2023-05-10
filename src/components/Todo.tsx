import React from 'react'
import { Task } from '../type'

interface Prop {
  todo: Task,
  updateTask: (id:number) => void,
  deleteTask: (id:number) => void
}

const Todo = ({ todo, updateTask, deleteTask }: Prop) => {

  const onHandleUdpate = (id: number) => {
    updateTask(id)
  }

  const onDeleteTask = (id:number) => {
    deleteTask(id)
  }

  return (
    <div className='todo' style={{ display: 'flex', justifyContent: '' }}>
      <div style={todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}> {todo.text}  </div>
      <div>
        <input type="checkbox" placeholder='' onChange={() => onHandleUdpate(todo.id)} checked={todo.completed} />
      </div>
      <button onClick={() => onDeleteTask(todo.id)} style={{ border: "1px solid red", padding: '2px', background: 'red', color: 'white' }}>delete</button>
    </div>
  )
}

export default Todo