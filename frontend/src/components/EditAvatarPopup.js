import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const ref = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: ref.current.value,
    });
  }

  React.useEffect(() => {
    ref.current.value = "";
  }, [isOpen]);
  return (
    <PopupWithForm
      name="popupFormAvatar"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <input
            type="url"
            name="avatar"
            ref={ref}
            className="popup__input popup__input_type_avatar"
            placeholder="Ссылка на аватар"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-error popup__input-error_type_avatar"></span>
        </>
      }
    />
  );
}
export default EditAvatarPopup;
