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

  const onManageTextEdit = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, completed: boolean) => {
    !completed && setEditEnable(true)
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
    <div className='todo' style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{display: 'flex'}}>
        <div onClick={(e) => onManageTextEdit(e, todo.completed)}
          style={todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
          {editEnable ? <input onKeyUp={(e) => onHandleEscapeEdit(e, todo.id)} type="text" defaultValue={todo.text} /> : todo.text}
        </div>
        <div>
          <input type="checkbox" placeholder='' onChange={() => onHandleUdpate(todo.id)} checked={todo.completed} />
        </div>
      </div>
      <div>
        <button onClick={() => onDeleteTask(todo.id)} style={{ border: "1px solid red", padding: '5px', background: 'red', color: 'white' }}>delete</button>
      </div>
    </div>
  )
}

export default Todo