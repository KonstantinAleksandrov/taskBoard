import './style.css'
import { FC } from 'react'
import { ClipIcon } from '../../components'
import { ILoadFileProps } from './types'
import { inputHandler } from './ustils'
import { observer } from 'mobx-react-lite'

// кнтайнер для загрузки картинки при создании новой задачи
const LoadFile:FC<ILoadFileProps> = ({ options }) => {

    const { clearFileList, changeLoading, tempStorageSave } = options

    return (
        <div className="loadFile">
            <input 
            id={`${options.columnId}`}
            type="file" 
            accept=".jpg, .jpeg, .png , .svg"
            onChange={(e)=> {inputHandler(e, clearFileList, changeLoading, tempStorageSave)}}
            />
            <label htmlFor={`${options.columnId}`}>
                <ClipIcon/>
            </label>
        </div>
    )
}


export default observer(LoadFile)