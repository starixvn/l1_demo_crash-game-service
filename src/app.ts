import ResultGenerator from "./result-generator";
import BetSimulator from "./bet-simulator";

const start = () => {
  try {
    const numberOfRuns = 100;
    const resultGenerator = new ResultGenerator();
    const betSimulator = new BetSimulator(1.01, 10);
    const results: number[] = [];
    const betPatterns: number[] = [];

    for (let index = 0; index < numberOfRuns; index++) {
      const bet = betSimulator.bet();
      const crashPoint = resultGenerator.getCrashPoint();

      if (bet.choice <= crashPoint) {
        betSimulator.win(bet.choice);
      }

      betPatterns.push(bet.choice);
      results.push(crashPoint);
    }

    console.log(results);
    console.log(betPatterns);
    console.log(`RTP: ${betSimulator.rtp()}%`);
  } catch (err) {
    console.log(err);
  }
};

start();
