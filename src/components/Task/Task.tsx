import './style.css'
import { FC } from 'react'
import CloseCross from '../CloseCross/CloseCross'
import { ITask ,ITasksStore,IDragingState} from '../../types'
import { Dispatch,SetStateAction } from 'react'
import { dragStartHandler, dragLeaveHandler,dragEndHandler,dragOverHandler,dragDropHandler } from '../../utils/dndUtils'
import columnsStore from '../../store/ColumnsStore'


interface ITaskProps {
    taskIndex: number,
    task: ITask,
    draging: IDragingState,
    setdraging: Dispatch<SetStateAction<IDragingState>>,
    tasksStore: ITasksStore
}

const Task: FC<{options: ITaskProps}> = ({options}) => {

    const {tasksStore, taskIndex, task, setdraging, draging} = options
   
    return (
        <div 
        className="task" 
        draggable={true}
        onDragStart={(e)=> dragStartHandler(setdraging, {...task, index: taskIndex}, tasksStore,e.target as HTMLElement) }
        onDragLeave={(e)=> dragLeaveHandler(e)}
        onDragEnd={(e)=> dragEndHandler(e)}
        onDragOver={(e)=> dragOverHandler(e,draging,{...task, index: taskIndex}, tasksStore)}
        onDrop={(e)=> dragDropHandler(e, draging, {...task, index: taskIndex}, tasksStore)}
        >
            <div className='task__header'>
                <div className='task__header-title'>{task.title}</div>
                <CloseCross 
                handler={ () => { 
                    tasksStore.removeTask(task.id) 
                    columnsStore.saveColumnsInLocalStorage()
                }}
                 id={task.id}/>
            </div>
            <div className='task__footer'>
                <div className='task__footer-date'>{task.dateCreate}</div>
            </div>
        </div>
    )
}

export default Task