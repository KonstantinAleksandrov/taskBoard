import React ,{ Dispatch, SetStateAction} from 'react'
import { ITasksStore, IExtendedTask,IDragingState } from '../types/taskTypes'
import columnsStore from '../store/tableStore';


//убираем реакцию на события у дочерних елементов верхнего уровня у всех task
const changeClassList = (type: 'add' | 'delete') => {
    const tasks = Array.from(document.getElementsByClassName('task'));
    tasks.forEach((task)=>{
        const children = Array.from(task.children);
        children.forEach((child)=>{
            if (type === 'add') {
                child.classList.add('dragging')
            }else {
                if(child.classList.contains('dragging')) {
                    child.classList.remove('dragging')
                }
            }
        })
    })
} 

// обработчик захвата элемента
export const dragStartHandler = (
        setState: Dispatch<SetStateAction<IDragingState>>,
        task: IExtendedTask,
        tasksStore: ITasksStore,
        htmlElement: HTMLElement
    ) => {
        setState({...task,...tasksStore, htmlElement})
        changeClassList('add')    
}

//обработчик срабатывает когда покидаем элемент под переносимым элементом
export const dragLeaveHandler = (e: React.DragEvent) => {
    const leavedElem = e.target as HTMLElement
    const leavedTask = leavedElem.closest('.task') as HTMLElement
    if(leavedTask) {
        leavedTask.style.opacity = '1'
    }
}

//обработчик для захваченного элемента срабатывает когда завершили или прервали перенос
export const dragEndHandler = (e: React.DragEvent) => {
    const dragingElem = e.target as HTMLElement
    const dragingTask = dragingElem.closest('.task') as HTMLElement
    if(dragingTask) {
        dragingTask.style.opacity = '1'
    }
}

//обработчик срабатывает для элемента над которым переноси захваченный элемент
export const dragOverHandler = (
    e: React.DragEvent,
    draging: IDragingState,
    task: IExtendedTask,
    tasksStore: ITasksStore
    ) => {
        e.preventDefault()
        const overElem = e.target as HTMLElement
        const hideTask = overElem.closest('.task') as HTMLElement
        if(hideTask) {
            hideTask.style.opacity = '0'
        }
       /*  const dragingTaskCoords = draging.htmlElement.getBoundingClientRect()
        const middleDragingTaskCoords = (dragingTaskCoords.bottom - dragingTaskCoords.top) / 2
        const currentMouseCords = e.clientY - dragingTaskCoords.top
        
        if (draging.index < task.index && currentMouseCords < middleDragingTaskCoords) {
            console.log(1)
            return
        }
        
        if (draging.index > task.index && currentMouseCords > middleDragingTaskCoords) {
            console.log(2)
            return 
        }
        if(draging.index == task.index) {
            return
        }

        if(currentMouseCords === middleDragingTaskCoords) {
            console.log(2599999)
            tasksStore.moveTasksWithinColumn(draging.index,task.index)
        }

        if ( draging.columnId === tasksStore.columnId) {
            console.log(2599999)
            tasksStore.moveTasksWithinColumn(draging.index,task.index)
        } */
}

//обработчик срабатывает в момент броска захваченного элемента для элемента на который бросили
export const dragDropHandler = (
        e: React.DragEvent, 
        draging: IDragingState,
        task: IExtendedTask,
        tasksStore: ITasksStore
    ) => {
        e.preventDefault()
        const dropElem = e.target as HTMLElement
        const dropTask = dropElem.closest('.task') as HTMLElement
        changeClassList('delete')

        if(dropTask) {
            dropTask.style.opacity = '1'
        }

        if ( draging.columnId === tasksStore.columnId) {
            tasksStore.moveTasksWithinColumn(draging.index,task.index)
        }else {
            draging.removeTask(draging.id)
            tasksStore.insertTaskAnywhere(draging, task.index)
        }
       /*  columnsStore.saveColumnsInLocalStorage() */
}  
