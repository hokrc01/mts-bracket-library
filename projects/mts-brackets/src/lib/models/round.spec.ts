import { Round } from "./round";

import { Competitor } from "./competitor";
import { generateMockRoster } from "../functions/generate-mock-roster";

describe("Round Tests", () => {
  let modelUnderTest: Round;

  beforeEach(() => {
    modelUnderTest = new Round(generateMockRoster(32));
  });

  describe("METHOD: construct", () => {
    it("should create Matches", () => {
      expect(modelUnderTest.matches.length).toEqual(16);
      expect(modelUnderTest.matches[0].competitor2.name).toEqual('Seed-32');
    });
  });
  describe('METHOD get noOfMatches', () => {
    it('should have a length of 16', () => {
        expect(modelUnderTest.noOfMatches).toEqual(16);
      });
  });
  describe('METHOD: addByesIfNecessary', () => {
    it('should add 1 bye comepetitor',()=>{
      expect(modelUnderTest.addByesIfNecessary(generateMockRoster(15)).length).toEqual(16);
      expect(modelUnderTest.addByesIfNecessary(generateMockRoster(9)).length).toEqual(16);
      expect(modelUnderTest.addByesIfNecessary(generateMockRoster(11)).length).toEqual(16);

    });
  });

  describe('METHOD: sortIntoSeedOrder', () => {
    it('should 1v4,3v2 for 4 competitors',()=>{      
      const sortedRoster = modelUnderTest.sortIntoSeedOrder(generateMockRoster(4));
      expect(sortedRoster[0].id).toEqual(1);
      expect(sortedRoster[3].id).toEqual(2);

    });
    it('should 1v4,3v2 for 8 competitors',()=>{      
      const sortedRoster = modelUnderTest.sortIntoSeedOrder(generateMockRoster(8));
      expect(sortedRoster[0].id).toEqual(1);
      expect(sortedRoster[7].id).toEqual(2);


    });
  });

  describe('PROPERTY: roster', () => {
    it('Should be 5', () => {
      modelUnderTest = new Round(generateMockRoster(4), false);
      const roster = modelUnderTest.roster;
      expect(roster.length).toEqual(4);

    });

    
  });
});

