//  Класс Section (отрисовка элементов на странице)  //

export default class Section {
    constructor({ renderer }, container) {
      this._container = container;
      this._renderer = renderer;
    }

//  Отрисовываем имеющиеся карточки мест  //    
    renderItems(items) {
      this._renderedItems = items;
      this._renderedItems.forEach((item) => {
        this._renderer(item);
      });
    }
  
//  Вставляем новую карточку в начало галереи  //    
    addItem(element) {
      this._container.prepend(element);
    }
  }