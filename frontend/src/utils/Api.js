class Api {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  _toDo(endpoint, options) {
    const url = `${this._url}/${endpoint}`;
    return fetch(url, options).then(this._checkRes);
  }

  getProfile() {
    return this._toDo("users/me", {
      method: "GET",
      headers: this._headers,
    });
  }

  editProfile(data) {
    return this._toDo(`users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    });
  }

  editAvatar(data) {
    return this._toDo(`users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    });
  }

  getInitialCards() {
    return this._toDo(`cards`, {
      method: "GET",
      headers: this._headers,
    });
  }

  addCard(data) {
    return this._toDo(`cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    });
  }

  deleteCard(id) {
    return this._toDo(`cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  addLike(id) {
    return this._toDo(`cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    });
  }

  deleteLike(id) {
    return this._toDo(`cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    });
  }
}

export const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-70",
  headers: {
    authorization: "a28722e7-954c-4bb9-8b79-c4a8de175d4b",
    "Content-Type": "application/json",
  },
});

export default api;
