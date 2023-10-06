import GameWiget from './game-widget/game-widget';
import PlayerAction from './player-action/player-action';

document.addEventListener('DOMContentLoaded', () => {
  const gameWidget = new GameWiget(document.querySelector('.playing-field'));
  const playerAction = new PlayerAction(document.querySelector('.playing-field'), document.querySelector('.scope'));
  
  gameWidget.generateGoblin();

  const intervalID = setInterval(() => {
    gameWidget.generateGoblin();
    playerAction.decScope();
    if (playerAction.checkLose()) {
      clearInterval(intervalID);
    } 
  }, 1000);
});
