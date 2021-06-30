import React from 'react';
import { ITask } from '../../../../interfaces/task';
interface Params {
    task: ITask
    removeTask: (taskId: number) => void
    order: number
}
function Task({ task, removeTask, order }: Params) {
    const onClickRemoveButton = (taskId: number) => {
        console.log('click remove button', taskId)
        removeTask(taskId)
    }
    return <div className="app-main-tasks-task">
        <div>
        <span>{order}. </span>
        <span>{task.name}</span>
        </div>
        <button 
        className="app-main-tasks-task-removeBtn"
        onClick={() => onClickRemoveButton(task.id)}
        >x</button>
        </div>
}
export default Task;