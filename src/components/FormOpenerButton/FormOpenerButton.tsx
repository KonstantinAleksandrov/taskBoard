import './style.css'
import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { IFormOpenerButtonProps } from './IFormOpenerButtonProps'

//кнопка открывает форму добавления
const FormOpenerButton: FC<IFormOpenerButtonProps> = ({title, toggleHandler}) => {
    return (
        <div className="formOpenerButton" onClick={toggleHandler} >
            {title}
        </div>
    )
}

export default observer(FormOpenerButton)