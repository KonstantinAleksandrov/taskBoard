import columnsStore from '../../store/ColumnsStore';
import Column from '../Column/Column';
import './style.css'
import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { IDragingState } from '../../types'

const Table = observer(() => {
    const [draging, setdraging] = useState<IDragingState>({} as IDragingState)
    /* console.log(columnsStore.columns) */
    return (
        <div className='table'>
            { columnsStore.columns.map((column)=>{
                return <Column key={column.id} options={column} draging={draging} setdraging={setdraging}/>
            }) }
        </div>
    )
})

export default Table