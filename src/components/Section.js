//  Класс Section (отрисовка элементов на странице)  //

export default class Section {
/*    constructor({ items, renderer }, container) { */
    constructor({ renderer }, container) {
/*        this._renderedItems = items; */
      this._container = document.querySelector(container);
      this._renderer = renderer;
    }

//  Отрисовываем имеющиеся карточки мест  //    
    renderItems() {
      this._renderedItems.forEach((item) => {
        this._renderer(item);
        console.log(`item: ${item}`);
      });
    };
  
//  Публичный - Вставляем новую карточку в разметку в начало галереи  //    
    addItem(element) {
      this._container.prepend(element);
    }

  //  Публичный - Очищаем галерею - пока не нужно  //
    clear() {
      this._container.innerHTML = '';
    };
}