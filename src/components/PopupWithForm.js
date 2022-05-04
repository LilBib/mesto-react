import React from "react";

function PopupWithForm (props) {
    React.useEffect(() => {
        if(props.isOpen){window.addEventListener('keydown', props.onClose)}
        return(()=>{window.removeEventListener('keydown', props.onClose)})
    },[props.onClose, props.isOpen])
    
    return (
        <div className={`popup popup_assignment_${props.name} ${props.isOpen?'popup_opened':''}`} onClick={props.onClose} >
            <div className="popup__container">
                <button type="button" className="popup__close-icon" onClick={props.onClose}></button>
                <form name={`${props.name}-form`} className={`form form_task_${props.name}`} noValidate  onSubmit={props.onSubmit}>
                    <h2 className={`form__title form__title_task_${props.name}`}>{props.title}</h2>
                    {props.children}
                    <input name="submit-button" type="submit" value={`${props.value}`} className="form__button form__button_type_avatar-edit"/>
                </form>
            </div>
        </div>
    )
}
export default PopupWithForm;