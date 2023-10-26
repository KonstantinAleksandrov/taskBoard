import React ,{ Dispatch, SetStateAction} from 'react'
import { IExtendedTask,IDragingState } from '../types'
import { tableStore } from '../stores'
import { saveTableData } from '../services'


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
        columnId: number
    ) => {
        setState({...task,columnId})
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
    ) => {
        e.preventDefault()
        const overElem = e.target as HTMLElement
        const hideTask = overElem.closest('.task') as HTMLElement
        if(hideTask) {
            hideTask.style.opacity = '0'
        }
}

//обработчик срабатывает в момент броска захваченного элемента для элемента на который бросили
export const dragDropHandler = (
        e: React.DragEvent, 
        draging: IDragingState, // данные задачи которую тащим
        task: IExtendedTask,    // данные задачи на которую сбрасываем
        columnId: number
    ) => {
        e.preventDefault()
        const dropElem = e.target as HTMLElement
        const dropTask = dropElem.closest('.task') as HTMLElement
        if(dropTask) {
            dropTask.style.opacity = '1'
        }
        
        changeClassList('delete')

        if (draging.columnId === columnId) {
            tableStore.moveTasksWithinColumn(draging.index,task.index,columnId)
        }else {
            tableStore.removeTask(draging.id,draging.columnId)
            tableStore.insertTaskAnywhere(draging,task.index,columnId)
        }
        saveTableData()
}  
