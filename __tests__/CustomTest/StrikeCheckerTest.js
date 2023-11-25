/* eslint-disable max-lines-per-function */
import StrikeChecker from '../../src/domain/utils/StrikeChecker.js';

describe('StrikeCheckerTest', () => {
  const testCases = [
    {
      answer: ['1', '2', '3'],
      user: ['1', '3', '2'],
      expected: { strike: 1, ball: 2 },
    },
  ];

  testCases.forEach((testCase) => {
    test(`정답 : ${testCase.answer}, 유저 : ${testCase.user}`, () => {
      const strikeChecker = new StrikeChecker();
      expect(
        strikeChecker.checking(testCase.answer, testCase.user),
      ).toStrictEqual(testCase.expected);
    });
  });
});
