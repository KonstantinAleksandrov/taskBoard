import { Column } from '../Column';
import './style.css'
import { useState,useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { IDragingState, IColumn } from '../../types'
import { dataService } from '../../services'
import { useTableStore } from '../../hooks';


//компонент рендерит таблицу
const Table = () => {
    const tableStore = useTableStore()
    //состояние для захваченной задачи
    const [draging, setDraging] = useState<IDragingState>({} as IDragingState)

    //получаем данные таблицы из local storage и если они есть отрисовываем
    useEffect(()=>{
        dataService.getTableData()
        .then((result) => tableStore.renderTableData(result as IColumn[]))
        .catch(()=> {
            return
        })
    },[])
    
    return (
        <div className='table'>
            { tableStore.columns.map((column)=>{
                return <Column key={column.id} columnId={column.id} draging={draging} setDraging={setDraging}/>
            }) }
        </div>
    )
}

export default observer(Table)