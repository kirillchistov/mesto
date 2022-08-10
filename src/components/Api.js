//  Класс для работы с API. Все запросы должны быть методами этого класса  //

//  В конструкторе получаем baseUrl и заголовки запроса  //
export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  //  Обрабатываем ответ сервера и, если не ОК, выводим реджектим с ошибкой  //
  _handleServerResponse(res) {
/*    console.log(res.json()); */
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  //  Получаем доступные карточки мест с сервера методом GET  //
  getCards() {
    this._cards = fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then(this._handleServerResponse);
/*    console.log(this._cards); */
    return this._cards;
  }

//  Получаем данные профиля с сервера методом GET  //
  getProfile() {
    this._profileInfo = fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then(this._handleServerResponse);
/*    console.log(`getProfile: ${this._profileInfo}`); */
    return this._profileInfo;
  }

//  Сохраняем измененные данные профиля на сервере методом PATCH  //
  setProfile(obj) {
    console.log(`obj: ${obj.profileName}, ${obj.profileJob},`);
    this._newProfile = fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: obj.profileName,
        about: obj.profileJob,
      }),
    }).then(this._handleServerResponse);
/*    console.log(`resStatus: ${res.status}`); */
    return this._newProfile;
  }

//  Сохраняем измененный аватар профиля на сервере через  PATCH  //
  setAvatar(obj) {
    this._newAvatar = fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: obj.avatar,
      }),
    }).then(this._handleServerResponse);
    console.log(`setAvatar - _newAvatar: ${this._newAvatar}`);
    return this._newAvatar;
  }

//  Сохраняем данные о лайках карточки на сервере через  PUT  //
  addLike(obj) {
    this._like = fetch(`${this._baseUrl}/cards/${obj._id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._handleServerResponse);
    return this._like;
  }

//  Удаляем лайк карточки с сервера через  DELETE  //
  deleteLike(obj) {
    this._deleteLike = fetch(`${this._baseUrl}/cards/${obj._id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleServerResponse);
    return this._deleteLike;
  }

//  Добавляем новую карточку на сервере через  POST  //
  addCard(obj) {
/*    console.log(`addCard to: ${this._baseUrl}/cards with: ${this._headers}, ${obj.name}, ${obj.link}`); */
    this._addedCard = fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: obj.name,
        link: obj.link,
      }),
    }).then(this._handleServerResponse);
    return this._addedCard;
  }

//  Удаляем карточку с сервера через  DELETE  //
  deleteCard(id) {
    this._deletedCard = fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleServerResponse);
    return this._deletedCard;
  }
}