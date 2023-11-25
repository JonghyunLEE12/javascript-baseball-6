export const STATUS_MSG = {
  gameStart: '숫자 야구 게임을 시작합니다.',
};

export const INPUT_MSG = {
  inputNumber: '숫자를 입력해주세요 : ',
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
  lengthError: '[ERROR] 3자리의 숫자만 입력해주세요.',
};

export const STRIKE_BALL = {
  strike: 0,
  ball: 0,
};
