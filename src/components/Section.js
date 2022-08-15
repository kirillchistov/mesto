//  Класс Section (отрисовка элементов на странице)  //

export default class Section {
/*    constructor({ items, renderer }, container) { */
    constructor({ renderer }, container) {
      this._container = document.querySelector(container);
      this._renderer = renderer;
    }

  //  Публичный - Создаем и вставляем новую карточку в разметку в начало  //    
    renderCard(item) { 
      this._renderer(item);
    }

  //  Отрисовываем имеющиеся карточки мест  //    
    renderItems(items) {
      this._renderedItems = items;
      this._renderedItems.forEach((item) => {
        this._renderer(item);
      });
    };
  
//  Публичный - Создаем и (пока не) вставляем новую карточку в разметку в начало  //    
    addItem(element) {
 /*     const card = this._renderer(element); */
      this._container.prepend(element);
    }


  //  Публичный - Очищаем галерею - пока не нужно  //
    clear() {
      this._container.innerHTML = '';
    };
}