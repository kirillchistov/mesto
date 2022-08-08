//  Класс UserInfo. Управление отображением инфо о пользователе и аватар  //

export default class UserInfo {
    constructor(profileName, profileJob, profileAvatar) {
      this._name = document.querySelector(profileName);
      this._job = document.querySelector(profileJob);
      this._avatar = document.querySelector(profileAvatar);
    }

 //  Возвращаем данные профиля, втч ссылку на аватар  //    
    getUserInfo() {    
      const userInfo = {
          profileName: this._name.textContent,
          profileJob: this._job.textContent,
          profileAvatar: this._avatar.src
        };
      return userInfo;
    }

 //  Заполняем поля данными профиля из объекта и подгружаем аватар по ссылке  //
    setUserInfo(userInfo) {
      if (userInfo.profileName && userInfo.profileJob && userInfo.profileAvatar) {
        this._name.textContent = userInfo.profileName;
        this._job.textContent = userInfo.profileJob;
        this._avatar.src = userInfo.profileAvatar;
      
    };
}