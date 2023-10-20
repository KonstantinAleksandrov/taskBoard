type addTask = (taskName: string, date: string,fileList: string[]) => void
type addFile = (file: string) => void

export type addtype = 'column' | 'task'

export interface ITitle {
    columnName: string,
    taskName: string
}

export interface IAddStore {
    openedColumnForm: boolean
    openedTaskForm: boolean
    title: ITitle 
    taskFileList: string[]
    isLoading: boolean
    toggleFormColumn: () => void
    toggleFormTask: () => void
    changeTitle: ( title: string, type: addtype) => void
    addFile: addFile
    clearFileList: () => void
    changeLoading: () => void
}

export interface ITask{
    title: string,
    id: number,
    dateCreate: string,
    taskFileList: string[]
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
    insertTaskAnywhere: (task: IExtendedTask ,index: number)  => void
}

export interface IColumn {
    title: string,
    id: number,
    tasksStore: ITasksStore,
    addStore: IAddStore
}

export interface IDragingState extends IExtendedTask , ITasksStore{
    htmlElement: HTMLElement
}

export interface IAddFormTextarea {
    value: string,
    handler: (title: string,type: 'column' | 'task') => void
}

export interface IAddTaskHandlers {
    addTask: addTask,
    addFile: addFile,
    clearFileList: () => void
}

export interface IAddForm{
    placeholder: string,
    buttonName: string,
    toggleHandler: () => void,
    textareaData: IAddFormTextarea,
    addType: addtype,
    addColumn?: (columnName: string, tasksStore: ITasksStore, addStore: IAddStore ) => void,
    addTaskHandlers?: IAddTaskHandlers,
    changeLoading: () => void,
    isLoading: boolean,
    clearFileList: () => void,
    taskFileList: string[]
}

export interface IColumnsStore {
    columns: IColumn[],
    currentId: number,
    addColumn: ( columnName: string, tasksStore: ITasksStore,addStore: IAddStore ) => void,
    removeColumn: ( id: number ) => void,
    saveColumnsInLocalStorage: () => void,
    getColumnsOutLocalStorage: () => void
}