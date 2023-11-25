import { Console } from '@woowacourse/mission-utils';
import { INPUT_MSG } from '../baseballConst/constants.js';
import BaseballValidator from '../utils/BaseballValidator.js';

export const InputView = {
  NumberValidate: new BaseballValidator(),
  async readNumber() {
    const userNumber = await Console.readLineAsync(INPUT_MSG.inputNumber);
    await this.NumberValidate.numberValidator(userNumber);
    return userNumber;
  },
};
