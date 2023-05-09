import React, { useContext, useEffect, useState } from 'react'
import Todo from './Todo'
import Footer from './Footer'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import manageTasks from '../context/taskReducer'



const Todos = () => {
  const [tasks, taskDispatcher] = manageTasks()

  useEffect(() => {
    taskDispatcher({ type: 'init' })
  })

  const deleteTask = (id: number) => {
    taskDispatcher({ type: 'delete', payload: {id} })
  }

  return (
    <>
      <div className='todos'>
        <TodoInput />
        <TodoList tasks={tasks} />
        <Footer />
      </div>
    </>
  )
}

export default Todos