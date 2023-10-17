import './style.css'
import { FC } from 'react'

interface IAddTitle {
    title: string,
    toggleHandler: ()=> void
}

interface IAddTitleProps {
    options: IAddTitle
}

const AddTitle: FC<IAddTitleProps> = ({options}) => {
    return (
        <div className="addTitle" onClick={options.toggleHandler} data-testid = 'openFormButton'>
            {options.title}
        </div>
    )
}

export default AddTitle