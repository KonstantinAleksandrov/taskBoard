import './style.css'
import { FC } from 'react'

const CloseCrossButton: FC<{closeHandler: () => void}> = ({closeHandler}) => {
    return (
        <div 
        data-testid='close-cross'
        className="closeCrossButton" 
        onClick={closeHandler}>
        </div>
    )
}

export default CloseCrossButton