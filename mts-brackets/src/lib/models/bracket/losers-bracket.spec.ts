import { LosersBracket } from "./losers-bracket";
import { generateMockRoster } from "../../functions/generate-mock-roster";
import { WinnersBracket } from "./winner-bracket";

describe("LosersBracket", () => {
  let modelUnderTest: LosersBracket;

  describe("METHOD: constructor", () => {
    it("should be true", () => {
      const winnersBracket = new WinnersBracket(generateMockRoster(4));

      const loserBracket = new LosersBracket(
        winnersBracket.getLoserRoster(),
        false
      );
      expect(loserBracket.rounds.length).toBe(2);
      expect(loserBracket.rounds[0].noOfMatches).toBe(1);
    });

    it("should work for 8 competitors", () => {
      const winnersBracket = new WinnersBracket(generateMockRoster(8));
      const loserBracket = new LosersBracket(
        winnersBracket.getLoserRoster(),
        false
      );

      expect(loserBracket.rounds[0].noOfMatches).toEqual(2);
      expect(loserBracket.rounds[1].noOfMatches).toEqual(2);
      expect(loserBracket.rounds[2].noOfMatches).toEqual(1);
      expect(loserBracket.rounds[3].noOfMatches).toEqual(1);
      expect(loserBracket.rounds.length).toBe(4);
    });

    it("should work for 16 competitors", () => {
      const winnersBracket = new WinnersBracket(generateMockRoster(16));
      const loserBracket = new LosersBracket(
        winnersBracket.getLoserRoster(),
        false
      );

      expect(loserBracket.rounds.length).toBe(6);
    });
    it("should work for 32 competitors", () => {
      const winnersBracket = new WinnersBracket(generateMockRoster(32));
      const loserBracket = new LosersBracket(
        winnersBracket.getLoserRoster(),
        false
      );

      expect(loserBracket.rounds.length).toBe(8);
    });
  });
});
