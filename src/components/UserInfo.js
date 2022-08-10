//  Класс UserInfo. Управление отображением инфо о пользователе и аватар  //

export default class UserInfo {
    constructor(profileName, profileJob, profileAvatar) {
/*
      this._name = profileName;
      this._job = profileJob;
      this._avatar = profileAvatar;
      console.log(this._name, this._job);
*/
      this._name = document.querySelector(profileName);
      this._job = document.querySelector(profileJob);
      this._avatar = document.querySelector(profileAvatar);

    }

 //  Возвращаем данные профиля, втч ссылку на аватар  //    
    getUserInfo() {    
      this._userInfo = {
          name: this._name.textContent,
          about: this._job.textContent,
          avatar: this._avatar.src
      };
      return this._userInfo;
    }

 //  Заполняем поля данными профиля из объекта и подгружаем аватар по ссылке  //
    setUserInfo(userInfo) {
      if (userInfo.profileName && userInfo.profileJob && userInfo.profileAvatar) {
        this._name.textContent = userInfo.name;
        this._job.textContent = userInfo.about;
        this._avatar.src = userInfo.avatar;
      }      
    }
}