# Проект: Место
## ПР №4,5,6,7 в Я.Практикуме. К. Чистов

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
``` 
Актуальная версия проекта на [GH Pages](https://kirillchistov.github.io/mesto/index.html).
```

**Стек (Что будем использовать)**
- HTML, CSS (БЭМ, адаптив Flex + Grid)
- JavaScript (позже React, WebPack и т.п.)

**Макет**
* [Figma для ПР4](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1)
* [Figma для ПР5](https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1)
* [Figma для ПР6](https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0%3A1)

**Картинки**
* Взяты из маркета в Фигме и UnSplash.
* [Оптимизируем через TinyPNG](https://tinypng.com/), чтобы ускорить загрузку сайта.

**Верстка ПР4**
* [x] Файловая структура по БЭМ. 
* [x] Вёрстка адаптивная: ширина зоны = f(ширины окна браузера). Не допускать горизонтальную полосу прокрутки. 
* [x] Минимальная ширина: 320px (одна карточка в ряд). Максимальная: 1280px (три карточки в ряд).
* [x] Поп-ап редактирования профиля - поправить размер кнопки закрытия. - done
* [x] Размер текстовых полей в профиле в мобильной версии поправить - done
* [x] [Оттипографить текст](https://www.artlebedev.ru/typograf/)
* [x] [Чек-лист ПР4](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-4.pdf)

**Разработка ПР5**
* [x] Есть 6 карточек «из коробки» и [Unsplash](https://unsplash.com/collections/8749236/russia).
* [x] Сделать рендеринг исходных карточек из JS-объекта - done 
* [x] Форма добавления карточки [Взять в Figma](https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1) - done
* [x] Добавление карточки (имя и ссылка картинки вводятся пользователем) - done
* [x] Лайк карточки (сердечко меняет цвет) - done
* [x] Урна и Удаление карточки (как в макете) - done
* [x] Открытие попапа с картинкой и закрытие по кнопке - done
* [x] Плавное открытие и закрытие попапов - done
* [x] [Чек-лист ПР5](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-5.pdf)

**Разработка ПР6**
* [x] Валидация формы «Редактировать профиль» [см. макет в Figma](https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0%3A1) - done
* [x] Валидация формы «Новое место» - done
* [x] Закрытие попапа кликом на оверлей - done
* [x] Закрытие попапа нажатием на Esc - done
* [x] Учесть [требования к коду валидации форм](https://practicum.yandex.ru/learn/web/courses/35d951a1-b62c-4a96-96ac-a8118657fad0/sprints/34081/topics/43fd3acc-ab09-42b0-9a1a-478423a2650a/lessons/e42c1359-1e14-4586-bb92-ad1b44c6e0c4/) 
* [x] [Чек-лист ПР6](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-6.pdf)

**Рефакторинг ПР7**
* [x] 1.  Создать класс Card (создает карточку с текстом и ссылкой на изображение) - in progress
- [x] 1.1 конструктор класса принимает её данные и селектор её template-элемента;
- [x] 1.2 класс содержит приватные методы, которые работают с разметкой, устанавливают слушатели событий;
- [x] 1.3 класс содержит приватные методы для каждого обработчика;
- [x] 1.4 класс содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.
* [x] 2.  Для каждой карточки создать экземпляр класса Card  
* [x] 3.  Создать класса FormValidator (настраивает валидацию полей формы); - in progress
- [x] 3.1 принимает в конструктор объект настроек с селекторами и классами формы;
- [x] 3.2 принимает вторым параметром элемент той формы, которая валидируется;
- [x] 3.3 имеет приватные методы, которые обрабатывают форму: проверяют валидность поля, изменяют состояние кнопки сабмита, устанавливают все обработчики;
- [x] 3.4 имеет публичный метод enableValidation, который включает валидацию формы.
* [x] 4  Для каждой проверяемой формы создать экземпляр класса FormValidator - in progress
* [x] 5  Разбить JS на модули (3 js-файла) - done
- [x] 5.1 Card.js с кодом класса Card,
- [X] 5.2 FormValidator.js с кодом класса FormValidator,
- [X] 5.3 index.js со всем остальным кодом.
- [X] 5.4  Классы Card и FormValidator экспортируются из соответствующих файлов, импортируются в index.js и используются в нём.
- [X] 5.5  Отдельные js-файлы подключены в index.html как модули
- [X] 5.6  Объединить обработчики кликов мыши (x, overlay) для закрытия попапов - done
* [X] 6.  Установка локального сервера через VSCode Live Serve - done
* [ ] 7.  [Проверить по Чек-листу ПР7](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-7.pdf)

**Общий чек-лист**
* Отформатировать код [в VSCode](https://codengineering.ru/q/how-do-you-format-code-in-visual-studio-code-vscode-27090) или [онлайн-сервисом](https://webformatter.com/). См. [styleguide](https://code.s3.yandex.net/frontend-developer/landings/layout-design-rules/index.html)

**Доработки ПР6**
* Поправить критичные ошибки по комментариям ревьюера - done
* Придумать решение с rest массива (...) - not done

**Доработки ПР7**
* Поправить ошибки по ревью - not started