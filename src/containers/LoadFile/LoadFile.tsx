import './style.css'
import { FC, useEffect} from 'react'
import ClipIcon from '../../components/ClipIcon'
import { ILoadFileProps } from './types'
import { inputHandler } from './ustils'
import { observer } from 'mobx-react-lite'


const LoadFile:FC<ILoadFileProps> = ({ options }) => {
    useEffect(()=> {
        console.log('loading',options.columnId)
    },[])

    const { clearFileList, changeLoading, tempStorageSave } = options

    return (
        <div className="loadFile">
            <input 
            id='loadFileInput'
            type="file" 
            accept=".jpg, .jpeg, .png , .svg"
            onChange={(e)=> {
                console.log('change',options.columnId)
                inputHandler(e, clearFileList, changeLoading, tempStorageSave)
            }}
            />
            <label htmlFor="loadFileInput">
                <ClipIcon/>
            </label>
        </div>
    )
}

export default observer(LoadFile)