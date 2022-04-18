import React from "react"
function ImagePopup (props) {
    React.useEffect(() => {
        window.addEventListener('keydown', props.onClose)
        return(()=>{window.removeEventListener('keydown', props.onClose)})
    })
    return (
        <div className={`popup ${props.isOpen?'popup_opened':''} popup_assignment_card `} onClick={props.onClose}>
            <div className="popup__container popup__container_assignment_card">
                <button type="button" className="popup__close-icon" onClick={props.onClose}></button>
                <img src={props.card.link} className="popup__image" alt="Увеличенное кликнутое изображение"  />
                <p className="popup__caption"></p>
            </div>
        </div>
    )
}
export default ImagePopup;