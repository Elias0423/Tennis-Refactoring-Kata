import Score from './Score';

export default class DeuceScore extends Score {
  public isApplicable(): boolean {
    return this.player1.getScore() === this.player2.getScore() && this.player1.getScore() >= 3;
  }

  public score(): string {
    return 'Deuce';
  }
}
