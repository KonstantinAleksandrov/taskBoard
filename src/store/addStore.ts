import { makeAutoObservable } from "mobx";
import { IAddStore, ITitle } from "../types";



class AddStore implements IAddStore {
    public openedColumnForm: boolean
    public openedTaskForm: boolean
    public title: ITitle

    constructor () {
        this.openedColumnForm = false
        this.openedTaskForm = false
        this.title = {
            columnName: '',
            taskName: ''
        }
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
}

export default AddStore