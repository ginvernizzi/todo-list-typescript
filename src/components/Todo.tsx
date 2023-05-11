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
    <div className='todo'>
      <div className='todo_item'>
        <input type="checkbox" placeholder='' onChange={() => onHandleUdpate(todo.id)} checked={todo.completed} />
      </div>
      <div className='todo_item' onClick={(e) => onManageTextEdit(e, todo.completed)}
        style={todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
        {editEnable ? <div> <input onKeyUp={(e) => onHandleEscapeEdit(e, todo.id)} type="text" defaultValue={todo.text} /></div> : <div>{todo.text}</div>}
      </div>
      <div className='todo_item'>
        <button onClick={() => onDeleteTask(todo.id)} >delete</button>
      </div>
    </div>
  )
}

export default Todo