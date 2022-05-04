import Header from "./Header";
import Main from "./Main"
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPopup from "./AddPopup";
import ImagePopup from "./ImagePopup";
import { api } from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import React, { useState, useCallback } from "react";



function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupState]=useState(false);
    const [isAddPlacePopupOpen, setAddPopupState] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupState] = useState(false);
    const [isDeletePopupOpen, setDeletePopupState] = useState(false);
    const [isImagePopupOpen, setImagePopupState] = useState(false);
    const [selectedCard, setSelectedCard] = useState({link:'1'});
    const [currentUser, setCurrentUser] = useState({});
    const [cards, setCards] = useState([]);

    React.useEffect(()=> {
        api.getUserInfo().then(res=>setCurrentUser(res))
    },[isEditAvatarPopupOpen])

    React.useEffect(()=> {
        api.getInitialCards().then((res)=>{
            setCards(res);
        })
    },[])
    const deleteCard = useCallback( (card) => {
        const isOwner = card.owner._id===currentUser._id;

        if (isOwner) {
            api.deleteCard(card._id).then(()=>{
                setCards((cards) => cards.filter((c) => c._id !== card._id));
            })
        }
    },[currentUser._id])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        if (!isLiked) {
            api.like(card._id).then((newCard) => {
                setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
            })
        }
        else {
            api.unlike(card._id).then((newCard) => {
                setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
            })
        }
    }
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
    const handleUpdateUser = (name, description) => {
        api.patchUserInfo(name, description).then((res)=>{
            setCurrentUser(res);
        })
    }

    const handleUpdateAvatar = (link) => {
        api.patchAvatarInfo(link);
        api.getUserInfo().then(res=>setCurrentUser(res));
    }

    const handleAddCard = (name, link)=> {
        api.postNewCard(name, link).then(newCard=>setCards([newCard, ...cards]))
    }

    const closeAllPopups = (evt) => {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-icon') || (evt.key ==='Escape') || evt.target.classList.contains('form__button')) {
            setAddPopupState(false);
            setDeletePopupState(false);
            setEditAvatarPopupState(false);
            setEditProfilePopupState(false);
            setImagePopupState(false);
            setSelectedCard('');
        }
    }
  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page">
        
        <Header/>

        <Main 
        onCardClick={handleCardClick} 
        onEditProfile={handleEditProfileClick} 
        onEditAvatar={handleEditAvatarClick} 
        onAddPlace={handleAddPlaceClick} 
        onDeleteButton={handleDeleteButtonClick}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={deleteCard}
        />

        <Footer />    

        <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} /> 

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

        <AddPopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddCard={handleAddCard} />

        <PopupWithForm 
        name='delete' 
        title='Вы уверены?' 
        value='Да' 
        isOpen={isDeletePopupOpen} 
        onClose={closeAllPopups} 
        />

        

    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
