type addTask = (taskName: string, date: string,fileList: string[]) => void

export interface ITask{
    title: string,
    id: number,
    dateCreate: string,
    fileList: string[]
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

export interface IDragingState extends IExtendedTask , ITasksStore{
    htmlElement: HTMLElement
}