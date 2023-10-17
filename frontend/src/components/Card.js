import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like ${
    isLiked && "element__like_active"
  }`;
  const handleClick = () => {
    onCardClick(card);
  };
  function handleCardLike() {
    onCardLike(card);
  }
  function handleDeleteClick() {
    onCardDelete(card);
  }
  return (
    <div className="element">
      <img
        className="element__gora"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <h2 className="element__title">{card.name}</h2>
      <button
        type="button"
        className={cardLikeButtonClassName}
        onClick={handleCardLike}
      ></button>
      <span className="element__like-counter">{card.likes.length}</span>
      {isOwn && (
        <button
          type="button"
          className="element__delete"
          onClick={handleDeleteClick}
        ></button>
      )}
    </div>
  );
}

export default Card;
