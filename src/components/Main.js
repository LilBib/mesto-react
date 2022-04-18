import { render } from "@testing-library/react"
import React, { useState } from "react"
import { api } from "../utils/Api"
import Card from "./Card"
function Main (props) {
    const [userName,setUserName] = useState('')
    const [userDescription, setUserDescription] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [cards, setCards] = useState([])
    React.useEffect(()=> {
        api.getUserInfo().then((res)=> {
            setUserName(res.name)
            setUserDescription(res.about)
            setUserAvatar(res.avatar)
        })
        api.getInitialCards().then((res)=>{
            setCards(res);
        })
    },[])
    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                    <div style={{ backgroundImage: `url(${userAvatar})` }} alt="Аватар профиля" className="profile__avatar" />
                </div>
                <div className="profile__content">
                    <div className="profile__info">
                        <h1 className="profile__title">{userName}</h1>
                        <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
                        <h2 className="profile__description">{userDescription}</h2>
                    </div>
                    <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
                </div>
            </section>
            <section className="elements">
                {cards.map(card => (<Card card={card} onClick={props.onCardClick} key={card._id} link={card.link}/>))}
            </section>
        </main>
    )
}

export default Main