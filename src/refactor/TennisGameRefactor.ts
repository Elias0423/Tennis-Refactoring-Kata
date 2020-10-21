import Player from './models/Player';
import { TennisGame } from '../TennisGame';
import Score from './models/Score';
import BasicScore from './models/BasicScore';
import DeuceScore from './models/DeuceScore';
import WinScore from './models/WinScore';
import AdventajeScore from './models/AdventajeScore';

export class TennisGameRefactor implements TennisGame {
  private player1: Player;
  private player2: Player;

  constructor(p1N: string, p2N: string) {
    this.player1 = new Player(p1N);
    this.player2 = new Player(p2N);
  }

  getScore(): string {
    let scores: Score[] = this.listScores();
    for (let i = 0; i < scores.length; i++) {
      const score = scores[i];
      if (score.isApplicable()) return score.score();
    }
    return 'NO SCORE';
  }

  wonPoint(playerName: string): void {
    if (playerName === this.player1.getName()) this.player1.wonPoint();
    else this.player2.wonPoint();
  }

  private listScores(): Score[] {
    return [new BasicScore(this.player1, this.player2), new DeuceScore(this.player1, this.player2), new AdventajeScore(this.player1, this.player2), new WinScore(this.player1, this.player2)];
  }
}
