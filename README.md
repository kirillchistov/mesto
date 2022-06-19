# Проект: Место
## ПР №4,5,6 в Я.Практикуме. К. Чистов

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
* Проект Место на [GHPages](https://kirillchistov.github.io/mesto/index.html).


**Стек (Что будем использовать)**
- HTML, CSS (БЭМ, адаптив Flex + Grid)
- JavaScript пока без React, WebPack и т.п.

**Макет**
* [Figma для ПР4](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1)
* [Figma для ПР5](https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1)
* [Figma для ПР6](https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0%3A1)

**Картинки**
* Взяты из маркета в Фигме и UnSplash.
* [Оптимизируем через TinyPNG](https://tinypng.com/), чтобы ускорить загрузку сайта.

**Верстка ПР4**
* Файловая структура по БЭМ. 
* Вёрстка адаптивная: ширина зоны = f(ширины окна браузера). Не допускать горизонтальную полосу прокрутки. 
* Минимальная ширина: 320px (одна карточка в ряд). Максимальная: 1280px (три карточки в ряд).
* Поп-ап редактирования профиля - поправить размер кнопки закрытия. - done
* Размер текстовых полей в профиле в мобильной версии поправить - done
* [Оттипографить текст](https://www.artlebedev.ru/typograf/)
* [Чек-лист ПР4](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-4.pdf)

**Разработка ПР5**
* Есть 6 карточек «из коробки» и [Unsplash](https://unsplash.com/collections/8749236/russia).
* Сделать рендеринг исходных карточек из JS-объекта - done 
* Форма добавления карточки [Взять в Figma](https://www.figma.com/file/bjyvbKKJN2naO0ucURl2Z0/JavaScript.-Sprint-5?node-id=0%3A1) - done
* Добавление карточки (имя и ссылка картинки вводятся пользователем) - done
* Лайк карточки (сердечко меняет цвет) - done
* Урна и Удаление карточки (как в макете) - done
* Открытие попапа с картинкой и закрытие по кнопке - done
* Плавное открытие и закрытие попапов - done
* [Чек-лист ПР5](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-5.pdf)

**Разработка ПР6**
* Валидация формы «Редактировать профиль» [см. макет в Figma](https://www.figma.com/file/kRVLKwYG3d1HGLvh7JFWRT/JavaScript.-Sprint-6?node-id=0%3A1) - done
* Валидация формы «Новое место» - done
* Закрытие попапа кликом на оверлей - done
* Закрытие попапа нажатием на Esc - done
* Учесть [требования к коду валидации форм](https://practicum.yandex.ru/learn/web/courses/35d951a1-b62c-4a96-96ac-a8118657fad0/sprints/34081/topics/43fd3acc-ab09-42b0-9a1a-478423a2650a/lessons/e42c1359-1e14-4586-bb92-ad1b44c6e0c4/) 
* [Чек-лист ПР6](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-6.pdf)

**Чек-лист**
* Отформатировать код [в VSCode](https://codengineering.ru/q/how-do-you-format-code-in-visual-studio-code-vscode-27090) или [онлайн-сервисом](https://webformatter.com/). См. [styleguide](https://code.s3.yandex.net/frontend-developer/landings/layout-design-rules/index.html)

**Доработки**
* Переписать функции на стрелочные - done
* Разделить функции (1 функция = 1 фича) - done where possible
* Починить вертикальный скролл (пропал в ПР5) - done
* Починить спан с ошибкой (текст выходит за пределы спана)
* Починить закрытие по Esc если в форме есть ошибка ввода
* Поправить ошибки, найденные ревьюером