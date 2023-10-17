import React from "react";

function PopupWithForm(props) {
  return (
    <div
      className={
        props.isOpen
          ? `popup popup_${props.name} popup_opened`
          : `popup popup_${props.name}`
      }
    >
      <div className="popup__container">
        <button
          onClick={props.onClose}
          type="button"
          className="popup__close-button"
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          name={props.name}
          onSubmit={props.onSubmit}
          className="form"
          noValidate
        >
          {props.children}
          <button type="submit" className="popup__save">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
