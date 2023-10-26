import { IDragingState } from '../../types'
import { Dispatch,SetStateAction } from 'react'

export interface ITaskProps {
    taskIndex: number,
    taskId: number,
    draging: IDragingState,
    setDraging: Dispatch<SetStateAction<IDragingState>>,
    columnId: number
}