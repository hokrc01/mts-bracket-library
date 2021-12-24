import { ComponentFixture, TestBed, inject } from "@angular/core/testing";
import { provideAutoSpy, Spy } from "jasmine-auto-spies";
import { MtsBracketsService } from "./mts-brackets.service";
import { generateMockRoster } from "../functions/generate-mock-roster";
import { Elimination } from "../models/elimination";

import { MtsBracketsComponent } from "./mts-brackets.component";
import { MtsBracketsModule } from "../mts-brackets.module";
import { EliminationType } from "../types/elimination-type";

describe("MtsBracketsComponent", () => {
  let component: MtsBracketsComponent;
  let mtsBracketService: Spy<MtsBracketsService>;
  let fixture: ComponentFixture<MtsBracketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MtsBracketsComponent],
      imports: [MtsBracketsModule],
      providers: [provideAutoSpy(MtsBracketsService)],
    }).compileComponents();

    fixture = TestBed.createComponent(MtsBracketsComponent);
  });

   describe("Double Elimination", () => {
    Given(() => {
      mtsBracketService = TestBed.inject<any>(MtsBracketsService);
      
      component = fixture.componentInstance;
      component.competitorRoster = generateMockRoster(16);
      component.eliminationType = EliminationType.double;
      fixture.detectChanges();
    });
    Then(() => {
      expect(component.showWinners).toBeTruthy();
    });
  });
});
