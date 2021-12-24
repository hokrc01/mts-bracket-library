import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Roster } from '../models/roster/roster';
import { Competitor } from '../models/competitor';
import { EliminationType } from '../types/elimination-type';

@Component({
  selector: 'mts-roster',
  templateUrl: './mts-roster.component.html',
  styleUrls: ['./mts-roster-component.css'],
})
export class MtsRosterComponent implements OnChanges, OnInit {
  show = false;
  competitors = new Roster([]);

  @Input() competitorRoster: any[] = [];
  @Input() title: string = 'Default Title';
  @Input() eliminationType: string = EliminationType.roster;
  constructor() {}

  ngOnChanges() {
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.show = true;
    this.competitors = new Roster(this.competitorRoster);
  }
}
