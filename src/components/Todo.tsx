import React from 'react'
import { Task } from '../type'
import manageTasks from '../context/taskReducer'

interface Prop {
  todo: Task,
  updateTask: (id:number) => void
}

const Todo = ({ todo, updateTask }: Prop) => {

  const onHandleUdpate = (id: number) => {
    updateTask(id)
  }

  return (
    <div className='todo' style={{ display: 'flex', justifyContent: '' }}>
      <div style={todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}> {todo.text}  </div>
      <div>
        <input type="checkbox" placeholder='' onChange={() => onHandleUdpate(todo.id)} checked={todo.completed} />
      </div>
      <button style={{ border: "1px solid red", padding: '2px', background: 'red', color: 'white' }}>delete</button>
    </div>
  )
}

export default Todo