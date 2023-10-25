import { makeAutoObservable } from "mobx";
import { IColumn,ITableStore } from "../types/columnTypes"
import { IDragingState } from "../types/taskTypes"

class TableStore implements ITableStore{
    public columns: IColumn[]
    public columnId: number
    public taskId: number
    constructor () {
        this.columns = []
        this.columnId = 0
        this.taskId = 0
        makeAutoObservable(this)
    }

    createNewColumn = (columnName: string) => {
        this.columns.push(
            {
                title: columnName,
                id: this.columnId,
                tasks: []
            }
        )
            
        this.columnId++
    }

    removeColumn = (id: number) => {
        this.columns = this.columns.filter((column)=> column.id !== id)
    }

    getColumn = (id: number) => {
        return this.columns.find((column) => column.id === id)
    }

    addTask = (taskName: string, date: string, fileList: string[], columnId: number) => {
        const currentColumn = this.getColumn(columnId)

        if (currentColumn) {
            currentColumn.tasks.push(
                {
                    title: taskName,
                    id: this.taskId,
                    dateCreate: date,
                    fileList: fileList
                }
            )

            this.taskId++
        }else {
            throw new Error('Не найдена колонка')
        }
    }

    removeTask = (taskId: number, columnId: number) => {
        const currentColumn = this.getColumn(columnId)
        if (currentColumn) {
            currentColumn.tasks = currentColumn.tasks.filter((task)=> task.id !== taskId)
        }else {
            throw new Error('Не найдена колонка из которой нужно удалить задачу ')
        }
    }

    getTask = (taskId: number, columnId: number) => {
        const currentColumn = this.getColumn(columnId)
        if (currentColumn) {
            const currentTask = currentColumn.tasks.find((task)=> task.id === taskId)
            if (currentTask) {
                return currentTask
            }else {
                throw new Error('задача не найдена')
            }
        }else {
            throw new Error('Не найдена колонка для поиска задач')
        }
    }

    //логика смены мест при dnd внутри ондной колонки
    moveTasksWithinColumn = ( dragIndex: number , dropIndex: number, columnId: number ) => {
        const currentColumn = this.getColumn(columnId)
        
        if (currentColumn) {
            const dragTask = currentColumn.tasks[dragIndex] // задача которую захватили
            const dropTask = currentColumn.tasks[dropIndex] // задача на которую бросили
            currentColumn.tasks[dragIndex] = dropTask
            currentColumn.tasks[dropIndex] = dragTask
        }
    }

    //логика добавления задачи из другой колонки в эту колонку на полученную позицию
    insertTaskAnywhere = (task: IDragingState ,dropIndex: number, dropColumnId: number ) => {
        const currentColumn = this.getColumn(dropColumnId)

        if (currentColumn) {
            const tempTasks = currentColumn.tasks.slice(0,dropIndex) 
            tempTasks.push(task)
            currentColumn.tasks = [...tempTasks,...currentColumn.tasks.slice(dropIndex)]
        }
    }



   /*  saveColumnsInLocalStorage = () => {
        window.localStorage.setItem('columnsList',JSON.stringify(this.columns))
    }

    getColumnsOutLocalStorage = () => {
        let columnsData = window.localStorage.getItem('columnsList')
        if (columnsData) {
            const columnsList = JSON.parse(columnsData) as IColumn[]

            columnsList.forEach((column)=>{

                const tasksStore = createTasksStore(this.currentId)
                const creatorStore = createCreatorStore()

                column.tasksStore.tasks.forEach((task)=>{
                    tasksStore.addTask(task.title,task.dateCreate,task.taskFileList)
                })

                this.addColumn(column.title,tasksStore,creatorStore)
            })
        }
    } */
}

export const createColumnsStore = () => {
    return new TableStore()
}


export default new TableStore()