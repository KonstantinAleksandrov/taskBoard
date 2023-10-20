import { makeAutoObservable } from "mobx"
import { ITask,ITasksStore, IExtendedTask } from '../types'

class TasksStore implements ITasksStore {
    public tasks: ITask[]
    public currentId: number

    constructor (public columnId: number) {
        this.columnId = columnId
        this.tasks = []
        this.currentId = 0
        makeAutoObservable(this)
    }

    addTask = (taskName: string,date: string, fileList: string[]) => {
        this.tasks.push(
            {
                title: taskName,
                id: this.currentId,
                dateCreate: date,
                taskFileList: [...fileList]
            }
        )


        this.currentId++
    }

    removeTask = (id: number) => {
        this.tasks = this.tasks.filter((task)=> task.id !== id)
    }

    moveTasksWithinColumn = ( dragIndex: number  , hoverIndex: number ) => {
        const dragItem = this.tasks[dragIndex]
        const hoverItem = this.tasks[hoverIndex]
        const updatedTasks = [...this.tasks]
        updatedTasks[dragIndex] = hoverItem
        updatedTasks[hoverIndex] = dragItem
        this.tasks = updatedTasks
    }

    insertTaskAnywhere = (task: IExtendedTask ,index: number ) => {
        const currentColumns = [...this.tasks.slice(0,index)]
        const currentTask = {title: task.title, id: this.currentId,dateCreate: task.dateCreate,taskFileList: [...task.taskFileList] }
        currentColumns.push(currentTask)
        this.tasks = [...currentColumns,...this.tasks.slice(index)]
        this.currentId++
    }
    
}

export const createTasksStore = (id: number): ITasksStore => {
    return new TasksStore(id)
} 

export default TasksStore