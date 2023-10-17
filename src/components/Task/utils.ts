import React ,{ Dispatch, SetStateAction} from 'react'
import { ITasksStore, IExtendedTask,IDragingState } from '../../types'

export const dragStartHandler = (
        setState: Dispatch<SetStateAction<IDragingState>>,
        task: IExtendedTask,
        tasksStore: ITasksStore
    ) => {
        console.log('start', {...task,...tasksStore})
        setState({...task,...tasksStore})
        
}

export const dragLeaveHandler = (e: React.DragEvent) => {
    const leavedTask = e.target as HTMLElement
    leavedTask.style.opacity = '1'
}

export const dragEndHandler = (e: React.DragEvent) => {
    const dragingTask = e.target as HTMLElement
    dragingTask.style.opacity = '1'
}

export const dragOverHandler = (e: React.DragEvent) => {
    const overTask = e.target as HTMLElement
    overTask.style.opacity = '0.3'
    e.preventDefault()
}

export const dragDropHandler = (
        e: React.DragEvent, 
        draging: IDragingState,
        task: IExtendedTask,
        tasksStore: ITasksStore
    ) => {
        console.log(e.target)
        e.preventDefault()
        const dropTask = e.target as HTMLElement
        dropTask.style.opacity = '1'
        if ( draging.columnId === tasksStore.columnId) {
            tasksStore.moveTasksWithinColumn(draging.index,task.index)
        }else {
            draging.removeTask(draging.id)
            tasksStore.insertTaskAnywhere(task.index, draging.title)
        }
}
