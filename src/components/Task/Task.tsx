import './style.css'
import { FC } from 'react'
import CloseCross from '../CloseCross/CloseCross'
import { dragStartHandler, dragLeaveHandler,dragEndHandler,dragOverHandler,dragDropHandler } from '../../utils/dndUtils'
import columnsStore from '../../store/ColumnsStore'
import { ITaskProps } from './types'

const Task: FC<{options: ITaskProps}> = ({options}) => {

    const {tasksStore, taskIndex, task, setdraging, draging} = options

    const deleteTask = () => {
        tasksStore.removeTask(task.id) 
        columnsStore.saveColumnsInLocalStorage()
    }

    return (
        <div 
        className="task" 
        draggable={true}
        onDragStart={(e)=> dragStartHandler(setdraging, {...task, index: taskIndex}, tasksStore,e.target as HTMLElement) }
        onDragLeave={(e)=> dragLeaveHandler(e)}
        onDragEnd={(e)=> dragEndHandler(e)}
        onDragOver={(e)=> dragOverHandler(e,draging, {...task, index: taskIndex}, tasksStore)}
        onDrop={(e)=> dragDropHandler(e, draging, {...task, index: taskIndex}, tasksStore)}
        >
            <div className='task__header'>
                <div className='task__header-title'>{task.title}</div>
                <CloseCross closeHandler={deleteTask}/>
            </div>
            <div className='task__body'>
                <div className='task__body-images task__images'>
                    {task.taskFileList.map((image,index)=>{
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

export default Task