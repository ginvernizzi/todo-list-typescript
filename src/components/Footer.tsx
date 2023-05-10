import React from 'react'
import { ShowTasks, Task } from '../type'

interface Props {
  tasks: Task[],
  onSelectFilter: (cant: ShowTasks) => void
}

// const onSelectFilter = () => {
//   onSelectFilter
// }

const Footer = ({ onSelectFilter, tasks }: Props) => {
  return (
    <div className='footer'>
      <div>{tasks?.filter(x => x.completed === false).length} tarea pendiente</div>
      <button style={{ padding: "3px", border: '1px solid pink' }} onClick={() => onSelectFilter('All')}>All</button>
      <button style={{ padding: "3px", border: '1px solid pink' }} onClick={() => onSelectFilter('Active')}>Active</button>
      <button style={{ padding: "3px", border: '1px solid pink' }} onClick={() => onSelectFilter('Completed')}>Completed</button>
      <div>Borrar completados</div>
    </div>
  )
}

export default Footer