import { ComponentFixture, TestBed, inject } from "@angular/core/testing";
import { provideAutoSpy, Spy } from "jasmine-auto-spies";
import { generateMockRoster } from "../functions/generate-mock-roster";

import { MtsRosterComponent } from "./mts-roster.component";
import { EliminationType } from "../types/elimination-type";

describe("MtsRosterComponent", () => {
  let component: MtsRosterComponent;
  let fixture: ComponentFixture<MtsRosterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MtsRosterComponent],
      imports: [],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(MtsRosterComponent);
  });

   describe("testing", () => {
    Given(() => {
      
      component = fixture.componentInstance;
      component.competitorRoster = generateMockRoster(16);
      component.eliminationType = EliminationType.roster;
      fixture.detectChanges();
    });
    Then(() => {
      expect(component.show).toBeTruthy();
    });
  });
});
