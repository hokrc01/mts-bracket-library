import { TestBed } from "@angular/core/testing";
import { Elimination } from "../models/elimination";
import { MtsBracketsService } from "./mts-brackets.service";
import { EliminationType } from "../types/elimination-type";

describe("MtsBracketsService", () => {
  let service: MtsBracketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MtsBracketsService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("METHOD: getTitle()",()=>{
    expect(service.getTitle()).toContain(EliminationType.single);
  });

});
