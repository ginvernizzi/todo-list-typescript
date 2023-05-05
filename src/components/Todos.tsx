import React from 'react'
import Todo from './Todo'

const mockTodos = [
  { id: '1', text: 'Aprender React', completed: false },
  { id: '2', text: 'Aprender TypeScript', completed: true },
  { id: '3', text: 'Aprender Vite', completed: false },
]

const Todos = () => {
  return (
    <div className='todos'>
      <ul>
        {
          mockTodos.map((todo => {
            return <Todo key={todo.id} todo={todo} />
          }))
        }
      </ul>
    </div>
  )
}

export default Todos