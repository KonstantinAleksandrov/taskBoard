import { IDragingState } from '../../types/tableTypes'
import { Dispatch,SetStateAction } from 'react'

export interface ITaskProps {
    taskIndex: number,
    taskId: number,
    draging: IDragingState,
    setDraging: Dispatch<SetStateAction<IDragingState>>,
    columnId: number
}