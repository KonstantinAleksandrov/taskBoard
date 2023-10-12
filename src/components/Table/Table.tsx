import columnsStore from '../../store/ColumnsStore';
import Column from '../Column/Column';
import './style.css'

import { observer } from 'mobx-react-lite'
import './style.css'

const Table = observer(() => {
    /* console.log(columnsStore.columns) */
    return (
        <div className='table'>
            { columnsStore.columns.map((column)=>{
                return <Column key={column.id} options={column}/>
            }) }
        </div>
    )
})

export default Table