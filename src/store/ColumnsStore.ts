import { makeAutoObservable } from "mobx";
import { IColumn } from "../types";
import TasksStore from "./TasksStore";



class ColumnsStore {
    public columns: IColumn[]
    public currentId: number
    constructor () {
        this.columns = []
        this.currentId = 0
        makeAutoObservable(this)
    }

    addColumn = (columnName: string) => {
        this.columns.push(
            {
                title: columnName,
                id: this.currentId,
                tasksStore: new TasksStore(this.currentId)
            }
        )

        this.currentId++
        console.log(this.columns)
    }

    removeColumn = (id: number) => {
        this.columns = this.columns.filter((column)=> column.id !== id)
    }

}

export const createColumnsStore = () => {
    return new ColumnsStore()
}


export default new ColumnsStore()