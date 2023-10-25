import { IColumn } from '../../types/columnTypes'
import { IDragingState } from '../../types/taskTypes'
import { Dispatch,SetStateAction} from 'react'

export interface IColumnProps {
    options: IColumn,
    draging: IDragingState,
    setdraging: Dispatch<SetStateAction<IDragingState>>
}