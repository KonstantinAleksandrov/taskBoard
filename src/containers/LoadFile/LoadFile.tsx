import './style.css'
import { FC } from 'react'
import { ClipIcon } from '../../components'
import { ILoadFileProps } from './ILoadFileProps'
import { inputHandler } from './ustils'
import { observer } from 'mobx-react-lite'

// кнтайнер для загрузки картинки при создании новой задачи
const LoadFile:FC<ILoadFileProps> = ({ options }) => {

    const { clearFileList, changeLoading, tempStorageSave, columnId } = options

    return (
        <div className="loadFile">
            <input 
            id={`${columnId}`}
            type="file" 
            accept=".jpg, .jpeg, .png , .svg"
            onChange={(e)=> {inputHandler(e, clearFileList, changeLoading, tempStorageSave)}}
            />
            <label htmlFor={`${columnId}`}>
                <ClipIcon/>
            </label>
        </div>
    )
}


export default observer(LoadFile)