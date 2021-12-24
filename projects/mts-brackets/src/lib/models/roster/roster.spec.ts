import { Roster } from "./roster";
import { generateMockRoster } from "../../functions/generate-mock-roster";
import { Competitor } from "../competitor";

describe("METHOD: constructor", () => {
  let modelUnderTest: Roster;
  it("should work for set of 7", () => {
    const noCompetitors = Math.ceil((Math.random()*10));
    const roster = generateMockRoster(noCompetitors);
    modelUnderTest = new Roster(roster);
    expect(modelUnderTest.roster.length).toEqual(roster.length);
    let cnt = 0;
    for (const competitor of modelUnderTest.roster) {
      const index = roster.length -1 - cnt;
      expect(competitor.name).toEqual(roster[index].name);
      cnt++;
    }
  });

  
});

describe("Roster", () => {
  let modelUnderTest: Roster;

  beforeEach(() => {
    modelUnderTest = new Roster(generateMockRoster(4));
  });



  
});
