import React from "react";
import okPic from "../images/galka.png";
import errorPic from "../images/neverno.png";

function InfoTooltip(props) {
  return (
    <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__infotooltip">
        <img
          className="popup__regImage"
          alt="результат"
          src={props.status ? okPic : errorPic}
        />
        <h2 className="popup__feedback">
          {props.status
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте ещё раз."}
        </h2>
        <button
          onClick={props.onClose}
          type="button"
          className="popup__close-button"
        ></button>
      </div>
    </div>
  );
}

export default InfoTooltip;
