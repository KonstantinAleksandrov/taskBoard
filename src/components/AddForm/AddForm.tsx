import './style.css'
import { FC } from 'react'
import CloseCross from '../CloseCross/CloseCross'
import { IAddForm } from '../../types'
import { createTasksStore } from '../../store/TasksStore'
import { createAddStore } from '../../store/addStore'
import columnsStore from '../../store/ColumnsStore'
import { getDate } from '../../utils/dateUtils'
import LoadFile from '../LoadFile/LoadFile'
import Preloader from '../Preloader/Preloader'
import { useEffect } from 'react'

interface IAddFormProps {
    options: IAddForm
}

const AddForm: FC<IAddFormProps> = ({options}) => {
    const { buttonName, 
        toggleHandler, 
        placeholder, 
        textareaData, 
        addType, 
        addColumn, 
        addTaskHandlers,
        changeLoading,
        isLoading,
        clearFileList,
        taskFileList 
    } = options

    useEffect(()=>{
        return (
            clearFileList()
        )
    },[])

    return (
        <div className='addForm' data-testid = 'add-form'>
            <textarea 
            data-testid='add-texarea'
            placeholder={placeholder} 
            value={textareaData.value}
            onChange={(e) => { textareaData.handler(e.target.value,addType) }}
            ></textarea>
            <ul className='addForm__fileList'>
                {taskFileList.map((task,index)=>{
                    return <li className='addForm__fileList-item' key={index}><img src={task} alt="file" /></li>
                })}
            </ul>
            <div className='addForm__buttons'>
                <div 
                className={`addForm__buttons-add${isLoading ? ' fileLoading' : ''}`} 
                data-testid='add-button'
                onClick={()=>{
                    if (addColumn && textareaData.value) {
                        addColumn(textareaData.value, createTasksStore(columnsStore.currentId),createAddStore())
                        textareaData.handler('',addType) 
                        toggleHandler()
                        columnsStore.saveColumnsInLocalStorage()
                    }

                    if (addTaskHandlers && textareaData.value) {
                        addTaskHandlers.addTask(textareaData.value,getDate(),taskFileList)
                        textareaData.handler('',addType) 
                        toggleHandler()
                        columnsStore.saveColumnsInLocalStorage()
                    }
                }}>
                    {buttonName}
                    {isLoading ? <Preloader/> : null}
                </div>
                <div className='addForm__buttons-rightColumn'>
                    {addType === 'task' && addTaskHandlers 
                    ?<LoadFile options={{saveFile: addTaskHandlers.addFile,changeLoading,clearFileList}}/>
                    : null
                    }
                    <CloseCross handler={toggleHandler}/>
                </div>
            </div>
        </div>
    )
}

export default AddForm