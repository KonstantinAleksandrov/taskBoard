import Column from '../Column/Column';
import './style.css'
import { useState,useEffect,useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { IDragingState } from '../../types/taskTypes'
import { TableContext } from '../../context/tableContext';

const Table = () => {
    const tableContext = useContext(TableContext)
    const [draging, setdraging] = useState<IDragingState>({} as IDragingState)
    useEffect(()=>{
        /* columnsStore.getColumnsOutLocalStorage() */
    },[])
    return (
        <div className='table'>
            { tableContext.columns.map((column)=>{
                return <Column key={column.id} columnId={column.id} draging={draging} setdraging={setdraging}/>
            }) }
        </div>
    )
}

export default observer(Table)