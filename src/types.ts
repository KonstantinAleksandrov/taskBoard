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

export interface IExtendedTask extends ITask {
    index: number
}

export interface ITasksStore {
    tasks: ITask[]
    currentId: number
    columnId: number
    addTask: (taskName: string) => void
    removeTask: (id: number) => void
    moveTasksWithinColumn: (dragIndex: number  , hoverIndex: number) => void,
    insertTaskAnywhere: (index: number,title: string ) => void
}

export interface IColumn {
    title: string,
    id: number,
    tasksStore: ITasksStore
}

export interface IDragingState extends IExtendedTask , ITasksStore{
    
}