function Card ({ card, onClick }) {
    function handleCardClick () {
        onClick(card)
    }
    return(
        <div className="element" onClick={handleCardClick}>
            <div style={{ backgroundImage: `url(${card.link})` }} className="element__card" />
            <div className="element__content">
                <h2 className="element__description">{card.name}</h2>
                <div className="element__like-column">
                    <button type="button" className="element__like-button"></button>
                    <h2 className="element__like-count">{card.likes.length}</h2>
                </div>
                <button type="button" className="element__delete-button"></button>
            </div>
        </div>
    )
}
export default Card;