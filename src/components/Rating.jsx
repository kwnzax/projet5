import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons'

function Rating({ rating }) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            stars.push(<FontAwesomeIcon key={i} icon={solidStar} />);
        } else {
            stars.push(<FontAwesomeIcon key={i} icon={regularStar} />);
        }
    }

    return (
        <div className="rating">
            {stars}
        </div>
    )
}

export default Rating