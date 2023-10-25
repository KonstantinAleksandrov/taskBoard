import './style.css'
import CloseCross from '../../components/CloseCross/CloseCross'
import { FC ,useContext } from 'react'
import TaskCreator from '../TaskCreator/index.'
import { observer } from 'mobx-react-lite'
import Task from '../Task/Task'
import { IColumnProps } from './types'
import { TableContext } from '../../context/tableContext'
import { IColumn } from '../../types/columnTypes'


const Column: FC<IColumnProps> = ({columnId, draging, setdraging}) => {
    const tableContext = useContext(TableContext)
    const column = tableContext.getColumn(columnId) as IColumn

    return (
        <div className="column" data-testid='column'>

            <div className='column__header'>
                <div className='column__header-title' data-testid='column-title'>{column.title}</div>
                <CloseCross 
                closeHandler={() => {
                    tableContext.removeColumn(columnId)
                   /*  columnsStore.saveColumnsInLocalStorage() */
                }}
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
                                setdraging,
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