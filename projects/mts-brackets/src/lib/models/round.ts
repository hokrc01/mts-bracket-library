import { Competitor } from "./competitor";
import { Match } from "./match";

export class Round {
  matches: Match[];
  private matchIdStart: number;

  constructor(roster?: any[], sort: boolean = true, matchIdStart=1) {
    this.matchIdStart = matchIdStart;
    this.matches = [];
    if (!roster) {
      return;
    }
    if (sort) {
      roster = this.addByesIfNecessary(roster);
      roster = this.sortIntoSeedOrder(roster);
    }
    this.createMatches(roster);
    // this.wrongSort(roster);
  }
  private createMatches(roster: any[]) {
    const noMatches = roster.length / 2;
    this.matches = [];
    let cnt = this.matchIdStart;
    for (let i = 0; i < roster.length; i += 2) {
      const match = new Match(roster[i], roster[i + 1], cnt++);
      this.addMatch(match);
    }
  }


  addByesIfNecessary(roster: any[]): any[] {
    const maxNoCompetitors = this.calcMaxCompetitors(roster);
    for (let i = roster.length; roster.length < maxNoCompetitors; i++) {
      roster.push({ id: 0, name: "Bye" });
    }
    return roster;
  }
  private calcMaxCompetitors(roster: any[]): number {
    let maxCompetitors: number = 0;
    let rounds = 0;
    while (maxCompetitors < roster.length) {
      maxCompetitors = Math.pow(2, rounds);
      rounds++;
    }
    return maxCompetitors;
  }

  sortIntoSeedOrder(roster: any[]): any[] {
    // imperative style
    const n = roster.length;

    let sortedIndex = new Array(n);
    sortedIndex[0] = 0;
    for (let i = n >> 1, m = 1; i >= 1; i >>= 1, m = (m << 1) + 1) {
      for (let j = n - i; j > 0; j -= i) {
        sortedIndex[j] = m - sortedIndex[(j -= i)];
      }
    }
    sortedIndex = this.reorderSeedIndex(sortedIndex);

    return sortedIndex.map((i: number) => roster[i]);
  }

  private reorderSeedIndex(baseSeedIndex: any[]) {
    const indexPart1 = baseSeedIndex.slice(0, baseSeedIndex.length / 2);
    const indexPart2 = baseSeedIndex.slice(baseSeedIndex.length / 2).reverse();
    const seedIndex = [...indexPart1, ...indexPart2];

    return seedIndex;
  }

  addMatch(match: Match) {
    this.matches.push(match);
  }

  getMatch(index: number): Match {
    if (index >= this.matches.length) {
      throw new Error(`C247Error: getMatch failed index = ${index.toString()} and length: ${this.matches.length.toString()}`);
    }
    return this.matches[index];
  }

  getMatches(): Match[] {
    return this.matches;
  }

  get noOfMatches(): number {
    return this.matches.length;
  }

  get roster(): any[] {
    const competitors = [];
    for (const match of this.matches) {
      competitors.push({...match.competitor1});
      competitors.push({...match.competitor2});
      
    }
    return competitors;
  }

  createRound(roster:any[], matchCountStart: number = 0) {
    console.log(roster);
  }

  get lastMatch(): Match{
    return this.matches[this.noOfMatches - 1];
  }
}
