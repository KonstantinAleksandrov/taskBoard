import './style.css'
import { FC } from 'react'
import CloseCross from '../CloseCross/CloseCross'

interface ITaskProps {
    title: string,
    removeHendler: (id: number)=> void,
    id: number
}

const Task: FC<{options: ITaskProps}> = ({options}) => {
    const {removeHendler,id,title} = options

    return (
        <div className="task">
            <div className='task__title'>{title}</div>
            <CloseCross handler={ () => removeHendler(id) } id={id}/>
        </div>
    )
}

export default Task