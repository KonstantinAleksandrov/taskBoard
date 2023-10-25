import { ITasksStore } from './taskTypes'
import { ICreatorStore } from './creatorTypes'

export interface IColumn {
    title: string,
    id: number,
    tasksStore: ITasksStore,
    creatorStore: ICreatorStore
}

export interface IColumnsStore {
    columns: IColumn[],
    currentId: number,
    addColumn: ( columnName: string, tasksStore: ITasksStore,creatorStore: ICreatorStore ) => void,
    removeColumn: ( id: number ) => void,
    saveColumnsInLocalStorage: () => void,
    getColumnsOutLocalStorage: () => void
}