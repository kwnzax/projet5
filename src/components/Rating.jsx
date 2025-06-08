import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'

function Rating({ rating }) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<FontAwesomeIcon key={i} icon={solidStar} size="2xl" style={{color: "#FF6060"}}/>);
        } else {
            stars.push(<FontAwesomeIcon key={i} icon={solidStar} size="2xl" style={{color: "#E3E3E3"}}/>);
        }
    }

    return (
        <div className="rating">
            {stars}
        </div>
    )
}

export default Rating