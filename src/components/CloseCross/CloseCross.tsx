import './style.css'
import { FC } from 'react'

interface ICloseCrossProps {
    id?: number
    handler: (id?: number)=> void
}

const CloseCross: FC<ICloseCrossProps> = ({id,handler}) => {
    return (
        <div 
        data-testid='close-cross'
        className="closeCross" 
        onClick={()=> handler(id) }>
            <span></span>
            <span></span>
        </div>
    )
}

export default CloseCross