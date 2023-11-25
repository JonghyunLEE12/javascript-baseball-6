import { Random } from '@woowacourse/mission-utils';
import { GAME_CONST } from '../baseballConst/constants.js';

class BaseballModel {
  #ANSWER_NUMBER;

  #USER_NUMBER;

  updateAnswerNumber() {
    this.#ANSWER_NUMBER = this.makeAnswerNumber();
  }

  makeAnswerNumber() {
    const computer = [];
    while (computer.length < GAME_CONST.maxLength) {
      const number = Random.pickNumberInRange(
        GAME_CONST.NumberFrom,
        GAME_CONST.NumberTo,
      );
      if (!computer.includes(number)) {
        computer.push(number);
      }
    }
    return computer;
  }

  getAnswerNumber() {
    return this.#ANSWER_NUMBER.map((eachNumber) => String(eachNumber));
  }

  updateUserNumber(number) {
    this.#USER_NUMBER = number;
  }

  getUserNumber() {
    return this.#USER_NUMBER.split('');
  }
}

export default BaseballModel;
