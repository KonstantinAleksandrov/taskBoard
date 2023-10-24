import './style.css'
import { FC } from 'react'
import ClipIcon from '../ClipIcon'
import { ILoadFileProps } from './types'
import { inputHandler } from './ustils'


const LoadFile:FC<ILoadFileProps> = ({ options }) => {

    const { clearFileList, changeLoading, tempStorageSave } = options

    return (
        <div className="loadFile">
            <input 
            id='loadFileInput'
            type="file" 
            accept=".jpg, .jpeg, .png , .svg"
            onChange={(e)=>inputHandler(e, clearFileList, changeLoading, tempStorageSave)}
            />
            <label htmlFor="loadFileInput">
                <ClipIcon/>
            </label>
        </div>
    )
}

export default LoadFile