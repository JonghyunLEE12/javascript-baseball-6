import { STATUS_MSG } from '../baseballConst/constants.js';
import { OutputView } from '../views/OutputView.js';

class BaseballController {
  gameStart() {
    OutputView.printStatus(STATUS_MSG.gameStart);
  }
}

export default BaseballController;
