import { ICreatorStore } from '../../types/creatorTypes'
import { ITasksStore } from '../../types/taskTypes'

export interface ITaskCreator {
    creatorStore: ICreatorStore,
    tasksStore: ITasksStore
}