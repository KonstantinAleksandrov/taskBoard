import './style.css'
import { FC } from 'react'
import { observer } from 'mobx-react-lite'
import { IAddButtonProps } from './IAddButtonProps'
import { PropsWithOptionalChildren } from '../../types'

const AddButton:FC<PropsWithOptionalChildren<IAddButtonProps>> = ({ clickHandler, children, buttonName }) => {
    return (
        <div className="addButton" onClick={clickHandler}>
            {buttonName}
            {children}
        </div>
    )
}

export default observer(AddButton)


