function Host({ name, picture }) {
    return (
        <div className="hostContainer">
            <h2>{name}</h2>
            <img src={picture} />
        </div>
    )
}

export default Host