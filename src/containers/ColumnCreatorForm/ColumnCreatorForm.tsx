import { observer } from "mobx-react-lite"
import './style.css'
import { FC } from 'react'
import { AddButton, CloseCrossButton, CustomTextarea } from "../../components"
import { IColumnCreatorFormProps } from "./IColumnCreatorFormProps"

//форма для добавления новой колонки
const ColumnCreatorForm: FC<{options: IColumnCreatorFormProps}> = ({options}) => {
    const { value, changeHandler, clickHandler, closeHandler} = options

    return (
        <div className="columnCreatorForm">
            <CustomTextarea
                    changeHandler={changeHandler}
                    value={value}
                    placeholder='Enter a title for this column...'
            />
            <div className="columnCreatorForm__buttons">
                <AddButton  clickHandler={clickHandler} buttonName='Add column'/>
                <CloseCrossButton closeHandler={closeHandler}/>
            </div>
        </div>
    )
}

export default observer(ColumnCreatorForm)