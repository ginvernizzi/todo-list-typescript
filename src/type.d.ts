export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export type TaskAction = {
  type: 'init'
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


