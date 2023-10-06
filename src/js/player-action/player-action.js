export default class PlayerAction {
  constructor(element, scopeelement) {
    this._scopeelement = scopeelement;
    this.scope = 5;
    const items = element.querySelectorAll('.playing-field-item');

    this.onItemClick = this.onItemClick.bind(this);

    for (const item of items) {
      item.addEventListener('click', this.onItemClick);
    }
  }

  onItemClick(e) {
    e.preventDefault();
    if (e.target.classList.contains('goblin-img')) {
      this.scope = 5;
      this._scopeelement.textContent = this.scope;
    }
  }

  decScope() {
    this.scope -= 1;
    this._scopeelement.textContent = this.scope;
  }

  checkLose() {
    if (this.scope <= 0) {
      this._scopeelement.textContent = 'КОНЕЦ ИГРЫ!';
      return true;
    }

    return false;
  }
}
