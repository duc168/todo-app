import React from 'react';
import { ITask } from '../../../interfaces/task';
import Task from './Task';
interface Params {
    tasks: ITask[];
    removeTask: (taskId: number) => void
}
function Tasks({ tasks, removeTask }: Params) {
    return <div className="app-main-tasks">
        {tasks.map((task, idx) => {
            return <Task key={task.id} order={idx + 1} task={task} removeTask={removeTask} />            
        })}
    </div>
}
export default Tasks;