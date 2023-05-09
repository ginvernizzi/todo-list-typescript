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
  type: 'delete',
  payload: {
    id: number
  }
}


