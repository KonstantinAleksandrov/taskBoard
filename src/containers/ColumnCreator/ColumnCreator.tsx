import { observer } from "mobx-react-lite"
import './style.css'
import { ColumnCreatorForm } from "../ColumnCreatorForm"
import { FormOpener} from '../../components'
import { ChangeEvent, useContext } from 'react'
import { TableContext } from '../../contexts'
import { useColumnCreator } from "../../hooks"
import { saveTableData } from "../../services"


// контайнер добавляет новую колонку
const ColumnCreator = () => {
    const tableContext = useContext(TableContext)
    const {creator, openCloseform, changeTitle} = useColumnCreator()

    const clearForm = () => {
        changeTitle('')
        openCloseform() 
    }

    const createNewColumn = () => {
        if (creator.columnTitle) {
            tableContext.createNewColumn(creator.columnTitle)
            clearForm()
            saveTableData()
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
            : <FormOpener 
                options={{
                    title: '+ Add new column',
                    toggleHandler: openCloseform
                }}
              />
            }
        </div>
    )
}

export default observer(ColumnCreator)