import { makeAutoObservable } from "mobx"
import { ITask,ITasksStore } from '../types'

class TasksStore implements ITasksStore {
    public tasks: ITask[]
    public currentId: number

    constructor () {
        this.tasks = []
        this.currentId = 0
        makeAutoObservable(this)
    }

    addTask = (taskName: string) => {
        this.tasks.push(
            {
                title: taskName,
                id: this.currentId
            }
        )

        this.currentId++
    }

    removeTask = (id: number) => {
        this.tasks = this.tasks.filter((task)=> task.id !== id)
    }
    
}

export default TasksStore