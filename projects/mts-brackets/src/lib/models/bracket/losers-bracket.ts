import { Competitor } from "../competitor";
import { Match } from "../match";
import { Round } from "../round";
import { Bracket } from "./bracket";

export class LosersBracket extends Bracket {
  constructor(losersRoster: any[], seedOrder = false) {
    super(losersRoster, seedOrder);
    // this.addRepechage(losersRoster.slice(1,losersRoster.length));
  }
  createRounds(losersFromWinnersRoster: any, sortOrder = false) {
    let currentRound = new Round(losersFromWinnersRoster[0], sortOrder);
    this.addRound(currentRound);
    let matchCount = currentRound.noOfMatches;
    let nextRound: Round;

    for (let i = 1; i < losersFromWinnersRoster.length; i++) {
      nextRound = new Round([], false, this.lastRound.lastMatch.id + 1);
      let elementCount = 0;
      for (const loserRosterElement of losersFromWinnersRoster[i]) {
        matchCount++;
        
        const match = new Match(
          new Competitor(loserRosterElement),
          new Competitor({
            id: -1,
            name: `Winner of R${currentRound.getMatch(elementCount).id}`,
          }),
          matchCount
        );
        nextRound.addMatch(match);
        elementCount++;
      }
      this.addRound(nextRound);
      if (losersFromWinnersRoster.length < 3){
        continue;
      }
      //console.log('now processing round '+i);
      if ((i < (losersFromWinnersRoster.length-1))) {
        const winnerRound = new Round([], false, this.lastRound.lastMatch.id+1);
        for (let matchCnt = 0; matchCnt < nextRound.noOfMatches; matchCnt+=2) {
          matchCount++;
          const match = new Match(
               new Competitor({id:-1, name: `Winner of R${nextRound.getMatch(matchCnt).id.toString()}`}),
               new Competitor({id:-1, name: `Winner of R${nextRound.getMatch(matchCnt+1).id.toString()}`}),
               matchCount
             );
          winnerRound.addMatch(match);
        }        
        currentRound = winnerRound;
        this.addRound(winnerRound);
      } else {
        currentRound = nextRound;
      }
    }  
  }

  addWinnersRound(baseRound: Round) {
    const winnerRoster: any[] = [];
    for (const match of baseRound.matches) {
      winnerRoster.push({ id: -1, name: `Winner of R${match.id.toString()}` });
    }
    const winnerRound = new Round(winnerRoster, false, this.noOfMatches);
    this.noOfMatches += winnerRound.noOfMatches;
    this.rounds.push(winnerRound);
  }
}
