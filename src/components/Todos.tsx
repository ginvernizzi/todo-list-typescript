import React, { useContext, useEffect, useState } from 'react'
import Footer from './Footer'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import manageTasks from '../context/taskReducer'
import { ShowTasks, Task } from '../type'
import { getAllTask, updateTasks } from '../services/tasks'

const newId = () => {
  return Math.round(Math.random() * 1000)
}

const Todos = () => {
  const [stateTasks, taskDispatcher] = manageTasks()
  const [categoryFilter, setCategoryFilter] = useState<ShowTasks>('All')

  useEffect(() => {
    stateTasks.async && updateTasks(stateTasks.tasks)
  }, [stateTasks.tasks, stateTasks.async])

  getAllTask(taskDispatcher)

  const filter = () => {
    switch (categoryFilter) {
      case 'All':
        return stateTasks.tasks
      case 'Active':
        return stateTasks.tasks.filter(x => x.completed === false)
      case 'Completed':
        return stateTasks.tasks.filter(x => x.completed === true)
      default:
        return stateTasks.tasks;
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

  const updateTaskText = (id:number, text:string) => {
    taskDispatcher({
      type: "updateText",
      payload: {
        id: id,
        text: text
      }
    })
  } 

  const deleteTask = (id: number) => {
    console.log(id)
    taskDispatcher({ type: 'delete', payload: { id } })
  }

  const deleteAllTasks = () => {
    taskDispatcher({ type: 'deleteAllCompleted' })
  }

  const addTask = (text:string) => {
    taskDispatcher({ type: 'create', payload: {
      id: newId(), 
      title: text, 
      completed: false
    }})
  }

  return (
    <>
      <div className='todos'>
        <TodoInput addTask={addTask} />
        <TodoList tasks={filter()} updateTask={updateTask} deleteTask={deleteTask} updateTaskText={updateTaskText} />
        <Footer onSelectFilter={onSelectFilter} tasks={stateTasks.tasks} deleteAllTasks={deleteAllTasks}/>
      </div>
    </>
  )
}

export default Todos