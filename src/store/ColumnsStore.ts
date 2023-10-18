import { makeAutoObservable } from "mobx";
import { IColumn,ITasksStore } from "../types";
import { createTasksStore } from "./TasksStore";



class ColumnsStore {
    public columns: IColumn[]
    public currentId: number
    constructor () {
        this.columns = []
        this.currentId = 0
        makeAutoObservable(this)
    }

    addColumn = (columnName: string, store: ITasksStore ) => {
        this.columns.push(
            {
                title: columnName,
                id: this.currentId,
                tasksStore: store
            }
        )
            
        this.currentId++
    }

    removeColumn = (id: number) => {
        this.columns = this.columns.filter((column)=> column.id !== id)
    }

    saveColumnsInLocalStorage = () => {
        window.localStorage.setItem('columnsList',JSON.stringify(this.columns))
    }

    getColumnsOutLocalStorage = () => {
        let columnsData = window.localStorage.getItem('columnsList')
        if (columnsData) {
            const columnsList = JSON.parse(columnsData) as IColumn[]

            columnsList.forEach((column)=>{

                const tasksStore = createTasksStore(this.currentId)

                column.tasksStore.tasks.forEach((task)=>{
                    tasksStore.addTask(task.title,task.dateCreate)
                })

                this.addColumn(column.title,tasksStore)
            })
        }
    }
}

export const createColumnsStore = () => {
    return new ColumnsStore()
}


export default new ColumnsStore()