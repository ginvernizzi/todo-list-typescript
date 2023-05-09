import React, { useState } from 'react'
import { Task } from '../type'

const TodoInput = () => {
  const [taskInput, setTaskInput] = useState('')

  const onInsertTask = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value)
  }

  const onAceptTask = (e:React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter'){
      console.log(taskInput);
      setTaskInput('')
    }
  }

  return (
    <div className='container_task_input'>
      <div className=''>
        <input onKeyUp={(e) => onAceptTask(e)} className='task_input' type="text"
          name="task"
          value={taskInput}
          placeholder='Que quieres hacer?'
          onChange={(e) => onInsertTask(e)} />
      </div>
    </div>
  )
}

export default TodoInput