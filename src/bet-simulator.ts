import Chance from "chance";

export default class BetSimulator {
  private readonly minPoint: number = 1.01;
  private readonly maxPoint: number = 10;
  private readonly amount: number = 100;
  private readonly chance;
  private totalWin: number;
  private totalAmount: number;

  constructor(minPoint: number, maxPoint: number) {
    this.minPoint = minPoint;
    this.maxPoint = maxPoint;
    this.chance = new Chance();
    this.totalAmount = 0;
    this.totalWin = 0;
  }

  bet() {
    this.totalAmount += this.amount;

    return { bet: this.amount, choice: this.chance.floating({ min: this.minPoint, max: this.maxPoint, fixed: 2 }) };
  }

  win(multiplier: number) {
    this.totalWin += this.amount * multiplier;
  }

  rtp() {
    return (this.totalWin / this.totalAmount) * 100;
  }
}
