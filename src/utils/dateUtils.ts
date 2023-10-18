const months = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря']

export const getDate = () => {
    const date = new Date()
    const month = date.getMonth()
    const day = date.getDate()
    return `${day} ${months[month]}`
} 