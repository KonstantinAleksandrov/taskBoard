import './style.css'
import loaderIcon from '../../images/icons/loaderIcon.svg'

// пока картинка загружается показывается эта заглуша на кнопке добавить
const Loader = () => {
    return (
        <div className="loader">
            <div className='loader__img'>
                <img src={loaderIcon} alt="loaderIcon" />
            </div>
        </div>
    )
}

export default Loader