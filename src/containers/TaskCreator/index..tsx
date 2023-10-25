import { observer } from "mobx-react-lite"
import './style.css'
import { FC, ChangeEvent } from 'react'
import { getDate } from "../../utils/dateUtils"
import columnsStore from '../../store/ColumnsStore'
import TaskCreatorForm from "../TaskCreatorForm"
import FormOpener from "../../components/FormOpener"
import { ITaskCreator } from './types'

const TaskCreator: FC<ITaskCreator> = ({creatorStore,tasksStore}) => {
    const {title, changeTitle, taskFileList, toggleFormTask, openedTaskForm, clearFileList, addFile, isLoading, changeLoading} = creatorStore
    const { addTask } = tasksStore

    const clearForm = () => {
        changeTitle('','task') 
        toggleFormTask()
        clearFileList()
    }

    const addNewTask = () => {
        if (title.taskName) {
            addTask(title.taskName, getDate(), taskFileList)
            clearForm()
            columnsStore.saveColumnsInLocalStorage()
        }
    }

    const textareaChange = (e: ChangeEvent) => {
        const target = e.target as HTMLTextAreaElement
        changeTitle(target.value,'task')
    }

    return (
        <div className="taskCreator">
            {openedTaskForm 
            ? <TaskCreatorForm
                options={{
                    clickHandler: addNewTask,
                    changeHandler: textareaChange,
                    value: title.taskName,
                    closeHandler: clearForm,
                    taskFileList,
                    clearFileList,
                    tempStorageSave: addFile,
                    changeLoading,
                    isLoading  
                }}
              />
            : <FormOpener 
                options={{
                    title: '+ Add new task',
                    toggleHandler: toggleFormTask
                }}
              />
            }
        </div>
    )
}

export default observer(TaskCreator)