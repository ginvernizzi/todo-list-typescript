import React, { useEffect, useState } from 'react'
import { Task } from '../type'

interface Prop {
  todo: Task,
  updateTask: (id: number) => void,
  deleteTask: (id: number) => void,
  updateTaskText: (id: number, text: string) => void
}

const Todo = ({ todo, updateTask, updateTaskText, deleteTask }: Prop) => {
  const [editEnable, setEditEnable] = useState(false)

  const onHandleUdpate = (id: number) => {
    updateTask(id)
  }

  const onEditTextTask = (id: number, text: string) => {
    // editTextTask(id, text)
  }

  const onDeleteTask = (id: number) => {
    deleteTask(id)
  }

  const onHandleEscapeEdit = (e: React.KeyboardEvent<HTMLDivElement>, id: number) => {
    console.log(e);
    if (e.key === 'Escape') {
      setEditEnable(false)
    }

    if (e.key === 'Enter') {
      updateTaskText(id, e.target.value)
      setEditEnable(false)
    }
  }

  return (
    <div className='todo' style={{ display: 'flex', justifyContent: '' }}>
      <div onClick={(e) => setEditEnable(true)}
            style={todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
        {editEnable ? <input onKeyUp={(e) => onHandleEscapeEdit(e, todo.id)} type="text" defaultValue={todo.text} /> : todo.text}
      </div>
      <div>
        <input type="checkbox" placeholder='' onChange={() => onHandleUdpate(todo.id)} checked={todo.completed} />
      </div>
      <button onClick={() => onDeleteTask(todo.id)} style={{ border: "1px solid red", padding: '2px', background: 'red', color: 'white' }}>delete</button>
    </div>
  )
}

export default Todo