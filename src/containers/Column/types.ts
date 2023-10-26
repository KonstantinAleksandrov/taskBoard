import { IDragingState } from '../../types'
import { Dispatch,SetStateAction} from 'react'

export interface IColumnProps {
    columnId: number,
    draging: IDragingState,
    setDraging: Dispatch<SetStateAction<IDragingState>>
}