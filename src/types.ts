type addTask = (taskName: string, date: string) => void

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
    dateCreate: string
}

export interface IExtendedTask extends ITask {
    index: number
}

export interface ITasksStore {
    tasks: ITask[]
    currentId: number
    columnId: number
    addTask: addTask
    removeTask: (id: number) => void
    moveTasksWithinColumn: (dragIndex: number  , hoverIndex: number) => void,
    insertTaskAnywhere: (task: IExtendedTask ,title: string ) => void
}

export interface IColumn {
    title: string,
    id: number,
    tasksStore: ITasksStore
}

export interface IDragingState extends IExtendedTask , ITasksStore{
    htmlElement: HTMLElement
}

export interface IAddFormTextarea {
    value: string,
    handler: (title: string,type: 'column' | 'task') => void
}

export interface IAddForm{
    placeholder: string,
    buttonName: string,
    toggleHandler: () => void,
    textareaData: IAddFormTextarea,
    addType: addtype,
    addColumn?: (columnName: string, store: ITasksStore ) => void,
    addTask?: addTask
}