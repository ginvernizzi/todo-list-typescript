import React, { useContext, useEffect, useState } from 'react'
import Footer from './Footer'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import manageTasks from '../context/taskReducer'
import { ShowTasks } from '../type'

const Todos = () => {
  const [tasks, taskDispatcher] = manageTasks()
  const [categoryFilter, setCategoryFilter] = useState<ShowTasks>('All')

  const filter = () => {
    switch (categoryFilter) {
      case 'All':
        return tasks
      case 'Active':
        return tasks.filter(x => x.completed === false)
      case 'Completed':
        return tasks.filter(x => x.completed === true)
      default:
        return tasks;
    }
  }

  const onSelectFilter = (fitlerTerm:ShowTasks) => {
    setCategoryFilter(fitlerTerm)
  }

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
    console.log(id)
    taskDispatcher({ type: 'delete', payload: { id } })
  }

  return (
    <>
      <div className='todos'>
        <TodoInput />
        <TodoList tasks={filter()} updateTask={updateTask} deleteTask={deleteTask} />
        <Footer onSelectFilter={onSelectFilter} tasks={tasks}/>
      </div>
    </>
  )
}

export default Todos