import { Competitor } from "../competitor";
import { Match } from "../match";
import { Round } from "../round";
import { Bracket } from "./bracket";

export class WinnersBracket extends Bracket{
  
  createRounds(roster: any[], seedOrder:any) {
    const round1 = new Round(roster, seedOrder);
     this.rounds = [round1];
    let nextRoundSize = round1.noOfMatches;
    this.noOfMatches = round1.noOfMatches;
    if (this.noOfMatches > 1) {
      do {
        nextRoundSize = nextRoundSize / 2;
        this.deriveRound();
      } while (nextRoundSize > 1);
    }
    const winnerRound = new Round();
    const winner = new Competitor({
      id: -1,
      name: `Winner `,
    });
    const match = new Match(winner, new Competitor(), -2);
    winnerRound.addMatch(match);
    this.addRound(winnerRound);
  }
  private deriveRound() {
    const oldRound = this.rounds[this.noOfRounds - 1];
    let newMatchId = this.noOfMatches + 1;
    const newRound = new Round();

    for (let i = 0; i < oldRound.noOfMatches; i = i + 2) {
      const winner1 = new Competitor({
        id: -1,
        name: `winner of match ${oldRound.getMatch(i).id}`,
      });
      const j = i + 1;
      const winner2 = new Competitor({
        id: -1,
        name: `winner of match ${oldRound.getMatch(j).id}`,
      });
      const match = new Match(winner1, winner2, newMatchId++);
      newRound.addMatch(match);
    }
    this.addRound(newRound);
    // this.noOfMatches = newMatchId;
  }

  getLoserRoster(): any[] {
    const loserRoster = [[]] as any;
    let roundCnt=0;
    for (const round of this.rounds){
      const competitors=[];
      for (const match of round.matches) {
        competitors.push({id: match.id, name:`Loser of ${match.id.toString()}`});
      }
      loserRoster[roundCnt] = competitors;
      roundCnt++;
    }
    
    return loserRoster.slice(0,-1);
  }
}
