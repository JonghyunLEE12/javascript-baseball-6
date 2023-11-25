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
    this.BASEBALL_DATA.updateAnswerNumber();
    await this.#inputNumber();
  }

  async #inputNumber() {
    try {
      const userNumber = await InputView.readNumber();
      this.BASEBALL_DATA.updateUserNumber(userNumber);
      await this.#strikeCheck();
    } catch (error) {
      throw error;
    }
  }

  async #strikeCheck() {
    const checkStrike = new StrikeChecker();
    const checkingConst = await checkStrike.checking(
      this.BASEBALL_DATA.getAnswerNumber(),
      this.BASEBALL_DATA.getUserNumber(),
    );
    OutputView.printResult(checkingConst);
    if (checkingConst.strike === 3) {
      return this.#reGame();
    }
    return this.#inputNumber();
  }

  async #reGame() {
    OutputView.printStatus(STATUS_MSG.strike);
    try {
      const reGameNumber = await InputView.reGameNumber();
      if (reGameNumber === '1') {
        await this.gameStart();
      }
    } catch (error) {
      throw error;
    }
    return this.#endGame();
  }

  #endGame() {
    OutputView.printStatus(STATUS_MSG.gameOver);
  }
}

export default BaseballController;
