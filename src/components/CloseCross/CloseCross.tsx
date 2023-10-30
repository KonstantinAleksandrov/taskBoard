import './style.css'
import { FC } from 'react'

const CloseCross: FC<{closeHandler: () => void}> = ({closeHandler}) => {
    return (
        <div 
        data-testid='close-cross'
        className="closeCross" 
        onClick={closeHandler}>
        </div>
    )
}

export default CloseCross