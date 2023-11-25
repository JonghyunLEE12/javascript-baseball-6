export const STATUS_MSG = {
  gameStart: '숫자 야구 게임을 시작합니다.',
  strike: '3개의 숫자를 모두 맞히셨습니다! 게임 종료',
  gameOver: '게임 종료',
};

export const INPUT_MSG = {
  inputNumber: '숫자를 입력해주세요 : ',
  reGame: '게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.',
};

export const OUTPUT_MSG = {
  result: (checking) => {
    if (checking.strike === 0 && checking.ball === 0) {
      return '낫싱';
    }
    if (checking.ball === 0) {
      return `${checking.strike}스트라이크`;
    }
    if (checking.strike === 0) {
      return `${checking.ball}볼`;
    }
    return `${checking.ball}볼 ${checking.strike}스트라이크`;
  },
};

export const ERROR_MSG = {
  notSafeIntegerError: '[ERROR] 올바른 숫자가 아닙니다.',
  lengthError: '[ERROR] 3자리의 숫자만 입력해주세요.',
  regexError: '[ERROR] 문자, 특수문자, 공백을 제외한 숫자만 입력해주세요.',
  duplicateError: '[ERROR] 숫자가 중복되었습니다.',
  reGameError: '[ERROR] 재게임 숫자는 1 또는 2로 입력해주세요',
  notZero: '[ERROR] 1 부터 9 까지의 값만 입력해주세요',
};

export const STRIKE_BALL = {
  strike: 0,
  ball: 0,
};

export const GAME_CONST = {
  strike: 3,
  reGame: '1',
  maxLength: 3,
  NumberFrom: 1,
  NumberTo: 9,
};
