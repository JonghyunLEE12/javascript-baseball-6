import { STATUS_MSG } from '../baseballConst/constants.js';
import { OutputView } from '../views/OutputView.js';
import { InputView } from '../views/InputView.js';
import BaseballModel from '../model/BaseballModel.js';
import StrikeChecker from '../utils/StrikeChecker.js';

class BaseballController {
  constructor() {
    this.BASEBALL_DATA = new BaseballModel();
  }

  async gameStart() {
    OutputView.printStatus(STATUS_MSG.gameStart);
    await this.#inputNumber();
  }

  async #inputNumber() {
    try {
      const userNumber = await InputView.readNumber();
      this.BASEBALL_DATA.updateUserNumber(userNumber);
      this.#strikeCheck();
    } catch (error) {
      throw error;
    }
  }

  #strikeCheck() {
    const checkStrike = new StrikeChecker();
    const checkingConst = checkStrike.checking(
      this.BASEBALL_DATA.getAnswerNumber(),
      this.BASEBALL_DATA.getUserNumber(),
    );
    OutputView.printResult(checkingConst);
    if (checkingConst.strike === 3) {
      return this.#reGame();
    }
    return this.#inputNumber();
  }

  #reGame() {
    console.log('Finish');
  }
}

export default BaseballController;
