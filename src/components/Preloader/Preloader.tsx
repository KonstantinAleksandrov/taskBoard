import './style.css'
import preloaderIcon from '../../images/icons/preloaderIcon.svg'


// пока картинка загружается показывается эта заглуша на кнопке добавить
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