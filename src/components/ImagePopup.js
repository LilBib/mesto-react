import React from "react"
function ImagePopup ({ card, isOpen,  onClose }) {
    React.useEffect(() => {
        if(isOpen){window.addEventListener('keydown', onClose)}
        return(()=>{window.removeEventListener('keydown', onClose)})
    },[isOpen])
    
    return (
        <div className={`popup ${isOpen?'popup_opened':''} popup_assignment_card `} onClick={onClose}>
            <div className="popup__container popup__container_assignment_card">
                <button type="button" className="popup__close-icon" onClick={onClose}></button>
                <img src={card.link} className="popup__image" alt={card.name}  />
                <p className="popup__caption"></p>
            </div>
        </div>
    )
}
export default ImagePopup;