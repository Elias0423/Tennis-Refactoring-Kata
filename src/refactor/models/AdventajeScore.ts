import Score from './Score';

export default class AdventajeScore extends Score {
  public isApplicable(): boolean {
    return this.player1.hasAdventajeOver(this.player2) || this.player2.hasAdventajeOver(this.player1);
  }

  public score(): string {
    return 'Advantage ' + this.playerInAdvantage();
  }

  private playerInAdvantage(): string {
    return this.player1.hasAdventajeOver(this.player2) ? this.player1.getName() : this.player2.getName();
  }
}
