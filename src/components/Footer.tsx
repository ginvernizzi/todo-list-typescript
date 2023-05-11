import React from 'react'
import { ShowTasks, Task } from '../type'

interface Props {
  tasks: Task[],
  onSelectFilter: (cant: ShowTasks) => void,
  deleteAllTasks: () => void
}

// const onSelectFilter = () => {
//   onSelectFilter
// }

const Footer = ({ tasks, onSelectFilter, deleteAllTasks }: Props) => {
  return (
    <div className='footer'>
      <div>{tasks?.filter(x => x.completed === false).length} tarea pendiente</div>
      <button style={{ padding: "3px", border: '1px solid pink' }} onClick={() => onSelectFilter('All')}>All</button>
      <button style={{ padding: "3px", border: '1px solid pink' }} onClick={() => onSelectFilter('Active')}>Active</button>
      <button style={{ padding: "3px", border: '1px solid pink' }} onClick={() => onSelectFilter('Completed')}>Completed</button>
      <button onClick={deleteAllTasks}>Borrar completados</button>
    </div>
  )
}

export default Footer