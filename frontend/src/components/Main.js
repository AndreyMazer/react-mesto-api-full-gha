import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  cards,
  onCardLike,
  onCardDelete,
}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <img
          src={currentUser.avatar}
          className="profile__avatar"
          alt="Фотография пользователя"
        />
        <button
          onClick={onEditAvatar}
          type="button"
          className="profile__avatar profile__avatar_button"
        ></button>

        <div className="info">
          <h1 className="info__name">{currentUser.name}</h1>
          <button
            onClick={onEditProfile}
            type="button"
            className="info__edit"
          ></button>

          <p className="info__career">{currentUser.about}</p>
        </div>
        <button
          onClick={onAddPlace}
          type="button"
          className="profile__add"
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => (
          <Card
            onCardClick={onCardClick}
            card={card}
            key={card._id}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
