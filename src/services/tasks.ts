import { useEffect } from "react"
import { Task, TaskAction } from "../type"

const url_tasks = 'https://api.jsonbin.io/v3/b/645e807e9d312622a35cf953'

export const getAllTask = (taskDispatcher: React.Dispatch<TaskAction>) => {
  // fetch todos from server
  console.log("get All task");
  useEffect(() => {
    fetch(url_tasks)
      .then(async res => {
        if (res.ok) {
          return await res.json()
        }
        throw new Error('Error fetching todos')
      })
      .then(data => {
        taskDispatcher({ type: 'init', payload: data.record })
      })
      .catch(err => {
        console.error(err)
      })
  }, [])
}

export const updateTasks = ((tasks: Array<Task>) => {
  console.log("service uodate tasks", tasks);
  fetch(url_tasks, {
    headers: {
      "Content-Type": "Application/json",
      "x-master-key": "$2b$10$CecGM1zR.cD4JCHp9Cvl9OopBFpX.hMEptVtPmU9R8ZNBPsmnA1UC",
      "x-access-key": "$2b$10$sB/mqUE8GgWkPlGHk2kCveSc5W1z0BesypkzDxaWqbtpLbBya.oei"
    },
    method: 'PUT',
    body: JSON.stringify(tasks)
  })
    .catch(err => {
      console.error("error vieja", err)
    })
    .finally(() => {
      console.log("fin");
    })
})
