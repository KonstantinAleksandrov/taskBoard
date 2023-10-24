import './style.css'
import CloseCross from '../CloseCross/CloseCross'
import { FC } from 'react'
import columnsStore from '../../store/ColumnsStore'
import TaskCreator from '../TaskCreator/index.'
import { observer } from 'mobx-react-lite'
import Task from '../Task/Task'
import { IColumnProps } from './types'


const Column: FC<IColumnProps> = ({options, draging, setdraging}) => {
    const { id, tasksStore, title, addStore } = options
    const { removeColumn } = columnsStore

    return (
        <div className="column" data-testid='column'>

            <div className='column__header'>
                <div className='column__header-title' data-testid='column-title'>{title}</div>
                <CloseCross 
                closeHandler={() => {
                    removeColumn(id)
                    columnsStore.saveColumnsInLocalStorage()
                }}
                />
            </div>

            <div className='column__body'>
                <ul className='column__body-taskList column__taskList'>
                    {tasksStore.tasks.map((task,index)=>{
                        return <Task 
                        options={
                            {
                                task,
                                taskIndex: index,
                                draging,
                                setdraging,
                                tasksStore
                            }
                        }
                        key={task.id} 
                        />
                    })}
                </ul>
            </div>

            <div className='column__footer'>
                <TaskCreator addStore={addStore} tasksStore={tasksStore}/>
            </div>

        </div>
    )
}

export default observer(Column)