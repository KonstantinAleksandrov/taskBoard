import { observer } from "mobx-react-lite"
import './style.css'
import { CloseCrossButton, CustomTextarea, Loader, AddButton } from '../../components'
import { LoadFile } from '../LoadFile'
import { FC } from 'react'
import { ITaskCreatorFormProps } from './ITaskCreatorFormProps'


// форма для добавления новой задачи в колонку
const TaskCreatorForm: FC<{options: ITaskCreatorFormProps}> = ({options}) => {
    const 
    { 
        value, 
        taskFileList, 
        isLoading, 
        changeLoading, 
        changeHandler, 
        clickHandler, 
        closeHandler, 
        clearFileList, 
        tempStorageSave,
        columnId
    } = options

    return (
        <div className="taskCreatorForm">
            <CustomTextarea
                changeHandler={changeHandler}
                value={value}
                placeholder='Enter a title for this task...'
            />
            <ul className='taskCreatorForm__fileList'>
                {taskFileList.map((file,index)=>{
                    return (
                        <li className='taskCreatorForm__fileList-item' key={index}>
                                <img src={file} alt="file" />
                        </li>
                    )
                })}
            </ul>
            <div className="taskCreatorForm__buttons">
                <AddButton clickHandler={clickHandler} buttonName='Add task'>
                    {isLoading && <Loader/>}
                </AddButton>
                <div className="taskCreatorForm__buttons-rightColumn">
                    <LoadFile options={{tempStorageSave: tempStorageSave, changeLoading, clearFileList, columnId}}/>
                    <CloseCrossButton closeHandler={closeHandler}/>
                </div>
            </div>
        </div>
    )
}

export default observer(TaskCreatorForm)