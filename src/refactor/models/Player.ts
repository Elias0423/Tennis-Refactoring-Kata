export default class Player {
  private name: string;
  private score: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  public getScore(): number {
    return this.score;
  }
  public getName(): string {
    return this.name;
  }

  public wonPoint(): void {
    this.score++;
  }

  public hasAdventajeOver(secondPlayer: Player): boolean {
    return this.score >= 4 && this.score - secondPlayer.getScore() === 1;
  }

  public hasWonOver(secondPlayer: Player): boolean {
    return this.score >= 4 && this.score - secondPlayer.getScore() >= 2;
  }
}
