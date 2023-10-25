import { observer } from "mobx-react-lite"
import './style.css'
import ColumnCreatorForm from "../ColumnCreatorForm"
import FormOpener from "../../components/FormOpener"
import { ChangeEvent, useContext, useEffect } from 'react'
import { TableContext } from '../../context/tableContext'
import { useColumnCreator } from "../../hooks/useColumnCreator"

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
            /* columnsStore.saveColumnsInLocalStorage() */
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