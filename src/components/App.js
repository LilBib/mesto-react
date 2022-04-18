import Header from "./Header";
import Main from "./Main"
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useState } from "react";



function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupState]=useState(false);
    const [isAddPlacePopupOpen, setAddPopupState] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupState] = useState(false);
    const [isDeletePopupOpen, setDeletePopupState] = useState(false);
    const [isImagePopupOpen, setImagePopupState] = useState(false);
    const [selectedCard, setSelectedCard] = useState({link:''});
    const handleEditAvatarClick = () => {
        setEditAvatarPopupState(true);
    }
    const handleEditProfileClick = ()=> {
        setEditProfilePopupState(true)
    }
    const handleAddPlaceClick = ()=> {
        setAddPopupState(true);
    }
    const handleDeleteButtonClick = () => {
        setDeletePopupState(true)
    }
    const handleCardClick = (card) => {
        setSelectedCard(card)
        setImagePopupState(true);
    }
    const closeAllPopups = (evt) => {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-icon')) {
            setAddPopupState(false);
            setDeletePopupState(false);
            setEditAvatarPopupState(false);
            setEditProfilePopupState(false);
            setImagePopupState(false);
            setSelectedCard('');
        }
        if (evt.key=='Escape') {
            setAddPopupState(false);
            setDeletePopupState(false);
            setEditAvatarPopupState(false);
            setEditProfilePopupState(false);
            setImagePopupState(false);
            setSelectedCard('');
        }
    }
  return (
    <>
    <div className="page">
        <Header/>
        <Main onCardClick={handleCardClick} onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onDeleteButton={handleDeleteButtonClick}/>
        <Footer/>        
        <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups}/>
        <PopupWithForm name='edit' title='Редактировать профиль' value='Сохранить' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
            <input id="profile-name" name="name" required minLength="2" maxLength="40" placeholder="Ваш никнейм" type="text" className="form__item form__item_section_name"/>
            <span className="profile-name-error form__item-error"></span>
            <input id="profile-description" name="description" minLength="2" maxLength="200" placeholder="Описание профиля" required type="text" className="form__item form__item_section_description"/>
            <span className="profile-description-error form__item-error"></span>
        </PopupWithForm>
        <PopupWithForm name='add' title='Новое место' value='Создать' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
            <input id="place-title-input" minLength="2" maxLength="30" name="place" required  placeholder="Название" type="text" className="form__item form__item_section_place"/>
            <span className="place-title-input-error form__item-error"></span>
            <input id="place-link-input" name="link" required placeholder="Ссылка на картинку" type="url" className="form__item form__item_section_link"/>
            <span className="place-link-input-error form__item-error"></span>
        </PopupWithForm>
        <PopupWithForm name='delete' title='Вы уверены?' value='Да' isOpen={isDeletePopupOpen} onClose={closeAllPopups}/>
        <PopupWithForm name='avatar-edit' title='Обновить Аватар' value='Сохранить' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
            <input id="avatar-link-input" name="link" required placeholder="Ссылка на картинку" type="url" className="form__item form__item_section_link"/>
            <span className="avatar-link-input-error form__item-error"></span>
        </PopupWithForm>
    </div>
    </>
  );
}

export default App;
