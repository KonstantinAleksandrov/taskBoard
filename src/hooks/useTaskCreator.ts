import { useState } from "react"

interface ITaskCreator {
    taskTitle: string,
    formIsOpen: boolean,
    fileList: string[],
    fileIsLoading: boolean,
}

export const useTaskCreator = () => {
    const [creator,setCreator] = useState<ITaskCreator>({taskTitle: '', formIsOpen: false, fileList: [], fileIsLoading: false})

    const openCloseform = () => {
        setCreator((prev) => {
            return {...prev, formIsOpen: !prev.formIsOpen}
        })
    }

    const changeTitle = (title: string) => {
        setCreator((prev) => {
            return {...prev, taskTitle: title}
        })
    }

    const addFile = (file: string) => {
        const fileList: string[] = []
        fileList.push(file)
        setCreator((prev) => {
            return {...prev, fileList}
        })
    }

    const clearFileList = () => {
        setCreator((prev) => {
            return {...prev, fileList: []}
        })
    }

    const changeLoading = () => {
        setCreator((prev) => {
            return {...prev, fileIsLoading: !prev.fileIsLoading}
        })
    }

    return {creator, openCloseform, changeTitle, addFile, clearFileList, changeLoading}
}
