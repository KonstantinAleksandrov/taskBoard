import { useState } from "react"

interface ITaskCreator {
    taskTitle: string,
    formIsOpen: boolean,
    fileList: string[],
    fileIsLoading: boolean,
}

export const useTaskCreator = (id: number) => {
    const [creator,setCreator] = useState<ITaskCreator>({taskTitle: '', formIsOpen: false, fileList: [], fileIsLoading: false})

    const openCloseform = () => {
        setCreator((prev) => {
            return {...prev, formIsOpen: !prev.formIsOpen}
        })
        console.log(id)
    }

    const changeTitle = (title: string) => {
        setCreator((prev) => {
            return {...prev, taskTitle: title}
        })
        console.log(id)
    }

    const addFile = (file: string) => {
        const fileList: string[] = []
        fileList.push(file)
        setCreator((prev) => {
            return {...prev, fileList}
        })
        console.log(id)
    }

    const clearFileList = () => {
        setCreator((prev) => {
            return {...prev, fileList: []}
        })
        console.log(id)
    }

    const changeLoading = () => {
        setCreator((prev) => {
            return {...prev, fileIsLoading: !prev.fileIsLoading}
        })
        console.log(id)
    }

    return {creator, openCloseform, changeTitle, addFile, clearFileList, changeLoading}
}
