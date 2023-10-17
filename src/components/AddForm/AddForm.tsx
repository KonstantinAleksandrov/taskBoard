import './style.css'
import { FC } from 'react'
import CloseCross from '../CloseCross/CloseCross'
import { IAddForm } from './types'

interface IAddFormProps {
    options: IAddForm
}

const AddForm: FC<IAddFormProps> = ({options}) => {
    const { buttonName, toggleHandler, placeholder, textareaData, addType, addColumn, addTask } = options

    return (
        <div className='addForm' data-testid = 'add-form'>
            <textarea 
            data-testid='add-texarea'
            maxLength={25}
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