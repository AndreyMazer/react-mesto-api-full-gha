import React from "react";
import { Link } from "react-router-dom";

function Register({ onRegister }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegister(email, password);
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordChange(evt) {
    setPassword(evt.target.value);
  }

  return (
    <main className="content">
      <section className="homepage">
        <h1 className="homepage__title">Регистрация</h1>
        <form className="form__homepage" onSubmit={handleSubmit}>
          <div className="homepage__field">
            <input
              value={email}
              onChange={handleEmailChange}
              type="email"
              placeholder="Email"
              className="homepage__input homepage__input_type_email"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="homepage__text-error"></span>
          </div>
          <div className="homepage__field">
            <input
              value={password}
              onChange={handlePasswordChange}
              type="password"
              placeholder="Пароль"
              className="homepage__input homepage__input_type_password"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="homepage__text-error"></span>
          </div>
          <button type="submit" className="homepage__button">
            Зарегистрироваться
          </button>
        </form>
        <Link to="/sign-in" className="homepage__login">
          Уже зарегистрированы? Войти
        </Link>
      </section>
    </main>
  );
}

export default Register;
