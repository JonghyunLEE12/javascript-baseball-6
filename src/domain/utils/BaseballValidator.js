import { ERROR_MSG } from '../baseballConst/constants.js';

class BaseballValidator {
  #REGEX;

  constructor() {
    this.#REGEX = /\s|[!@#$%^&*()?"':{}|<>]|[a-zA-Z]|[가-힣]/;
  }

  numberValidator(number) {
    this.#safeNumber(number);
    this.#lengthCheck(number);
    this.#regaxCheck(number);
    this.#duplicateCheck(number);
  }

  #safeNumber(number) {
    if (!Number.isSafeInteger(Number(number))) {
      throw new Error(ERROR_MSG.notSafeIntegerError);
    }
  }

  #lengthCheck(number) {
    if (number.length !== 3) {
      throw new Error(ERROR_MSG.lengthError);
    }
  }

  #regaxCheck(number) {
    if (this.#REGEX.test(number)) {
      throw new Error(ERROR_MSG.regexError);
    }
  }

  #duplicateCheck(number) {
    if (new Set(number).size !== number.length) {
      throw new Error(ERROR_MSG.duplicateError);
    }
  }
}

export default BaseballValidator;
