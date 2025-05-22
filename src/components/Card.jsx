//import Link from 'react-router-dom'


function Card({id, title, cover}) {
    return (
        <div className='card'>
            <img src={cover} alt={title} />
            <h2>{title}</h2>
        </div>
    )
}

export default Card