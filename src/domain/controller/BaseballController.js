import { STATUS_MSG } from '../baseballConst/constants.js';
import { OutputView } from '../views/OutputView.js';
import { InputView } from '../views/InputView.js';

class BaseballController {
  async gameStart() {
    OutputView.printStatus(STATUS_MSG.gameStart);
    await this.#inputNumber();
  }

  async #inputNumber() {
    try {
      const userNumber = await InputView.readNumber();
      console.log(userNumber);
    } catch (error) {
      throw error;
    }
  }
}

export default BaseballController;
