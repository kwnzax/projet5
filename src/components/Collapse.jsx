import { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function CollapseItem({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
    const contentRef = useRef(null)

    useEffect(() => {
        if (isOpen) {
            contentRef.current.style.height = contentRef.current.scrollHeight + "px"
        } else {
            contentRef.current.style.height = "0px"
        }
    }, [isOpen])

    return (
        <div className="collapseItem">
            <div className='collapseTitle' onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <FontAwesomeIcon icon={faChevronUp} size="xl" className={`chevronUp ${isOpen ? "rotate" : ""}`} />
            </div>

            <div className='collapseContent' ref={contentRef}>
                <div className="collapseInner">
                    {Array.isArray(content) ? (
                        <ul>
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        content
                    )}
                </div>
            </div>
        </div>
    )
}

export default CollapseItem