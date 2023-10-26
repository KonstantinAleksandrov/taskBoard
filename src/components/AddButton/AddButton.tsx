import './style.css'
import { FC, ReactNode } from 'react'
import { observer } from 'mobx-react-lite'
import { IAddButton } from './types'


const AddButton:FC<{options: IAddButton, children?: ReactNode}> = ({options,children}) => {
    return (
        <div className="addButton" onClick={options.clickHandler}>
            {options.buttonName}
            {children}
        </div>
    )
}

export default observer(AddButton)


