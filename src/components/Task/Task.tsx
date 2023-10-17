import './style.css'
import { FC } from 'react'
import CloseCross from '../CloseCross/CloseCross'
import { ITask ,ITasksStore,IDragingState} from '../../types'
import { Dispatch,SetStateAction } from 'react'
import { dragStartHandler, dragLeaveHandler,dragEndHandler,dragOverHandler,dragDropHandler } from './utils'


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
        data-index = {taskIndex}
        className="task" 
        draggable={true}
        onDragStart={(e)=> dragStartHandler(setdraging, {...task, index: taskIndex}, tasksStore) }
        onDragLeave={(e)=> dragLeaveHandler(e)}
        onDragEnd={(e)=> dragEndHandler(e)}
        onDragOver={(e)=> dragOverHandler(e)}
        onDrop={(e)=> dragDropHandler(e, draging, {...task, index: taskIndex}, tasksStore)}
        >
            <div className='task__title'>{task.title}</div>
            <CloseCross handler={ () => tasksStore.removeTask(task.id) } id={task.id}/>
        </div>
    )
}

export default Task