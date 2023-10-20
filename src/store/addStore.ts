import { makeAutoObservable } from "mobx";
import { IAddStore, ITitle } from "../types";



class AddStore implements IAddStore {
    public openedColumnForm: boolean
    public openedTaskForm: boolean
    public title: ITitle
    public taskFileList: string[]
    public isLoading: boolean

    constructor () {
        this.isLoading = false
        this.openedColumnForm = false
        this.openedTaskForm = false
        this.title = {
            columnName: '',
            taskName: ''
        }
        this.taskFileList = []
        makeAutoObservable(this)
    }

    toggleFormColumn = () => {
        this.openedColumnForm = !this.openedColumnForm
    }

    toggleFormTask = () => {
        this.openedTaskForm = !this.openedTaskForm
    }

    changeTitle = (title: string, type: 'column' | 'task') => {
        if (type === 'column') {
            this.title.columnName = title
        }else {
           this.title.taskName = title 
        }
    }

    addFile = (file: string) => {
        this.taskFileList.push(file)
    }

    clearFileList = () => {
        this.taskFileList = []
    }

    changeLoading = () => {
        this.isLoading = !this.isLoading
    }
}

export const createAddStore = () => {
    return new AddStore()
}

export default AddStore