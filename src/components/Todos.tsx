import React, { useContext, useEffect, useState } from 'react'
import Footer from './Footer'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import manageTasks from '../context/taskReducer'


const Todos = () => {
  const [tasks, taskDispatcher] = manageTasks()
  
  const updateTask = (id: number) => {
    console.log("id", id)
    taskDispatcher({
      type: "update",
      payload: {
        id: id
      }
    })
  }

  const deleteTask = (id: number) => {
    taskDispatcher({ type: 'delete', payload: {id} })
  }

  return (
    <>
      <div className='todos'>
        <TodoInput />
        <TodoList tasks={tasks} updateTask={updateTask}/>
        <Footer />
      </div>
    </>
  )
}

export default Todos