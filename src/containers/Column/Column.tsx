import './style.css'
import { CloseCrossButton } from '../../components'
import { TaskCreator } from '../TaskCreator'
import { Task }  from '../Task'
import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { IColumnProps } from './IColumnProps'
import { IColumn } from '../../types'
import { dataService } from '../../services'
import { useTableStore } from '../../hooks'


const Column: FC<IColumnProps> = ({columnId, draging, setDraging}) => {
    const tableStore = useTableStore()
    const column = tableStore.getColumn(columnId) as IColumn

    const deleteColumn = () => {
        tableStore.removeColumn(columnId)
        dataService.saveTableData(tableStore.columns)
    }

    return (
        <div className="column" data-testid='column'>

            <div className='column__header'>
                <div className='column__header-title' data-testid='column-title'>{column.title}</div>
                <CloseCrossButton 
                closeHandler={deleteColumn}
                />
            </div>

            <div className='column__body'>
                <ul className='column__body-taskList column__taskList'>
                    {column.tasks.map((task,index)=>{
                        return <Task 
                        options={
                            {
                                taskId: task.id,
                                taskIndex: index,
                                columnId,
                                draging,
                                setDraging,
                            }
                        }
                        key={task.id} 
                        />
                    })}
                </ul>
            </div>

            <div className='column__footer'>
                <TaskCreator columnId={columnId}/>
            </div>

        </div>
    )
}

export default observer(Column)