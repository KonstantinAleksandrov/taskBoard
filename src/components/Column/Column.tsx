import './style.css'
import CloseCross from '../CloseCross/CloseCross'
import { IColumn } from '../../types'
import { FC } from 'react'
import columnsStore from '../../store/ColumnsStore'
import AddStore from '../../store/addStore'
import Add from '../Add/Add'
import { observer } from 'mobx-react-lite'
import Task from '../Task/Task'

interface IColumnProps {
    options: IColumn
}

const Column: FC<IColumnProps> = observer( ({options}) => {
    const { id,tasksStore,title  } = options
    const { removeColumn } = columnsStore

    return (
        <div className="column">

            <div className='column__header'>
                <div className='column__header-title'>{title}</div>
                <CloseCross handler={ () => removeColumn(id) } id={id}/>
            </div>

            <div className='column__body'>
                <ul className='column__body-taskList column__taskList'>
                    {tasksStore.tasks.map((task)=>{
                        return <Task 
                        options={
                            {
                                title: task.title,
                                removeHendler: tasksStore.removeTask,
                                id: task.id
                            }
                        }
                        key={task.id} 
                        />
                    })}
                </ul>
            </div>

            <div className='column__footer'>
                <Add 
                options={
                    {
                        addType: 'task',
                        addStore: new AddStore(),
                        tasksStore: tasksStore
                    }
                }
                />
            </div>

        </div>
    )
} )

export default Column