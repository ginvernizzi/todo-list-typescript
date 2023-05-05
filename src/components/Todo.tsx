import React from 'react'

const Todo = ({todo}) => {
    
  return (
    <div className='todo'>
        <li key={todo.id}> {todo.text}  </li>
    </div>
  )
}

export default Todo