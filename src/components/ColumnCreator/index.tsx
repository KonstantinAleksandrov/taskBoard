import { observer } from "mobx-react-lite"
import { createTasksStore } from '../../store/TasksStore'
import { createAddStore } from '../../store/addStore'
import columnsStore from '../../store/ColumnsStore'
import './style.css'
import ColumnCreatorForm from "../ColumnCreatorForm"
import FormOpener from "../FormOpener"
import { IAddStore } from '../../types'
import { FC,ChangeEvent } from 'react'

const ColumnCreator: FC<{addStore: IAddStore}> = ({addStore}) => {
    const {title, toggleFormColumn, changeTitle, openedColumnForm} = addStore

    const clearForm = () => {
        changeTitle('','column') 
        toggleFormColumn()
    }

    const addNewColumn = () => {
        if (title.columnName) {
            columnsStore.addColumn(title.columnName, createTasksStore(columnsStore.currentId),createAddStore())
            clearForm()
            columnsStore.saveColumnsInLocalStorage()
        }
    }

    const textareaChange = (e: ChangeEvent) => {
        const target = e.target as HTMLTextAreaElement
        changeTitle(target.value,'column')
    }

    return (
        <div className="columnCreator">
            {openedColumnForm 
            ? <ColumnCreatorForm
                options={{
                    clickHandler: addNewColumn,
                    changeHandler: textareaChange,
                    value: title.columnName,
                    closeHandler: clearForm
                }}
              />
            : <FormOpener 
                options={{
                    title: '+ Add new column',
                    toggleHandler: toggleFormColumn
                }}
              />
            }
        </div>
    )
}

export default observer(ColumnCreator)