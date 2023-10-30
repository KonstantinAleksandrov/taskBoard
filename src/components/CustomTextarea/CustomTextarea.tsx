import './style.css'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { ICustomTextareaProps } from './ICustomTextareaProps'

const CustomTextarea: FC<ICustomTextareaProps> = ({placeholder, value, changeHandler}) => {

    return (
        <textarea 
        data-testid='add-texarea'
        className="customTextarea"
        placeholder={placeholder} 
        value={value}
        onChange={changeHandler}
        ></textarea>
    )
}

export default observer(CustomTextarea)