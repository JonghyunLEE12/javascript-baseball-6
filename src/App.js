import BaseballController from './domain/controller/BaseballController.js';

class App {
  constructor() {
    this.PLAYER = new BaseballController();
  }

  async play() {
    await this.PLAYER.gameStart();
  }
}

export default App;
