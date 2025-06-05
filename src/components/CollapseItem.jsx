import { useState } from "react"

function CollapseItem({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div onClick={() => setIsOpen(!isOpen)}>
                {title}
            </div>
            {isOpen && (
                <div>{content}</div>
            )}
        </>
    )
}

export default CollapseItem