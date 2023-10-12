export type addtype = 'column' | 'task'

export interface ITitle {
    columnName: string,
    taskName: string
}

export interface IAddStore {
    openedColumnForm: boolean
    openedTaskForm: boolean
    title: ITitle 
    toggleFormColumn: () => void
    toggleFormTask: () => void
    changeTitle: ( title: string, type: addtype) => void
}

export interface ITask{
    title: string,
    id: number,
}

export interface ITasksStore {
    tasks: ITask[]
    currentId: number
    addTask: (taskName: string) => void
    removeTask: (id: number) => void
}

export interface IColumn {
    title: string,
    id: number,
    tasksStore: ITasksStore
}
