import './style.css'
import CloseCross from '../CloseCross/CloseCross'
import { IColumn ,IDragingState} from '../../types'
import { FC ,Dispatch,SetStateAction} from 'react'
import columnsStore from '../../store/ColumnsStore'
import AddStore from '../../store/addStore'
import Add from '../Add/Add'
import { observer } from 'mobx-react-lite'
import Task from '../Task/Task'

interface IColumnProps {
    options: IColumn,
    draging: IDragingState,
    setdraging: Dispatch<SetStateAction<IDragingState>>
}

const Column: FC<IColumnProps> = observer( ({options, draging, setdraging}) => {
   /*  const [draging, setdraging] = useState<IDragingState>({} as IDragingState) */
    const { id, tasksStore, title  } = options
    const { removeColumn } = columnsStore

    return (
        <div className="column" data-testid='column'>

            <div className='column__header'>
                <div className='column__header-title' data-testid='column-title'>{title}</div>
                <CloseCross handler={ () => removeColumn(id) } id={id}/>
            </div>

            <div className='column__body'>
                <ul className='column__body-taskList column__taskList'>
                    {tasksStore.tasks.map((task,index)=>{
                        return <Task 
                        options={
                            {
                                task,
                                taskIndex: index,
                                draging,
                                setdraging,
                                tasksStore
                            }
                        }
                        key={task.id} 
                        />
                    })}
                </ul>
            </div>

            <div className='column__footer'>
                <Add 
                options={
                    {
                        addType: 'task',
                        addStore: new AddStore(),
                        tasksStore: tasksStore
                    }
                }
                />
            </div>

        </div>
    )
} )

export default Column