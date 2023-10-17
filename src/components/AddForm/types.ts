import { addtype } from '../../types'

export interface IAddFormTextarea {
    value: string,
    handler: (title: string,type: 'column' | 'task') => void
}

export interface IAddForm{
    placeholder: string,
    buttonName: string,
    toggleHandler: () => void,
    textareaData: IAddFormTextarea,
    addType: addtype,
    addColumn?: (columnName: string) => void,
    addTask?: (taskName: string) => void
}