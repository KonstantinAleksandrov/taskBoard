import './style.css'
import { CloseCross } from '../../components'
import { TaskCreator } from '../TaskCreator'
import { Task }  from '../Task'
import { FC ,useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { IColumnProps } from './types'
import { TableContext } from '../../contexts'
import { IColumn } from '../../types'
import { saveTableData } from '../../services'


const Column: FC<IColumnProps> = ({columnId, draging, setDraging}) => {
    const tableContext = useContext(TableContext)
    const column = tableContext.getColumn(columnId) as IColumn

    const deleteColumn = () => {
        tableContext.removeColumn(columnId)
        saveTableData()
    }

    return (
        <div className="column" data-testid='column'>

            <div className='column__header'>
                <div className='column__header-title' data-testid='column-title'>{column.title}</div>
                <CloseCross 
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