import './style.css'
import AddTitle from '../AddTitle/AddTitle'
import AddForm from '../AddForm/AddForm'
import columnsStore from '../../store/ColumnsStore'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { addtype, ITasksStore ,IAddStore} from '../../types'

interface IAdd {
    addType: addtype,
    addStore: IAddStore,
    tasksStore?: ITasksStore
}

interface IAddProps {
    options: IAdd
}

const Add: FC<IAddProps> = observer(({options}) => {
const { toggleFormColumn, toggleFormTask, openedColumnForm, openedTaskForm, changeTitle,title} = options.addStore

    return (
        <div className="add" title='addButton'>
            {options.addType === 'column' 
            ? openedColumnForm
                ? <AddForm options={
                    {
                        placeholder: 'Enter a title for this column...',
                        buttonName: 'AddColumn',
                        toggleHandler: toggleFormColumn,
                        textareaData: {
                            value: title.columnName,
                            handler: changeTitle
                        },
                        addType: options.addType,
                        addColumn: columnsStore.addColumn
                    }
                  }/>
                : <AddTitle options={
                    {
                        title: '+ Add new column',
                        toggleHandler: toggleFormColumn
                    }
                  }/>
            : openedTaskForm
                ? <AddForm options={
                    {
                        placeholder: 'Enter a title for this task...',
                        buttonName: 'AddTask',
                        toggleHandler: toggleFormTask,
                        textareaData: {
                            value: title.taskName,
                            handler: changeTitle
                        },
                        addType: options.addType,
                        addTask: options.tasksStore ? options.tasksStore.addTask : undefined 
                    }
                  }/>
                : <AddTitle options={
                    {
                        title: '+ Add new task',
                        toggleHandler: toggleFormTask
                    }
                  }/>
            }
        </div>
    )
})

export default Add