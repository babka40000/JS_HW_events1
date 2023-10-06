import GameWiget from '../js/game-widget/game-widget';
import PlayerAction from '../js/player-action/player-action';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM(`<div class="playing-field">
<div class="playing-field-row">
  <div class="playing-field-item">
  </div>
  <div class="playing-field-item">
  </div>
  <div class="playing-field-item">
  </div>
  <div class="playing-field-item">
  </div>
</div>
<div class="playing-field-row">
  <div class="playing-field-item">
  </div>
  <div class="playing-field-item">
  </div>
  <div class="playing-field-item">
  </div>
  <div class="playing-field-item">
  </div>
</div>
<div class="playing-field-row">
  <div class="playing-field-item">
  </div>
  <div class="playing-field-item">
  </div>
  <div class="playing-field-item">
  </div>
  <div class="playing-field-item">
  </div>
</div>
<div class="playing-field-row">
  <div class="playing-field-item">
  </div>
  <div class="playing-field-item">
  </div>
  <div class="playing-field-item">
  </div>
  <div class="playing-field-item">
  </div>
</div>  
</div>`);

const domScope = new JSDOM(`<div class="board">
<span class="scope">5</span>
</div>`);

let wiget = new GameWiget(dom.window.document);
let action = new PlayerAction(dom.window.document, domScope.window.document);

test('generatePositions', () => {
  wiget._generatePositions();

  expect(wiget._xPosition).toBeGreaterThan(0);
  expect(wiget._yPosition).toBeGreaterThan(0);

  expect(wiget._xPosition).toBeLessThan(5);
  expect(wiget._yPosition).toBeLessThan(5);
});

test('getFieldByPosition', () => {
  wiget._generatePositions();

  const item = wiget._getFieldByPosition();
  expect(item.classList.contains('playing-field-item')).toBeTruthy();
});

test('generate and destroy goblin', () => {
  wiget = new GameWiget(dom.window.document);
  wiget.generateGoblin();
  wiget.generateGoblin();
  let item = wiget._element.querySelector('.goblin-img');
  expect(item.classList.contains('goblin-img')).toBeTruthy();

  wiget._destroyGoblin();
  item = wiget._element.querySelector('.goblin-img');

  expect(item).toBeNull();
});

test('dec scope', () => {
  action = new PlayerAction(dom.window.document, domScope.window.document);
  action.decScope();
  expect(action.scope).toBe(4);
});

test('check lose', () => {
  action = new PlayerAction(dom.window.document, domScope.window.document);
  expect(action.checkLose()).toBeFalsy();
  action.scope = 0;
  expect(action.checkLose()).toBeTruthy();
});

// test('on click', () => {
//   action = new PlayerAction(dom.window.document, domScope.window.document);
//   dom.window.document.addEventListener('click', action.onItemClick);
  
// });