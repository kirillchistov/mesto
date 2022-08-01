//  Класс UserInfo. Управление отображением инфо о пользователе  //

export default class UserInfo {
    constructor(profileName, profileJob) {
      this._name = document.querySelector(profileName);
      this._job = document.querySelector(profileJob);
    }

 //  Возвращаем данные профиля  //    
    getUserInfo() {    
      const userInfo = {
          profileName: this._name.textContent,
          profileJob: this._job.textContent
        };
      return userInfo;
    }

 //  Заполняем поля данными профиля из объекта  //
    setUserInfo(userInfo) {
      this._name.textContent = userInfo.profileName;
      this._job.textContent = userInfo.profileJob;
    };
}