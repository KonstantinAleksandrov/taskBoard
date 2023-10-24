import './style.css'
import preloaderIcon from '../../images/icons/preloaderIcon.svg'

const Preloader = () => {
    return (
        <div className="preloader">
            <div className='preloader__img'>
                <img src={preloaderIcon} alt="preloader" />
            </div>
        </div>
    )
}

export default Preloader