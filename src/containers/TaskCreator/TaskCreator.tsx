import { observer } from "mobx-react-lite"
import './style.css'
import { FC, ChangeEvent,useContext } from 'react'
import { getDate } from "../../utils/dateUtils"
import { TaskCreatorForm } from "../TaskCreatorForm"
import { FormOpener } from '../../components'
import { useTaskCreator } from "../../hooks/useTaskCreator"
import { TableContext } from "../../context/tableContext"
import { saveTableData } from "../../services/dataService"


// добавляет новую задачу в выбранную колонку
const TaskCreator: FC<{columnId: number}> = ({columnId}) => {
    const { creator, openCloseform, changeTitle, addFile, clearFileList, changeLoading } = useTaskCreator()
    const tableContext = useContext(TableContext)

    const clearForm = () => {
        changeTitle('') 
        clearFileList()
        openCloseform()
    }

    const addNewTask = () => {
        if (creator.taskTitle) {
            tableContext.addTask(creator.taskTitle, getDate(), creator.fileList,columnId)
            clearForm()
            saveTableData()
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
            : <FormOpener 
                options={{
                    title: '+ Add new task',
                    toggleHandler: openCloseform
                }}
              />
            }
        </div>
    )
}

export default observer(TaskCreator)