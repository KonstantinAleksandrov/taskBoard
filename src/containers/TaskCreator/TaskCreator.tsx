import { observer } from "mobx-react-lite"
import './style.css'
import { FC, ChangeEvent } from 'react'
import { getDate } from "../../utils"
import { TaskCreatorForm } from "../TaskCreatorForm"
import { FormOpener } from '../../components'
import { useTaskCreator, useTableStore } from "../../hooks"
import { dataService } from "../../services"


// добавляет новую задачу в выбранную колонку
const TaskCreator: FC<{columnId: number}> = ({columnId}) => {
    const { creator, openCloseform, changeTitle, addFile, clearFileList, changeLoading } = useTaskCreator()
    const tableStore = useTableStore()

    const clearForm = () => {
        changeTitle('') 
        clearFileList()
        openCloseform()
    }

    const addNewTask = () => {
        if (creator.taskTitle) {
            tableStore.addTask(creator.taskTitle, getDate(), creator.fileList,columnId)
            clearForm()
            dataService.saveTableData(tableStore.columns)
        }
    }

    const textareaChange = (e: ChangeEvent) => {
        const target = e.target as HTMLTextAreaElement
        changeTitle(target.value)
    }

    return (
        <div className="taskCreator">
            {creator.formIsOpen 
            ? <TaskCreatorForm
                options={{
                    clickHandler: addNewTask,
                    changeHandler: textareaChange,
                    value: creator.taskTitle,
                    closeHandler: clearForm,
                    taskFileList: creator.fileList,
                    clearFileList,
                    tempStorageSave: addFile,
                    changeLoading,
                    isLoading: creator.fileIsLoading,
                    columnId: columnId 
                }}
              />
            : <FormOpener title='+ Add new task' toggleHandler={openCloseform}/>
            }
        </div>
    )
}

export default observer(TaskCreator)