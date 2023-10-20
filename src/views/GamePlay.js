const CONTROL = require('../controller/ControllerTest');
const OUT_VIEW = require('../views/OutputView');
const VAL = require('../controller/Validate')
const MissionUtils = require('@woowacourse/mission-utils');
const { OUTPUT_MSG , ERROR_MSG } = require('../models/OutputMsg');

// CONSTANTS
const { CONSTANTS , STRIKE_BALL } = require('../models/Constants');


class GamePlay {
    constructor() {
        this.OUT = new OUT_VIEW();
        this.CON = new CONTROL();
        this.VAL = new VAL();
    }

    startGame = async () => {
        // MissionUtils.Console.print(OUTPUT_MSG.START_GAME);
        await this.#getAnswerUserNumber();
    }

    #getAnswerUserNumber = async () => {
        this.CON.makeAnswer();
        while (true) {
            STRIKE_BALL.STRIKE = 0;
            STRIKE_BALL.BALL = 0;
            await this.CON.inputUserNumber();
            this.CON.checkingStrike(CONSTANTS.USER_NUMBER);
            MissionUtils.Console.print(`${this.OUT.printResult()}`);
            if (STRIKE_BALL.STRIKE === 3) break;
        }
        this.#getUserReGame();
    }

    #getUserReGame = async () => {
        await this.CON.endGame();
        (CONSTANTS.REGAME_CONSTANTS == 1) ? this.startGame() : this.#gameOver();
    }

    #gameOver = async () => {
        await MissionUtils.Console.print(OUTPUT_MSG.GAME_OVER);
    }
}

module.exports = GamePlay;