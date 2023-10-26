import { Column } from '../Column';
import './style.css'
import { useState,useEffect,useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { IDragingState } from '../../types'
import { TableContext } from '../../contexts'
import { getTableData } from '../../services';


//компонент рендерит таблицу
const Table = () => {
    const tableContext = useContext(TableContext)
    //состояние для захваченной задачи
    const [draging, setDraging] = useState<IDragingState>({} as IDragingState)

    //получаем данные таблицы из local storage и если они есть отрисовываем
    useEffect(()=>{
        const tableData = getTableData()
        if (tableData) {
            tableContext.renderTableData(tableData)
        }
    },[])
    
    return (
        <div className='table'>
            { tableContext.columns.map((column)=>{
                return <Column key={column.id} columnId={column.id} draging={draging} setDraging={setDraging}/>
            }) }
        </div>
    )
}

export default observer(Table)