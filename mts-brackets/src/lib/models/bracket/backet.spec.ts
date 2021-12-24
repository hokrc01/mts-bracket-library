import { generateMockRoster } from "../../functions/generate-mock-roster";
import { Bracket } from "./bracket";
import { WinnersBracket } from "./winner-bracket";

describe('abstract class Brackets testomg', () => {
  let mockBracket: Bracket;
  beforeEach(()=>{
    mockBracket = new WinnersBracket(generateMockRoster(16),true);
  });
  
  describe('ACCESSOR: lastRound', () => {
    Then('should have last round contain 1 match', () => {

     expect(mockBracket.lastRound.getMatch(0).competitor1.name).toEqual('Winner ');
    });
  });
});
