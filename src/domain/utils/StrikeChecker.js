import { STRIKE_BALL } from '../baseballConst/constants.js';

export const StrikeChecker = {
  checkingConst: { ...STRIKE_BALL },
  checking(answer, user) {
    this.strikeCheck(answer, user);
    this.ballCheck(answer, user);
    return this.checkingConst;
  },

  strikeCheck(answer, user) {
    answer.forEach((eachNumber, idx) => {
      if (eachNumber === user[idx]) {
        this.checkingConst.strike += 1;
      }
    });
  },

  ballCheck(answer, user) {
    answer.forEach((eachNumber, idx) => {
      if (user.includes(eachNumber) && user[idx] !== eachNumber) {
        this.checkingConst.ball += 1;
      }
    });
  },
};
