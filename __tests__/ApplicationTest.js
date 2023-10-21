import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("숫자 야구 게임", () => {
  test("게임 종료 후 재시작", async () => {
    // given
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ["246","135", "1", "597", "589", "2"];
    const logSpy = getLogSpy();
    const messages = ["낫싱","3스트라이크", "1볼 1스트라이크", "3스트라이크", "게임 종료"];
    

    mockRandoms(randoms);
    mockQuestions(answers);

    // when
    const app = new App();
    await expect(app.play()).resolves.not.toThrow();

    // then
    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  
  test("예외 테스트", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["1234"];
    
    mockRandoms(randoms);
    mockQuestions(answers);
    
    // when & then
    const app = new App();
    
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });


  // TEST
  test("게임 종료 후 재시작(TEST)", async () => {
    // given
    const randoms = [5,8,9,1,3,5];
    // const answers = ["135","1", "597", "589", "2"];
    const answers = ["851","589","1", "132", "351","135","2"];
    const logSpy = getLogSpy();
    const messages = ["2볼","3스트라이크","2스트라이크","3볼","3스트라이크","게임 종료"];
    
  
    mockRandoms(randoms);
    mockQuestions(answers);
  
    // when
    const app = new App();
    await expect(app.play()).resolves.not.toThrow();
  
    // then
    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("스트라이크 & 볼 테스트", async () => {
    // given
    const randoms = [2, 7, 4, 6, 3, 1];
    const answers = ["734", "274", "1", "367", "631", "2"];
    const logSpy = getLogSpy();
    const messages = ["1볼 1스트라이크", "3스트라이크", "2볼", "3스트라이크", "게임 종료"];
    
  
    mockRandoms(randoms);
    mockQuestions(answers);
  
    // when
    const app = new App();
    await expect(app.play()).resolves.not.toThrow();
  
    // then
    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test("예외 테스트(USER_NUMBER ERROR)", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["1a1"];
    
    mockRandoms(randoms);
    mockQuestions(answers);
    
    // when & then
    const app = new App();
    
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트(REGAME ERROR)", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["135","3스트라이크","a"];
    
    mockRandoms(randoms);
    mockQuestions(answers);
    
    // when & then
    const app = new App();
    
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트(REGAME ERROR)", async () => {
    // given
    const randoms = [1, 3, 5];
    const answers = ["135","3스트라이크","a"];
    
    mockRandoms(randoms);
    mockQuestions(answers);
    
    // when & then
    const app = new App();
    
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트(USER_NUMBER ERROR) 특수문자 입력", async () => {
    // given
    const randoms = [5, 6, 7];
    const answers = ["!@#$"];
    
    mockRandoms(randoms);
    mockQuestions(answers);
    
    // when & then
    const app = new App();
    
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트(USER_NUMBER ERROR) 잘못된 숫자 입력", async () => {
    // given
    const randoms = [5, 6, 7];
    const answers = ["1"];
    
    mockRandoms(randoms);
    mockQuestions(answers);
    
    // when & then
    const app = new App();
    
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트(USER_NUMBER ERROR) 잘못된 숫자 입력", async () => {
    // given
    const randoms = [5, 6, 7];
    const answers = ["123456789"];
    
    mockRandoms(randoms);
    mockQuestions(answers);
    
    // when & then
    const app = new App();
    
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  test("예외 테스트(USER_NUMBER ERROR) 잘못된 숫자 입력", async () => {
    // given
    const randoms = [5, 6, 7];
    const answers = ["000"];
    
    mockRandoms(randoms);
    mockQuestions(answers);
    
    // when & then
    const app = new App();
    
    await expect(app.play()).rejects.toThrow("[ERROR]");
  });

  
});
