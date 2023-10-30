import { ChangeEvent } from 'react'
export interface ICustomTextareaProps {
    placeholder: string,
    value: string,
    changeHandler: (e: ChangeEvent) => void
}