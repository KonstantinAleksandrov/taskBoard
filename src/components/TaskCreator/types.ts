import { IAddStore,ITasksStore } from '../../types'

export interface ITaskCreator {
    addStore: IAddStore,
    tasksStore: ITasksStore
}