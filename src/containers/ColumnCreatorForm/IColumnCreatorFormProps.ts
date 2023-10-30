import { ChangeEvent } from "react"

export interface IColumnCreatorFormProps{
    changeHandler: (e: ChangeEvent) => void,
    clickHandler: () => void,
    value: string,
    closeHandler: () => void
}