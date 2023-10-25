type addFile = (file: string) => void


export interface ITitle {
    columnName: string,
    taskName: string
}

export interface ICreatorStore {
    openedColumnForm: boolean
    openedTaskForm: boolean
    title: ITitle 
    taskFileList: string[]
    isLoading: boolean
    toggleFormColumn: () => void
    toggleFormTask: () => void
    changeTitle: ( title: string, type: 'column' | 'task') => void
    addFile: addFile
    clearFileList: () => void
    changeLoading: () => void
}