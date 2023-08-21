import { getRandomValues } from "crypto";

export default class ResultGenerator {
  getCrashPoint(): number {
    const e = 2 ** 32;
    const h = getRandomValues(new Uint32Array(1))[0];
    // if h % (100 / desired_precentage) is 0 then the game will crash immediately
    if (h % 50 === 0) {
      return 1;
    }

    return Math.floor((100 * e - h) / (e - h)) / 100;
  }
}
