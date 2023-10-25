import { useState } from "react"

interface IColumnCreator {
    columnTitle: string,
    formIsOpen: boolean
}

export const useColumnCreator = () => {
    const [creator,setCreator] = useState<IColumnCreator>({columnTitle: '', formIsOpen: false})

    const openCloseform = () => {
        setCreator((prev) => {
            return {...prev,formIsOpen: !prev.formIsOpen}
        })
    }

    const changeTitle = (title: string) => {
        setCreator((prev) => {
           return {...prev, columnTitle: title}
        })
    }

    return { creator, openCloseform, changeTitle}
}