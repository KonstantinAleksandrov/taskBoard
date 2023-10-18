import './style.css'
import { FC } from 'react'
import CloseCross from '../CloseCross/CloseCross'
import { IAddForm } from '../../types'
import { createTasksStore } from '../../store/TasksStore'
import columnsStore from '../../store/ColumnsStore'
import { getDate } from '../../utils/dateUtils'

interface IAddFormProps {
    options: IAddForm
}

const AddForm: FC<IAddFormProps> = ({options}) => {
    const { buttonName, toggleHandler, placeholder, textareaData, addType, addColumn, addTask } = options

    return (
        <div className='addForm' data-testid = 'add-form'>
            <textarea 
            data-testid='add-texarea'
            placeholder={placeholder} 
            value={textareaData.value}
            onChange={(e) => { textareaData.handler(e.target.value,addType) }}
            ></textarea>
            <div className='addForm__buttons'>
                <div 
                className='addForm__buttons-add' 
                data-testid='add-button'
                onClick={()=>{
                    if (addColumn && textareaData.value) {
                        addColumn(textareaData.value, createTasksStore(columnsStore.currentId))
                        textareaData.handler('',addType) 
                        toggleHandler()
                        columnsStore.saveColumnsInLocalStorage()
                    }

                    if (addTask && textareaData.value) {
                        addTask(textareaData.value,getDate())
                        textareaData.handler('',addType) 
                        toggleHandler()
                        columnsStore.saveColumnsInLocalStorage()
                    }
                }}>{buttonName}</div>
                <CloseCross handler={toggleHandler}/>
            </div>
        </div>
    )
}

export default AddForm