# Проект: Место
## ПР №4 в Я.Практикуме. Кирилл Чистов

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
* Здесь будет проект Место [GitPages](https://kirillchistov.github.io/mesto/index.html).


**Стек (Что будем использовать)**
- HTML, CSS (БЭМ, адаптив Flex + Grid)
- JavaScript простейший без React, WebPack и т.п.

**Макет**
* [Ссылка на макет в Figma](https://www.figma.com/file/2cn9N9jSkmxD84oJik7xL7/JavaScript.-Sprint-4?node-id=0%3A1)

**Картинки**
* Взяты из маркета в Фигме и UnSplash.
* [Оптимизируем через TinyPNG](https://tinypng.com/), чтобы ускорить загрузку сайта.

**Верстка**
* Файловая структура по БЭМ.
* Вёрстка адаптивная: ширина зоны = f(ширины окна браузера). Не допускать горизонтальную полосу прокрутки. 
* Минимальная ширина: 320px (одна карточка в ряд). Максимальная: 1280px (три карточки в ряд).
* На странице 6 карточек с фотографиями. Первые 3 как в макете, другие выбираем сами.
* Поп-ап: Позиция фикс. по центру экрана, полупрозрачный чёрный фон блоком popup. Внутри блока окно с формой popup__container, спозиционированное по центру. Изначально попап не виден (display: none). Чтобы попап открывался, добавляйте ему модификатор popup_opened с одним-единственным правилом. Правило должно изменять значение свойства display на block или flex. Чтобы закрыть попап, удаляйте у него модификатор popup_opened.
* Переполнение содержимого в блоках. Напр., в карточке «Карачаево-Черкессия» не вместившийся в блок текст обрезан, и появилось многоточие в конце. Для иконки сердечка готовим сразу и активное состояние — иконка должна закрашиваться чёрным.
* [Оттипографить текст, где требуется](https://www.artlebedev.ru/typograf/)
* [Подробнее](https://practicum.yandex.ru/learn/web/courses/35d951a1-b62c-4a96-96ac-a8118657fad0/sprints/16600/topics/d60394db-0f4a-4c6e-bede-9bb46bf7d968/lessons/60e3a5ca-91ae-4c7c-bb78-1d25a001e9d6/)

**Поп-ап и обработка форм**
* [Подробнее](https://practicum.yandex.ru/learn/web/courses/35d951a1-b62c-4a96-96ac-a8118657fad0/sprints/16600/topics/d60394db-0f4a-4c6e-bede-9bb46bf7d968/lessons/60e3a5ca-91ae-4c7c-bb78-1d25a001e9d6/)

**Чек-лист**
* [Чек-лист](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-4.pdf)
* Отформатировать код [в VSCode](https://codengineering.ru/q/how-do-you-format-code-in-visual-studio-code-vscode-27090) или [онлайн-сервисом](https://webformatter.com/). См. [стайл-гайд](https://code.s3.yandex.net/frontend-developer/landings/layout-design-rules/index.html)

**Доработки**
* БЭМ по стилям (перенести импорт вложенных стилей в css секций)
* БЭМ по именованию кнопок, функций и переменных - done
* Поправить решение без внешних отступов для кнопок - done where possible
* Докрутить адаптивность попапа - done
* Еще раз проверить все отступы в адаптиве vs. макет в фигме - done
* Настроить правильную систему веток в Git - done partially
* js --> index.js done
* Корректно подключить шрифт - done
* Кнопка (http://joxi.ru/82QxB6Qt8a83bm) - done
* .popup__header размер - done
* .popup__submit размер шрифта - done
* Доделать pixel perfect, в т.ч.:
* 1280 Отступы (http://joxi.ru/823RdPxHzQzKym) - done where possible
* 320 отступы (http://joxi.ru/zANOzgYI1L1xDr) - done where possible
* Размер фона кнопки (http://joxi.ru/MAjxE4otd3dLRm) - ?
* Отступы http://joxi.ru/v29k36PC4K4Yzr  - done where possible
* Отступы не соответствуют макету http://joxi.ru/gmv5p4vTeGeMdr  - done where possible
* .popup__header размер - done
* .popup__submit размер шрифта - done
