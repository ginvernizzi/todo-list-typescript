import React from 'react'
import { Task } from '../type'
import manageTasks from '../context/taskReducer'

interface Prop {
  todo: Task,
  // deleteTodo: () => ()
}

const Todo = ({ todo }: Prop) => {

  const [, taskDispatcher] = manageTasks()

  const onHandleUdpate = (id: number) => {
    taskDispatcher({
      type: "update",
      payload: {
        id: id
      }
    })
  }

  return (
    <div className='todo' style={{ display: 'flex', justifyContent: '' }}>
      <div style={todo.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}> {todo.text}  </div>
      <div>
        <input type="checkbox" placeholder='' onChange={() => onHandleUdpate(todo.id)} />
      </div>
      <button style={{ border: "1px solid red", padding: '2px', background: 'red', color: 'white' }}>delete</button>
    </div>
  )
}

export default Todo