import { useState, useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function CollapseItem({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="collapseItem">
            <div className='collapseTitle' onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <FontAwesomeIcon icon={faChevronUp} size="xl" className={`chevronUp ${isOpen ? "rotate" : ""}`} />
            </div>
            {isOpen && (
                <div className='collapseContent'>
                        {content}
                </div>
            )}
        </div>
    )
}

export default CollapseItem