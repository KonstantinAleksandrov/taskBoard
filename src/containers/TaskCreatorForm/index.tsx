import { observer } from "mobx-react-lite"
import './style.css'
import AddButton from "../../components/AddButton"
import CloseCross from "../../components/CloseCross/CloseCross"
import CustomTextarea from "../../components/CustomTextarea"
import LoadFile from '../LoadFile/LoadFile'
import { FC, useEffect } from 'react'
import Preloader from "../../components/Preloader/Preloader"
import { ITaskCreatorForm } from './types'

const TaskCreatorForm: FC<{options: ITaskCreatorForm}> = ({options}) => {
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

    useEffect(()=>{
        console.log(columnId)
    },[isLoading,value])
    return (
        <div className="taskCreatorForm">
            <CustomTextarea
                options={{
                    changeHandler,
                    value,
                    placeholder: 'Enter a title for this task...'
                }}
            />
            <ul className='taskCreatorForm__fileList'>
                {taskFileList.map((file,index)=>{
                    return <li className='taskCreatorForm__fileList-item' key={index}><img src={file} alt="file" /></li>
                })}
            </ul>
            <div className="taskCreatorForm__buttons">
                <AddButton 
                    options={
                        {
                            clickHandler,
                            buttonName: 'Add task'
                        }
                    }
                >
                {isLoading && <Preloader/>}
                </AddButton>
                <div className="taskCreatorForm__buttons-rightColumn">
                    <LoadFile options={{tempStorageSave: tempStorageSave, changeLoading, clearFileList, columnId}}/>
                    <CloseCross closeHandler={closeHandler}/>
                </div>
            </div>
        </div>
    )
}

export default observer(TaskCreatorForm)