/* eslint-disable max-lines-per-function */
import BaseballValidator from '../../src/domain/utils/BaseballValidator.js';

describe('InputTest', () => {
  const testCases = [
    { userNumber: '1234' },
    { userNumber: '!@#$' },
    { userNumber: '-123' },
    { userNumber: '-일이상' },
    { userNumber: '111' },
    { userNumber: '012' },
    { userNumber: '102' },
    { userNumber: '130' },
    { userNumber: '134.5' },
  ];

  testCases.forEach((testCase) => {
    test(`유저 번호 테스트 : ${testCase.userNumber}`, () => {
      const numberValidator = new BaseballValidator();
      expect(() =>
        numberValidator.numberValidator(testCase.userNumber),
      ).toThrow(Error);
    });
  });
});

describe('InputTest', () => {
  const testCases = [
    { userNumber: '0' },
    { userNumber: '!' },
    { userNumber: '3' },
    { userNumber: '일' },
    { userNumber: '-1' },
    { userNumber: '-2' },
    { userNumber: '1.5' },
    { userNumber: '1.0' },
  ];

  testCases.forEach((testCase) => {
    test(`reGame 번호 테스트 : ${testCase.userNumber}`, () => {
      const numberValidator = new BaseballValidator();
      expect(() =>
        numberValidator.reGameValidator(testCase.userNumber),
      ).toThrow(Error);
    });
  });
});
