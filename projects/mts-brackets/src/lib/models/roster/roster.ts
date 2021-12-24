import { Competitor } from "../competitor";

export class Roster {
  private _roster: Competitor[] = [];
  constructor(roster: any[], seedOrder = true){
    this.createRoster(roster);
    if (seedOrder) {
      this.roster.reverse();
    }
  }
  private createRoster(roster: any[]) {
    this._roster = [];
    for (const data of roster) {
      const competitor = new Competitor(data);
      this._roster.push(competitor);      
    }
  }

  get roster(): Competitor[] {
    return this._roster;
  }
}
