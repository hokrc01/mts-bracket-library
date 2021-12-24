import { Round } from "../round";

export abstract class Bracket {
  public rounds: Round[];
  public noOfMatches: number;

  constructor(roster: any[], seedOrder=true) {
    this.rounds = [];
    this.noOfMatches = 0;
    this.createRounds(roster,  seedOrder);
  }

  abstract createRounds(roster: any[], seedOrder:boolean): void;

  protected addRound(round: Round) {
    this.noOfMatches += +round.noOfMatches;
    this.rounds.push(round);
  }
  get noOfRounds(): number {
    return this.rounds.length;
  }

  get lastRound(): Round {
    return this.rounds[this.rounds.length-1];
  }
    

}