import { ITask ,ITasksStore,IDragingState} from '../../types'
import { Dispatch,SetStateAction } from 'react'

export interface ITaskProps {
    taskIndex: number,
    task: ITask,
    draging: IDragingState,
    setdraging: Dispatch<SetStateAction<IDragingState>>,
    tasksStore: ITasksStore
}