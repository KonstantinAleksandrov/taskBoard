import { IColumnsStore } from "../types/columnTypes"
import { ITasksStore } from "../types/taskTypes"
import { ICreatorStore } from "../types/creatorTypes"
import CreatorStore from "./CreatorStore";
import TasksStore from "./TasksStore";

export interface IStoreArrayItem<T> {
    store: T,
    id: number
}

class StoreFactory {
    private columnsStoresArray: IStoreArrayItem<IColumnsStore>[]
    private tasksStoreArray: IStoreArrayItem<ITasksStore>[]
    private creatorStoreArray: IStoreArrayItem<ICreatorStore>[]
    public creatorStoreId: number
    public columnsStoreId: number
    public tasksStoreId: number

    constructor () {
        this.columnsStoresArray = []
        this.tasksStoreArray = []
        this.creatorStoreArray = []
        this.creatorStoreId = 0
        this.columnsStoreId = 0
        this.tasksStoreId = 0
    }

    get getColumnsStoresArray() {
        return this.columnsStoresArray
    }

    get getTasksStoreArray() {
        return this.tasksStoreArray
    }

    get getCreatorStoreArray() {
        return this.creatorStoreArray
    }

    createCreatorStore = (): number => {
        const arrayItem = {
            store: new CreatorStore(),
            id: this.creatorStoreId
        }

        this.creatorStoreArray.push(arrayItem)
        this.creatorStoreId++

        return arrayItem.id
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

    getCreatorStore = (id: number) => {
        return this.creatorStoreArray.find((store)=>store.id === id)
    }

    getTaskStore = (id: number) => {
        return this.tasksStoreArray.find((store)=>store.id === id)
    }

}

export default new StoreFactory()



