import { ChangeEvent } from "react"

export interface ITaskCreatorFormProps{
    changeHandler: (e: ChangeEvent) => void,
    clickHandler: () => void,
    value: string,
    closeHandler: () => void,
    taskFileList: string[],
    clearFileList: () => void,
    changeLoading: () => void,
    tempStorageSave: (file: string) => void,
    isLoading: boolean,
    columnId: number
}