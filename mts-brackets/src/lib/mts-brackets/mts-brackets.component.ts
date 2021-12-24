import { Component, Input, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { Bracket } from "../models/bracket/bracket";
import { WinnersBracket } from "../models/bracket/winner-bracket";
import { Competitor } from "../models/competitor";
import { Elimination } from "../models/elimination";
import { Match } from "../models/match";
import { MtsBracketsService } from "./mts-brackets.service";
import { EliminationType } from "../types/elimination-type";

@Component({
  selector: "mts-brackets",
  templateUrl: "./mts-brackets.component.html",
  styleUrls: ["./mts-brackets-component.css"],
})
export class MtsBracketsComponent implements OnInit, OnChanges {
  showWinners = false;
  showRepechage = false;
  printOnTwoPages = false;
  elimination: Elimination = new Elimination([]);
  readonly double: string = EliminationType.double;

  @Input() competitorRoster: any[] = [];
  @Input() title: string = 'Default Title';
  @Input() eliminationType: string = EliminationType.single;
  constructor(private mtsBracketService: MtsBracketsService) {}

  ngOnChanges(){
    this.ngOnInit();
  }

  ngOnInit(): void {
    const eliminationType = (this.competitorRoster.length < 3) ? EliminationType.single : this.eliminationType;
    this.elimination = new Elimination(
      this.competitorRoster,
      eliminationType
    );
    this.printOnTwoPages = this.elimination.winnersBracket.noOfRounds > 4;

    this.showWinners = true;
    this.showRepechage = this.elimination.hasRepechage;
  }

  isWinner(index: number): boolean {
    return index === this.winnersBracket.noOfRounds - 1;
  }

  isSingleWinnerRound(index: number): boolean {
    return (
      this.isWinner(index) && this.elimination.type !== EliminationType.double
    );
  }

  get winnersBracket(): Bracket {
    return this.elimination.winnersBracket;
  }
  get repechage(): Bracket {
    return this.elimination && this.elimination.repechage
      ? this.elimination.repechage
      : this.elimination.repechage; // should be empty
  }

  get isDouble(){
    return this.elimination.type === EliminationType.double;
  }

}
