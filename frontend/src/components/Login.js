import React from "react";

function Login({ onLogin }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    onLogin(email, password);
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
        <h1 className="homepage__title">Вход</h1>
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
            Войти
          </button>
        </form>
      </section>
    </main>
  );
}

export default Login;
