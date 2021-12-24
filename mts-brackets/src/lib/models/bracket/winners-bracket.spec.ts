import { WinnersBracket } from "./winner-bracket";
import { generateMockRoster } from "../../functions/generate-mock-roster";

describe("WinnerBrackets", () => {
  let modelUnderTest: WinnersBracket;

  beforeEach(() => {
    modelUnderTest = new WinnersBracket(generateMockRoster(4));
  });

  describe("METHOD: constructor", () => {
    it("should work for set of 2", () => {
      const roster = generateMockRoster(2);
      modelUnderTest = new WinnersBracket(roster);
    });

    it("should work set of 4", () => {
      modelUnderTest = new WinnersBracket(generateMockRoster(4));
      expect(modelUnderTest.noOfRounds).toEqual(3);
    });
    it("should work set of 8", () => {
      modelUnderTest = new WinnersBracket(generateMockRoster(8));
      expect(modelUnderTest.noOfRounds).toEqual(4);
    });

    it("should work set of 16", () => {
      modelUnderTest = new WinnersBracket(generateMockRoster(16));
      expect(modelUnderTest).toBeTruthy();
      expect(modelUnderTest.noOfRounds).toEqual(5);
      expect(modelUnderTest.rounds[0].noOfMatches).toEqual(8);
      expect(modelUnderTest.rounds[1].noOfMatches).toEqual(4);
      expect(modelUnderTest.rounds[2].noOfMatches).toEqual(2);
      expect(modelUnderTest.rounds[3].noOfMatches).toEqual(1);
      expect(modelUnderTest.rounds[4].noOfMatches).toEqual(1);//winners round

      expect(modelUnderTest.noOfMatches).toEqual(16);
    });
  });

  describe("METHOD: getLosersAsRoster", () => {
    it("should the loserRoster should have the length as the noOfMatches-1 ('no winner round') for the bracket", () => {
      const winnersBracket = new WinnersBracket(generateMockRoster(4));
      const looserRoster = winnersBracket.getLoserRoster();

      expect(looserRoster.length).toEqual(winnersBracket.noOfRounds-1);
      expect(looserRoster[0].length).toEqual(2);
      expect(looserRoster[1].length).toEqual(1);
    });
  });
});
