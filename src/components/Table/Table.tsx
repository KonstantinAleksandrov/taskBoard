import columnsStore from '../../store/ColumnsStore';
import Column from '../Column/Column';
import './style.css'
import { useState,useEffect,useContext } from 'react'
import { TableContext } from '../../context/tableContext';
import { observer } from 'mobx-react-lite'
import { IDragingState } from '../../types'
import storeFactory from '../../store/storeFactory';

const Table = () => {
    const [draging, setdraging] = useState<IDragingState>({} as IDragingState)
    useEffect(()=>{
        columnsStore.getColumnsOutLocalStorage()
    },[])
    return (
       /*  <TableContext.Provider value={storeFactory}> */
            <div className='table'>
                { columnsStore.columns.map((column)=>{
                    return <Column key={column.id} options={column} draging={draging} setdraging={setdraging}/>
                }) }
            </div>
        /* </TableContext.Provider> */
    )
}

export default observer(Table)