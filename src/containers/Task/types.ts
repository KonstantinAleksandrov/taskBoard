import { ITask ,ITasksStore,IDragingState} from '../../types/taskTypes'
import { Dispatch,SetStateAction } from 'react'

export interface ITaskProps {
    taskIndex: number,
    taskId: number,
    draging: IDragingState,
    setdraging: Dispatch<SetStateAction<IDragingState>>,
    columnId: number
}