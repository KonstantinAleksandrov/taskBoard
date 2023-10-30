import { IColumn } from './IColumn'
import { ITask } from './ITask'
import { IDragingState } from './IDragingState'

export interface ITableStore {
    columns: IColumn[],
    columnId: number,
    taskId: number
    createNewColumn: ( columnName: string) => void,
    removeColumn: ( id: number ) => void,
    getColumn: ( id: number ) => IColumn | undefined,
    addTask: ( taskName: string, date: string, fileList: string[], columnId: number ) => void,
    removeTask: ( taskId: number, columnId: number ) => void,
    getTask: ( taskId: number, columnId: number ) => ITask | undefined,
    moveTasksWithinColumn: ( dragIndex: number , dropIndex: number, columnId: number ) => void,
    insertTaskAnywhere: ( task: IDragingState , dropIndex: number, dropColumnId: number ) => void,
    renderTableData: ( tableData: IColumn[] ) => void
}