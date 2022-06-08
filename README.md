# Проект: Место
## ПР №4,5 в Я.Практикуме. К. Чистов

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
* Проект Место на [GitPages](https://kirillchistov.github.io/mesto/index.html).


**Стек (Что будем использовать)**
- HTML, CSS (БЭМ, адаптив Flex + Grid)
- JavaScript пока без React, WebPack и т.п.

**Макет**
* [Figma для ПР4](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1)
* [Figma для ПР5](https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1)

**Картинки**
* Взяты из маркета в Фигме и UnSplash.
* [Оптимизируем через TinyPNG](https://tinypng.com/), чтобы ускорить загрузку сайта.

**Верстка**
* Файловая структура по БЭМ.
* Вёрстка адаптивная: ширина зоны = f(ширины окна браузера). Не допускать горизонтальную полосу прокрутки. 
* Минимальная ширина: 320px (одна карточка в ряд). Максимальная: 1280px (три карточки в ряд).
* Есть 6 карточек «из коробки» Остальное из [Unsplash](https://unsplash.com/collections/8749236/russia).
* Поп-ап редактирования профиля - поправить размер кнопки закрытия.
* Форма добавления карточки [Взять в Figma](https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1).
* Добавление карточки (имя и ссылка картинки вводятся пользователем).
* Лайк карточки (сердечко меняет цвет).
* Урна и Удаление карточки (как в макете).
* Открытие попапа с картинкой и закрытие по кнопке
* Плавное открытие и закрытие попапов
* [Оттипографить текст, где требуется](https://www.artlebedev.ru/typograf/)
* [Подробнее](https://practicum.yandex.ru/learn/web/courses/35d951a1-b62c-4a96-96ac-a8118657fad0/sprints/16600/topics/d60394db-0f4a-4c6e-bede-9bb46bf7d968/lessons/60e3a5ca-91ae-4c7c-bb78-1d25a001e9d6/)

**Чек-лист**
* [Чек-лист ПР4](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-4.pdf)
* [Чек-лист ПР5](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-5.pdf)
* Отформатировать код [в VSCode](https://codengineering.ru/q/how-do-you-format-code-in-visual-studio-code-vscode-27090) или [онлайн-сервисом](https://webformatter.com/). См. [стайл-гайд](https://code.s3.yandex.net/frontend-developer/landings/layout-design-rules/index.html)

**Доработки**
* Доделать кнопку закрытия по комментариям ревьюера в ПР4
* Освоить стрелочные функции
* Освоить forEach (на обработке событий попапов, кнопок)