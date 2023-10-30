import './style.css'
import { FC } from 'react'
import { CloseCross } from '../../components'
import { dragStartHandler, dragLeaveHandler,dragEndHandler,dragOverHandler,dragDropHandler } from '../../utils'
import { ITaskProps } from './ITaskProps'
import { ITask } from '../../types'
import { dataService } from '../../services'
import { observer } from 'mobx-react-lite'
import { useTableStore } from '../../hooks'

const Task: FC<{options: ITaskProps}> = ({options}) => { 
    const {taskIndex, setDraging, draging, columnId, taskId} = options
    const tableStore = useTableStore()
    const task = tableStore.getTask(taskId,columnId) as ITask

    const deleteTask = () => {
        tableStore.removeTask(task.id,columnId) 
        dataService.saveTableData(tableStore.columns)
    }

    return (
        <div 
        className="task" 
        draggable={true}
        onDragStart={(e)=> dragStartHandler(setDraging,  {...task, index: taskIndex }, columnId) }
        onDragLeave={(e)=> dragLeaveHandler(e)}
        onDragEnd={(e)=> dragEndHandler(e)}
        onDragOver={(e)=> dragOverHandler(e)}
        onDrop={(e)=> dragDropHandler(e, draging, {...task, index: taskIndex},columnId,tableStore)}
        >
            <div className='task__header'>
                <div className='task__header-title'>{task.title}</div>
                <CloseCross closeHandler={deleteTask}/>
            </div>
            <div className='task__body'>
                <div className='task__body-images task__images'>
                    {task.fileList.map((image,index)=>{
                        return (
                            <div className='task__images-img' key={index}>
                                 <img src={image} alt="img" draggable={false}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='task__footer'>
                <div className='task__footer-date'>{task.dateCreate}</div>
            </div>
        </div>
    )
}

export default observer(Task)