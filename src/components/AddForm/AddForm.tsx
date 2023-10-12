import './style.css'
import { FC } from 'react'
import CloseCross from '../CloseCross/CloseCross'
import { addtype } from '../../types'

interface IAddFormTextarea {
    value: string,
    handler: (title: string,type: 'column' | 'task') => void
}

interface IAddForm{
    placeholder: string,
    buttonName: string,
    toggleHandler: () => void,
    textareaData: IAddFormTextarea,
    addType: addtype,
    addColumn?: (columnName: string) => void,
    addTask?: (taskName: string) => void
}

interface IAddFormProps {
    options: IAddForm
}

const AddForm: FC<IAddFormProps> = ({options}) => {
    const { buttonName, toggleHandler, placeholder, textareaData, addType, addColumn, addTask } = options

    return (
        <div className='addForm'>
            <textarea 
            maxLength={25}
            placeholder={placeholder} 
            value={textareaData.value}
            onChange={(e) => { textareaData.handler(e.target.value,addType) }}
            ></textarea>
            <div className='addForm__buttons'>
                <div 
                className='addForm__buttons-add' 
                onClick={()=>{
                    if (addColumn && textareaData.value) {
                        addColumn(textareaData.value)
                        textareaData.handler('',addType) 
                        toggleHandler()
                    }

                    if (addTask && textareaData.value) {
                        addTask(textareaData.value)
                        textareaData.handler('',addType) 
                        toggleHandler()
                    }
                }}>{buttonName}</div>
                <CloseCross handler={toggleHandler}/>
            </div>
        </div>
    )
}

export default AddForm