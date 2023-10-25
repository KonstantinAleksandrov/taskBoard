import { observer } from "mobx-react-lite"
import { createTasksStore } from '../../store/TasksStore'
import { createCreatorStore } from '../../store/CreatorStore'
import columnsStore from '../../store/ColumnsStore'
import './style.css'
import ColumnCreatorForm from "../ColumnCreatorForm"
import FormOpener from "../../components/FormOpener"
import { ICreatorStore } from '../../types/creatorTypes'
import { FC, ChangeEvent, useContext } from 'react'
import { TableContext } from '../../context/tableContext'
import { IStoreArrayItem } from '../../store/storeFactory'

const ColumnCreator: FC<{storeId: number}> = ({storeId}) => {
    const tableContext = useContext(TableContext)
    const CreatorStore = tableContext.getCreatorStore(storeId) as IStoreArrayItem<ICreatorStore>
    const {title, toggleFormColumn, changeTitle, openedColumnForm} = CreatorStore.store 

    const clearForm = () => {
        changeTitle('','column') 
        toggleFormColumn()
    }

    const addNewColumn = () => {
        if (title.columnName) {
            columnsStore.addColumn(title.columnName, createTasksStore(columnsStore.currentId),createCreatorStore())
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