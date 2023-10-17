import headerLogo from "../images/logo.svg";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Header(props) {
  const [isActiveMenu, setIsActiveMenu] = React.useState(false);

  function toggleMenu() {
    setIsActiveMenu(!isActiveMenu);
  }
  return (
    <header className={isActiveMenu ? "header_active" : "header"}>
      <img className="header__logo" src={headerLogo} alt="лого" />
      <Routes>
        <Route
          path="/sign-up"
          element={
            <Link to="/sign-in" className="header__src">
              Войти
            </Link>
          }
        />
        <Route
          path="/sign-in"
          element={
            <Link to="/sign-up" className="header__src">
              Регистрация
            </Link>
          }
        />
        <Route
          path="/"
          element={
            <>
              <div
                className={
                  isActiveMenu ? "header__elements_active" : "header__elements"
                }
              >
                <div className="header__mail">{props.userEmail}</div>
                <button onClick={props.onSignOut} className="header__exit">
                  Выйти
                </button>
              </div>
              <button
                className={
                  isActiveMenu ? "header__menu_active" : "header__menu"
                }
                onClick={toggleMenu}
              ></button>
            </>
          }
        />
      </Routes>
    </header>
  );
}

export default Header;
