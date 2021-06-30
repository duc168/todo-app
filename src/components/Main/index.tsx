import React, { useEffect, useState } from "react";
import { ITask } from "../../interfaces/task";
import Form from "./Form";
import Tasks from "./Tasks";
function Main() {
  const [tasks, updateTasks] = useState<ITask[]>([])
  const addTask = (newTask: ITask) => {
    const currentTasks = [...tasks]
    currentTasks.push(newTask)
    updateTasks(currentTasks)
  }
  const removeTask = (taskId: number) => {
    const currentTasks = [...tasks]
    updateTasks(currentTasks.filter(task => task.id !== taskId))
  }
  useEffect(() => {
    const cachedTasks = localStorage.getItem('tasks')
    if (cachedTasks !== null) {
      updateTasks(JSON.parse(cachedTasks))
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  return <div className="app-main">
    <Form addTask={addTask} />
    <Tasks tasks={tasks} removeTask={removeTask} />    
  </div>;
}
export default Main;
