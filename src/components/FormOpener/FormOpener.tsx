import './style.css'
import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { IFormOpenerProps } from './types'

//кнопка открывает форму добавления
const FormOpener: FC<IFormOpenerProps> = ({options}) => {
    return (
        <div className="formOpener" onClick={options.toggleHandler} data-testid = 'openFormButton'>
            {options.title}
        </div>
    )
}

export default observer(FormOpener)