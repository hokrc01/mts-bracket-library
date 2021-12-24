import { EliminationType } from "../types/elimination-type";
import { Elimination } from "./elimination";
import { generateMockRoster } from "../functions/generate-mock-roster";
import { Spy } from "jasmine-auto-spies";
import { WinnersBracket } from "./bracket/winner-bracket";
import { Bracket } from "./bracket/bracket";
import { EMLINK } from "constants";

describe("Elimination Single", () => {
  let elimination: Elimination;

  it("should Exist", () => {
    elimination = new Elimination([], EliminationType.single);
    expect(elimination).toBeTruthy();
  });

  describe("PROPERTY: winnersBracket", () => {
    it("should have winnersBracket if roster exists", () => {
      elimination = new Elimination(generateMockRoster(3));
      expect(elimination.winnersBracket).toBeInstanceOf(Bracket);
    });
  });

  describe("PROPERTY: hasRepechage", () => {
    it("should be false when single Elimination", () => {
      elimination = new Elimination([], EliminationType.single);
      expect(elimination.hasRepechage).toBeFalsy();
    });

    it("should be false when double Elimination has 2 or less competitors", () => {
      elimination = new Elimination([], EliminationType.double);
      expect(elimination.hasRepechage).toBeFalsy();
    });
    it("should be true when double Elimination", () => {
      elimination = new Elimination(
        generateMockRoster(3),
        EliminationType.double
      );
      expect(elimination.hasRepechage).toBeTruthy();
    });
  });
  describe("METHOD: constructor", () => {
    it("should have repechageBracket if more than 2 competitors", () => {
      elimination = new Elimination(
        generateMockRoster(3),
        EliminationType.double
      );
      expect(elimination.hasRepechage).toBeTruthy();
    });
  });
});
