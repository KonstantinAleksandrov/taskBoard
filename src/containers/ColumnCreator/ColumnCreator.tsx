import { observer } from "mobx-react-lite"
import './style.css'
import { ColumnCreatorForm } from "../ColumnCreatorForm"
import { FormOpener} from '../../components'
import { ChangeEvent } from 'react'
import { useColumnCreator, useTableStore } from "../../hooks"
import { dataService } from "../../services"


// контайнер добавляет новую колонку
const ColumnCreator = () => {
    const tableStore = useTableStore()
    const {creator, openCloseform, changeTitle} = useColumnCreator()

    const clearForm = () => {
        changeTitle('')
        openCloseform() 
    }

    const createNewColumn = () => {
        if (creator.columnTitle) {
            tableStore.createNewColumn(creator.columnTitle)
            clearForm()
            dataService.saveTableData(tableStore.columns)
        }
    }

    const textareaChange = (e: ChangeEvent) => {
        const target = e.target as HTMLTextAreaElement
        changeTitle(target.value)
    }

    return (
        <div className="columnCreator">
            {creator.formIsOpen 
            ? <ColumnCreatorForm
                options={{
                    clickHandler: createNewColumn,
                    changeHandler: textareaChange,
                    value: creator.columnTitle,
                    closeHandler: clearForm
                }}
              />
            : <FormOpener title='+ Add new column' toggleHandler={openCloseform}/>
            }
        </div>
    )
}

export default observer(ColumnCreator)