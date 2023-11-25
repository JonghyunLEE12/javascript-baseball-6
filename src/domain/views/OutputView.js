import { Console } from '@woowacourse/mission-utils';
import { OUTPUT_MSG } from '../baseballConst/constants.js';

export const OutputView = {
  printStatus(message) {
    Console.print(message);
  },

  printResult(checking) {
    Console.print(OUTPUT_MSG.result(checking));
  },
};
