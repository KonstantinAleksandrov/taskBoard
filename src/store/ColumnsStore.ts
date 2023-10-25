import { makeAutoObservable } from "mobx";
import { IColumn,IColumnsStore } from "../types/columnTypes"
import { ITasksStore } from '../types/taskTypes'
import { ICreatorStore } from '../types/creatorTypes'
import { createTasksStore } from "./TasksStore";
import { createCreatorStore} from "./CreatorStore";

class ColumnsStore implements IColumnsStore{
    public columns: IColumn[]
    public currentId: number
    constructor () {
        this.columns = []
        this.currentId = 0
        makeAutoObservable(this)
    }

    addColumn = (columnName: string, tasksStore: ITasksStore, creatorStore: ICreatorStore ) => {
        this.columns.push(
            {
                title: columnName,
                id: this.currentId,
                tasksStore,
                creatorStore 
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
                const creatorStore = createCreatorStore()

                column.tasksStore.tasks.forEach((task)=>{
                    tasksStore.addTask(task.title,task.dateCreate,task.taskFileList)
                })

                this.addColumn(column.title,tasksStore,creatorStore)
            })
        }
    }
}

export const createColumnsStore = () => {
    return new ColumnsStore()
}


export default new ColumnsStore()