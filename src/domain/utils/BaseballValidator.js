import { ERROR_MSG } from '../baseballConst/constants.js';

class BaseballValidator {
  #REGEX;

  constructor() {
    this.#REGEX = /\s|[!@#$%^&*()?"':{}|<>]|[a-zA-Z]|[가-힣]/;
  }

  numberValidator(number) {
    this.#lengthCheck(number);
  }

  #lengthCheck(number) {
    if (number.length !== 3) {
      throw new Error(ERROR_MSG.lengthError);
    }
  }
}

export default BaseballValidator;
