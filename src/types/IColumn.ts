import { ITask } from "./ITask"

export interface IColumn {
    title: string,
    id: number,
    tasks: ITask[]
}