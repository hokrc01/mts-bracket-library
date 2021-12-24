import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Elimination } from "../models/elimination";
import { EliminationType } from "../types/elimination-type";
@Injectable({
  providedIn: "root",
})
export class MtsBracketsService {
  competitorRoster: Subject<any[]> = new Subject<any[]>();
  elminationType: string = EliminationType.single;
  title: string = "<Tournament Name> - <Event> - <Division Name>";


  getTitle(): string {
    return `${this.title} - ${this.elminationType}`;
  }

}
