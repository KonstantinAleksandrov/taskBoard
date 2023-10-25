import { IDragingState } from '../../types/taskTypes'
import { Dispatch,SetStateAction} from 'react'

export interface IColumnProps {
    columnId: number,
    draging: IDragingState,
    setdraging: Dispatch<SetStateAction<IDragingState>>
}