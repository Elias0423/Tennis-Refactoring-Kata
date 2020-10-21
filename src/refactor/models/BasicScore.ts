import Score from './Score';

export default class BasicScore extends Score {
  private LIST_SCORES: string[] = ['Love', 'Fifteen', 'Thirty', 'Forty'];

  public isApplicable(): boolean {
    return this.player1.getScore() < 4 && this.player2.getScore() < 4 && !(this.player1.getScore() + this.player2.getScore() === 6);
  }

  public score(): string {
    const player1Score = this.LIST_SCORES[this.player1.getScore()];

    if (this.player1.getScore() === this.player2.getScore()) {
      return player1Score + '-All';
    } else {
      const player2Score = this.LIST_SCORES[this.player2.getScore()];
      return player1Score + '-' + player2Score;
    }
  }
}
