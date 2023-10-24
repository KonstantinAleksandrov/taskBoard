import { IColumn ,IDragingState} from '../../types'
import { Dispatch,SetStateAction} from 'react'

export interface IColumnProps {
    options: IColumn,
    draging: IDragingState,
    setdraging: Dispatch<SetStateAction<IDragingState>>
}