import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const [title, setTitle] = React.useState("");
  const [place, setPlace] = React.useState("");

  React.useEffect(() => {
    if (isOpen) {
      setTitle("");
      setPlace("");
    }
  }, [isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace({
      name: title,
      link: place,
    });
  }

  function handleTitleChange(evt) {
    setTitle(evt.target.value);
  }

  function handlePlaceChange(evt) {
    setPlace(evt.target.value);
  }

  return (
    <PopupWithForm
      name="popupFormCardAdd"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <input
            type="text"
            name="place"
            value={title}
            onChange={handleTitleChange}
            className="popup__input popup__input_type_place"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__input-error popup__input-error_type_place"></span>
          <input
            type="url"
            name="link"
            value={place}
            onChange={handlePlaceChange}
            className="popup__input popup__input_type_link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error popup__input-error_type_link"></span>
        </>
      }
    />
  );
}

export default AddPlacePopup;
