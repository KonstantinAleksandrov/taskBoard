import './style.css'
import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { IFormOpenerProps } from './IFormOpenerProps'

//кнопка открывает форму добавления
const FormOpener: FC<IFormOpenerProps> = ({title, toggleHandler}) => {
    return (
        <div className="formOpener" onClick={toggleHandler} data-testid = 'openFormButton'>
            {title}
        </div>
    )
}

export default observer(FormOpener)