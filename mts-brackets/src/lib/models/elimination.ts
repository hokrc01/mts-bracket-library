import { EliminationType } from "../types/elimination-type";
import { LosersBracket } from "./bracket/losers-bracket";
import { WinnersBracket } from "./bracket/winner-bracket";

export class Elimination {
  private _winnerBracket: WinnersBracket;
  private _repechageBracket: LosersBracket = new LosersBracket([]);
  private _type: string;
  
  constructor(competitorRoster: any[], type: string = EliminationType.single) {
    this._type = type;
    this._winnerBracket = new WinnersBracket(competitorRoster, true);
    if ((competitorRoster.length > 2) && (type !== EliminationType.single)) {
      this._repechageBracket = new LosersBracket(this._winnerBracket.getLoserRoster(), false);
    }
  }

  get hasRepechage():boolean {
    return ((this._type !== EliminationType.single) && (this._repechageBracket !== undefined));
  }

  get type(): string {
    return this._type;
  }

  get winnersBracket(): WinnersBracket {
    return this._winnerBracket;
  }

  get repechage(): LosersBracket {
    return this._repechageBracket;
  }
  
}
