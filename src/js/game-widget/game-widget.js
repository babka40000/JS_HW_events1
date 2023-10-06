import * as url from './img/goblin.png';

export default class GameWiget {
  constructor(element) {
    this._xPosition = 0;
    this._yPosition = 0;

    this._element = element;
  }

  _getFieldByPosition() {
    const row = this._element.querySelectorAll('.playing-field-row')[this._yPosition - 1];
    const fieldItem = row.querySelectorAll('.playing-field-item')[this._xPosition - 1];
    return fieldItem;
  }

  _destroyGoblin() {
    this._getFieldByPosition().querySelector('.goblin-img').remove();
  }

  _generatePositions() {
    let x;
    let y;

    do {
      x = Math.round(Math.random() * 3 + 1);
      y = Math.round(Math.random() * 3 + 1);
    } while (x === this._xPosition && y === this._yPosition);

    this._xPosition = x;
    this._yPosition = y;
  }

  generateGoblin() {
    if (this._xPosition !== 0 || this._xPosition !== 0) {
      this._destroyGoblin();
    }

    this._generatePositions();

    this._getFieldByPosition().insertAdjacentHTML('afterBegin', `<img class="goblin-img" src="${url.default}"></img>`);
  }
}
