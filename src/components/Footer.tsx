import React from 'react'
import { ShowTasks, Task } from '../type'

interface Props {
  tasks: Task[],
  onSelectFilter: (cant: ShowTasks) => void,
  deleteAllTasks: () => void
}

const Footer = ({ tasks, onSelectFilter, deleteAllTasks }: Props) => {
  return (
    <div className='footer'>
      <div style={{display: 'flex', alignItems: 'center'}}> {tasks?.filter(x => x.completed === false).length} tarea pendiente </div>
      <button onClick={() => onSelectFilter('All')}>All</button>
      <button onClick={() => onSelectFilter('Active')}>Active </button>
      <button onClick={() => onSelectFilter('Completed')}>Completed </button>
      <button onClick={deleteAllTasks}> Borrar completados</button>
    </div>
  )
}

export default Footer