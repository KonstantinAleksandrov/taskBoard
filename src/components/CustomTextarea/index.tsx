import './style.css'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { ICustomTextareaProps } from './types'


const CustomTextarea: FC<ICustomTextareaProps> = ({options}) => {
    const {placeholder,value,changeHandler} = options

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