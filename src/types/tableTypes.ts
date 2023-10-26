
export interface ITask{
    title: string,
    id: number,
    dateCreate: string,
    fileList: string[]
}

export interface IColumn {
    title: string,
    id: number,
    tasks: ITask[]
}

export interface IExtendedTask extends ITask {
    index: number
}

export interface IDragingState extends IExtendedTask {
    columnId: number,
}

export interface ITableStore {
    columns: IColumn[],
    columnId: number,
    taskId: number
    createNewColumn: ( columnName: string) => void,
    removeColumn: ( id: number ) => void,
}