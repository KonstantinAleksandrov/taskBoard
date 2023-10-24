import { ChangeEvent } from "react"

export interface IColumnCreatorForm{
    changeHandler: (e: ChangeEvent) => void,
    clickHandler: () => void,
    value: string,
    closeHandler: () => void
}