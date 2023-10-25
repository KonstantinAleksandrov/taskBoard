import './style.css'
import { FC , useContext} from 'react'
import { TableContext } from '../../context/tableContext'
import CloseCross from '../../components/CloseCross/CloseCross'
import { dragStartHandler, dragLeaveHandler,dragEndHandler,dragOverHandler,dragDropHandler } from '../../utils/dndUtils'
import { ITaskProps } from './types'
import { ITask } from '../../types/taskTypes'

const Task: FC<{options: ITaskProps}> = ({options}) => { 
    const {taskIndex, setdraging, draging, columnId, taskId} = options
    const tableContext = useContext(TableContext)
    const task = tableContext.getTask(taskId,columnId) as ITask

    const deleteTask = () => {
        tableContext.removeTask(task.id,columnId) 
       /*  columnsStore.saveColumnsInLocalStorage() */
    }

    return (
        <div 
        className="task" 
        draggable={true}
        onDragStart={(e)=> dragStartHandler(setdraging,  {...task, index: taskIndex }, columnId, e.target as HTMLElement ) }
        onDragLeave={(e)=> dragLeaveHandler(e)}
        onDragEnd={(e)=> dragEndHandler(e)}
        onDragOver={(e)=> dragOverHandler(e)}
        onDrop={(e)=> dragDropHandler(e, draging, {...task, index: taskIndex},columnId)}
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

export default Task