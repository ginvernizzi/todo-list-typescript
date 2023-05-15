export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface StateTask {
  tasks: Array<Task>,
  async: boolean
} 

export type TaskAction = {
  type: 'init',
  payload: Array<Task>
} |
{
  type: 'create',
  payload: Task
} | {
  type: 'update',
  payload: {
    id: number
  }
} | {
  type: 'updateText',
  payload: {
    id: number,
    text: string
  }
} | {
  type: 'delete',
  payload: {
    id: number
  }
} | {
  type: 'deleteAllCompleted'
}

export type ShowTasks = 'All' | 'Active' | 'Completed'


