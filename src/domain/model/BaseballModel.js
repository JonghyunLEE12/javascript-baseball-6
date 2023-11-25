import { Random } from '@woowacourse/mission-utils';

class BaseballModel {
  #ANSWER_NUMBER;

  #USER_NUMBER;

  constructor() {
    this.#ANSWER_NUMBER = this.makeAnswerNumber();
  }

  makeAnswerNumber() {
    const computer = [];
    while (computer.length < 3) {
      const number = Random.pickNumberInRange(1, 9);
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
