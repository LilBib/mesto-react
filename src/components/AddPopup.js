import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPopup(props) {

    const[name,setName]=React.useState('');
    const[link,setLink]=React.useState('');
    function handleNameChange (e) {
        setName(e.target.value)
    }
    function handleLinkChange (e) {
        setLink(e.target.value)
    }


    function handleSubmit (e) {
        e.preventDefault();
        props.onAddCard(name, link);
        props.onClose(e);
        setName('');
        setLink('');
    }

    return (
        <PopupWithForm 
        name='add' 
        title='Новое место' 
        value='Создать' 
        isOpen={props.isOpen} 
        onClose={props.onClose}
        onSubmit={handleSubmit}
        >
            <input id="place-title-input" minLength="2" maxLength="30" name="place" required  placeholder="Название" type="text" className="form__item form__item_section_place" onChange={handleNameChange} />
            <span className="place-title-input-error form__item-error"></span>
            <input id="place-link-input" name="link" required placeholder="Ссылка на картинку" type="url" className="form__item form__item_section_link" onChange={handleLinkChange} />
            <span className="place-link-input-error form__item-error"></span>
        </PopupWithForm>
    )
}

export default AddPopup