import { IAddStore,IColumnsStore,ITasksStore } from "../types"
import {action ,makeAutoObservable } from "mobx";
import AddStore from "./addStore";
import TasksStore from "./TasksStore";

interface IStoreArrayItem<T> {
    store: T,
    id: number
}

class StoreFactory {
    private columnsStoresArray: IStoreArrayItem<IColumnsStore>[]
    private tasksStoreArray: IStoreArrayItem<ITasksStore>[]
    private addStoreArray: IStoreArrayItem<IAddStore>[]
    public addStoreId: number
    public columnsStoreId: number
    public tasksStoreId: number

    constructor () {
        this.columnsStoresArray = []
        this.tasksStoreArray = []
        this.addStoreArray = []
        this.addStoreId = 0
        this.columnsStoreId = 0
        this.tasksStoreId = 0
        makeAutoObservable(this)
    }

    get getColumnsStoresArray() {
        return this.columnsStoresArray
    }

    get getTasksStoreArray() {
        return this.tasksStoreArray
    }

    get getAddStoreArray() {
        return this.addStoreArray
    }

    createAddStore = (): number => {
        const arrayItem = {
            store: new AddStore(),
            id: this.addStoreId
        }

        this.addStoreArray.push(arrayItem)
        this.addStoreId++

        return arrayItem.id
    }

    getAddStore = (id: number) => {
        return this.addStoreArray.find((store)=>store.id === id)
    }

    createTasksStore = (id: number) => {
        const arrayItem = {
            store: new TasksStore(id),
            id: this.tasksStoreId
        }

        this.tasksStoreArray.push(arrayItem)
        this.tasksStoreId++

        return arrayItem.id
    }
}

export default new StoreFactory()



