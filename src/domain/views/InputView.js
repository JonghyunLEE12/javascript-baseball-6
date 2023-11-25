import { Console } from '@woowacourse/mission-utils';
import { INPUT_MSG } from '../baseballConst/constants.js';

export const InputView = {
  async readNumber() {
    const userNumber = await Console.readLineAsync(INPUT_MSG.inputNumber);
    return userNumber;
  },
};
