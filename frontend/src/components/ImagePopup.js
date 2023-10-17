import React from "react";
function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_big ${card && "popup_opened"}`}
      id="popupBigCard"
    >
      <div className="popup__container-big">
        <img
          className="popup__picture popup__picture_big"
          src={card && card.link}
          alt={card && card.name}
        />
        <button
          onClick={onClose}
          type="button"
          className="popup__close-button popup__close-button_big"
        ></button>
        <h2 className="popup__title-big">{card && card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;
