function Host({ name, picture }) {
    return (
        <div className="hostContainer">
            <p>{name}</p>
            <img src={picture} />
        </div>
    )
}

export default Host