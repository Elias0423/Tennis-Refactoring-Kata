import Score from './Score';

export default class WinScore extends Score {
  public isApplicable(): boolean {
    return this.player1.hasWonOver(this.player2) || this.player2.hasWonOver(this.player1);
  }

  public score(): string {
    return 'Win for ' + this.playerWinner();
  }

  private playerWinner() {
    return this.player1.hasWonOver(this.player2) ? this.player1.getName() : this.player2.getName();
  }
}
