import { ChangeEvent } from 'react'

interface ICustomTextarea {
    placeholder: string,
    value: string,
    changeHandler: (e: ChangeEvent) => void
}

export interface ICustomTextareaProps {
    options: ICustomTextarea
}