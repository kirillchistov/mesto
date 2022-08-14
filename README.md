# Проект: Место
## ПР №4-9 в Я.Практикуме. К. Чистов

### Обзор
* Интро
* Стек
* Макет
* Картинки
* Верстка
* Поп-ап и обработка формы
* Чек-лист
* Доработки


**Интро**
* Проект "Место" - интерактивная фотогалерея путешественника
* [Приложение на GH Pages](https://kirillchistov.github.io/mesto/index.html)

**Стек (Что будем использовать)**
- HTML, CSS (БЭМ, Nested, адаптив Flex + Grid)
- JavaScript (позже React, WebPack и т.п.)

**Макет**
* [Figma для ПР4](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1)
* [Figma для ПР5](https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1)
* [Figma для ПР6](https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0%3A1)
* [Figma для ПР9](https://www.figma.com/file/PSdQFRHoxXJFs2FH8IXViF/JavaScript-9-sprint?node-id=0%3A1)

**Картинки**
* Взяты из макета в Фигме и UnSplash.
* [Оптимизируем через TinyPNG](https://tinypng.com/), чтобы ускорить загрузку сайта.

**Верстка ПР4**
* [x] Файловая структура по БЭМ. 
* [x] Вёрстка адаптивная 
* [x] Мин. ширина: 320px. Макс.: 1280px (три карточки).
* [x] Поп-ап редактирования профиля
* [x] Размер текстовых полей в профиле в моб. версии
* [x] [Оттипографить текст](https://www.artlebedev.ru/typograf/)
* [x] [Чек-лист ПР4](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-4.pdf)

**Разработка ПР5**
* [x] 6 карточек «из коробки» и [Unsplash](https://unsplash.com/collections/8749236/russia)
* [x] Рендеринг исходных карточек
* [x] Форма добавления карточки [Взять в Figma](https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1)
* [x] Добавление карточки
* [x] Лайк карточки
* [x] Урна и Удаление карточки 
* [x] Открытие попапа с картинкой и закрытие по кнопке
* [x] Плавное открытие и закрытие попапов
* [x] [Чек-лист ПР5](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-5.pdf)

**Разработка ПР6**
* [x] Валидация формы «Редактировать профиль» [см. макет в Figma](https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0%3A1) 
* [x] Валидация формы «Новое место»
* [x] Закрытие попапа кликом на оверлей
* [x] Закрытие попапа нажатием на Esc
* [x] Учесть [требования к коду валидации форм](https://practicum.yandex.ru/learn/web/courses/35d951a1-b62c-4a96-96ac-a8118657fad0/sprints/34081/topics/43fd3acc-ab09-42b0-9a1a-478423a2650a/lessons/e42c1359-1e14-4586-bb92-ad1b44c6e0c4/) 
* [x] [Чек-лист ПР6](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-6.pdf)

**Рефакторинг ПР7**
* [x] 1.  Класс Card
* [x] 2.  Экземпляры класса Card  
* [x] 3.  Класс FormValidator
* [x] 4   Экземпляры класса FormValidator
* [x] 5   Разбить JS на модули (3 js-файла)
* [x] 6.  Установка локального сервера через VSCode Live Serve
* [x] 7.  [Проверка по Чек-листу ПР7](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-7.pdf)

**Рефакторинг ПР8**
* [x] 1.  Класс Section 
* [x] 2.  Класс Popup
* [x] 3.  Класс PopupWithImage
* [x] 4.  Класс PopupWithForm
* [x] 5.  Класс UserInfo
* [x] 6.  Класс Card
* [x] 7.  Файл .gitignore
* [x] 8.  Связь классов передачей в конструктор функции - колбэка
* [x] 9.  Сборка Вебпаком
* [x] 10. [Чек-лист ПР8](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-8.pdf)

**Подключение к серверу ПР9**
* [x] 0.  Получить токен
* [x] 1.  Загрузка информации о пользователе с сервера
* [x] 2.  Загрузка карточек с сервера
* [x] 3.  Редактирование профиля
* [x] 4.  Добавление новой карточки
* [x] 5.  Отображение количества лайков карточки
* [x] 6.  Попап удаления карточки
* [x] 7.  Удаление карточки
* [x] 8.  Постановка и снятие лайка
* [x] 9.  Обновление аватара пользователя
* [x] 10. Улучшенный UX всех форм
* [x] 11. Класс Api
* [x] 12. Проверять качество ответа (res.ok, res.status)
* [x] 13. Учитывать возможность возврата ошибки сервером
* [x] 13. Обрабатывать ошибки в .catch
* [x] 14. Network для просмотра запросов

* [ ] [Чек-лист ПР9](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-9.pdf)

**BackLog Доработки по ПР**
* [ ] ПР5+ [Документация по JSDOC](https://jsdoc.app/about-getting-started.html)
* [ ] ПР6: [Придумать решение с rest массива (...)](https://practicum.yandex.ru/learn/web/courses/35d951a1-b62c-4a96-96ac-a8118657fad0/sprints/34081/topics/43fd3acc-ab09-42b0-9a1a-478423a2650a/lessons/e42c1359-1e14-4586-bb92-ad1b44c6e0c4/)
* [x] ПР7: все замечания отработаны
* [ ] ПР8: все замечания отработаны, но не работает деплой на gh-pages
* [ ] ПР9: ждем ревью

* [Страница приложения](https://kirillchistov.github.io/mesto/index.html)