import errorImg from '../images/imgonerror.png'
import React from "react"
function ImagePopup ({ card, isOpen,  onClose }) {
    const imgRef = React.useRef()
    React.useEffect(() => {
        if(isOpen){window.addEventListener('keydown', onClose)}
        return(()=>{window.removeEventListener('keydown', onClose)})
    },[isOpen])

    const handleError = () => {
        imgRef.current.src=errorImg
    }
    
    return (
        <div className={`popup ${isOpen?'popup_opened':''} popup_assignment_card `} onClick={onClose}>
            <div className="popup__container popup__container_assignment_card">
                <button type="button" className="popup__close-icon" onClick={onClose}></button>
                <img ref={imgRef} src={card.link} className="popup__image" alt={card.name} onError={handleError} />
                <p className="popup__caption"></p>
            </div>
        </div>
    )
}
export default ImagePopup;