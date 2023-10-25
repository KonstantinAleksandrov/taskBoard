import { observer } from "mobx-react-lite"
import './style.css'
import CustomTextarea from "../../components/CustomTextarea"
import AddButton from "../../components/AddButton"
import { FC } from 'react'
import CloseCross from "../../components/CloseCross/CloseCross"
import { IColumnCreatorForm } from "./types"

const ColumnCreatorForm: FC<{options: IColumnCreatorForm}> = ({options}) => {
    const { value, changeHandler, clickHandler, closeHandler} = options

    return (
        <div className="columnCreatorForm">
            <CustomTextarea
                options={{
                    changeHandler,
                    value,
                    placeholder: 'Enter a title for this column...'
                }}
            />
            <div className="columnCreatorForm__buttons">
                <AddButton 
                    options={
                        {
                            clickHandler,
                            buttonName: 'Add column'
                        }
                    }
                />
                <CloseCross closeHandler={closeHandler}/>
            </div>
        </div>
    )
}

export default observer(ColumnCreatorForm)