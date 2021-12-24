import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MtsRosterComponent } from './mts-roster/mts-roster.component';
import { MtsBracketsComponent } from './mts-brackets/mts-brackets.component';

@NgModule({
  declarations: [MtsBracketsComponent, MtsRosterComponent],
  imports: [CommonModule
  ],
  exports: [MtsBracketsComponent, MtsRosterComponent]
})
export class MtsBracketsModule { }
