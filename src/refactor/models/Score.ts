import Player from './Player';

export default abstract class Score {
  protected player1: Player;
  protected player2: Player;

  constructor(p1: Player, p2: Player) {
    this.player1 = p1;
    this.player2 = p2;
  }

  public abstract isApplicable(): boolean;
  public abstract score(): string;
}
