import { generateMockRoster } from "./generate-mock-roster";

describe("FUNCTION: generateMockRoster", () => {
  it("should generate mock roster of n values", () => {
    for (let i = 0; i < 32; i++) {
      expect(generateMockRoster(i).length).toEqual(i);
    }
  });
});
